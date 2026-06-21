import io
import csv
import json
import matplotlib.pyplot as plt
from flask import Blueprint, send_file

from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Image
)
from reportlab.lib.styles import getSampleStyleSheet
from models import WeatherRecord



export_bp = Blueprint(
    "export",
    __name__
)

# CSV EXPORT
@export_bp.route("/history/<int:id>/export/csv")
def export_csv(id):
    record = WeatherRecord.query.get(id)
    if not record:
        return { "error":"Record not found" },404
    weather = json.loads(record.weather_data)
    daily = weather["daily"]
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow([
        "Date",
        "Day Temperature",
        "Night Temperature",
        "Sunrise",
        "Sunset",
        "Wind",
        "Rain"
    ])
    for i in range(len(daily["date"])):
        writer.writerow([
            daily["date"][i],
            daily["day_temperature"][i],
            daily["night_temperature"][i],
            daily["sunrise"][i],
            daily["sunset"][i],
            daily["wind"][i],
            daily["rain"][i]
        ])
    output.seek(0)
    return send_file(
        io.BytesIO(
            output.getvalue().encode()
        ),
        mimetype="text/csv",
        as_attachment=True,
        download_name=f"{record.location}_weather.csv"
    )

# PDF EXPORT
@export_bp.route("/history/<int:id>/export/pdf")
def export_pdf(id):
    record = WeatherRecord.query.get(id)
    if not record:
        return {"error":"Record not found"},404
    weather=json.loads(
        record.weather_data
    )
    daily=weather["daily"]

    # -------------------------
    # charts
    dates = daily["date"]
    charts=[]

    # Temperature chart
    plt.figure(figsize=(8,4))
    plt.plot(
        dates,
        daily["day_temperature"],
        label="Day Temperature"
    )
    plt.plot(
        dates,
        daily["night_temperature"],
        label="Night Temperature"
    )
    plt.title(
        "Temperature"
    )
    plt.xlabel(
        "Date"
    )
    plt.ylabel(
        "°C"
    )
    plt.legend()
    plt.xticks(rotation=45)
    temp_img=io.BytesIO()
    plt.tight_layout()
    plt.savefig(
        temp_img,
        format="png"
    )
    plt.close()

    temp_img.seek(0)

    charts.append(temp_img)

    # Wind chart
    plt.figure(figsize=(8,4))
    plt.bar(
        dates,
        daily["wind"]
    )
    plt.title(
        "Wind Speed"
    )
    plt.ylabel(
        "km/h"
    )
    plt.xticks(rotation=45)
    wind_img=io.BytesIO()
    plt.tight_layout()
    plt.savefig(
        wind_img,
        format="png"
    )
    plt.close()
    wind_img.seek(0)
    charts.append(wind_img)

    # Rain chart
    plt.figure(figsize=(8,4))
    plt.bar(
        dates,
        daily["rain"]
    )
    plt.title(
        "Rain"
    )
    plt.ylabel(
        "mm"
    )
    plt.xticks(rotation=45)
    rain_img=io.BytesIO()
    plt.tight_layout()
    plt.savefig(
        rain_img,
        format="png"
    )
    plt.close()
    rain_img.seek(0)
    charts.append(rain_img)

    # CREATE PDF
    pdf_file = io.BytesIO()
    document = SimpleDocTemplate(
        pdf_file

    )
    styles = getSampleStyleSheet()
    content=[]
    content.append(
        Paragraph(
            f"Weather Report - {record.location}",
            styles["Title"]
        )

    )

    content.append(
        Spacer(1,20)
    )
    content.append(
        Paragraph(
            f"Country : {record.country}",
            styles["Normal"]
        )

    )
    content.append(
        Spacer(1,20)

    )
    for chart in charts:
        content.append(
            Image(
                chart,
                width=400,
                height=200
            )
        )
        content.append(
            Spacer(1,20)
        )

    document.build(content)
    pdf_file.seek(0)

    return send_file(
        pdf_file,
        mimetype="application/pdf",
        as_attachment=True,
        download_name=f"{record.location}_weather.pdf"

    )