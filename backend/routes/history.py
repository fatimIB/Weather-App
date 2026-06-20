import json
from flask import Blueprint,jsonify,request
import requests
from models import WeatherRecord
from extensions import db

from services.weather_service import (
    get_coordinates,
    get_forecast,
    build_saved_weather
)



history_bp = Blueprint(
"history",
__name__
)

@history_bp.route("/history")
def history():

    records=WeatherRecord.query.all()
    return jsonify([

    {
    "id":r.id,
    "location":r.location,
    "country":r.country,
    "start":r.start_date,
    "end":r.end_date
    }

    for r in records

    ])




@history_bp.route("/history/<int:id>")
def details(id):

    record=WeatherRecord.query.get(id)


    return jsonify({

    "id":record.id,

    "location":record.location,

    "weather_data":json.loads(record.weather_data)

    })




@history_bp.route("/history/<int:id>",methods=["DELETE"])
def delete(id):

    record=WeatherRecord.query.get(id)


    db.session.delete(record)

    db.session.commit()


    return jsonify(
    {
    "message":"Deleted"
    }
    )




@history_bp.route("/history/<int:id>", methods=["PUT"])
def update_history(id):

    record = WeatherRecord.query.get(id)

    if not record:
        return jsonify({
            "error": "Record not found"
        }), 404

    data = request.json

    location = data.get("location")

    start_date = data.get("startDate")

    end_date = data.get("endDate")

    place = get_coordinates(location)

    if not place:
        return jsonify({
            "error": "Location not found"
        }), 404

    lat = place["latitude"]
    lon = place["longitude"]

    weather = get_forecast(
        lat,
        lon,
        start_date,
        end_date
    )

    saved_weather = build_saved_weather(weather)

    record.location = place["name"]

    record.country = place.get("country")

    record.start_date = start_date

    record.end_date = end_date

    record.weather_data = json.dumps(
        saved_weather
    )

    db.session.commit()

    return jsonify({
        "message": "Updated successfully!"
    })