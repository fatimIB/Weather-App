import json
import requests
from flask import Blueprint, request, jsonify
from models import WeatherRecord
from extensions import db
from datetime import datetime,timedelta

from services.weather_service import (
    get_coordinates,
    get_forecast,
    build_saved_weather
)

weather_bp = Blueprint(
    "weather",
    __name__
)



@weather_bp.route("/weather", methods=["POST"])
def get_weather():

    data = request.json

    location = data.get("location")

    start_date = data.get("startDate")

    end_date = data.get("endDate")

    if not start_date:
        start_date = datetime.today().strftime("%Y-%m-%d")

    if not end_date:
        end_date = (
            datetime.today() + timedelta(days=5)
        ).strftime("%Y-%m-%d")

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

    record = WeatherRecord(

        location=place["name"],

        country=place.get("country"),

        start_date=start_date,

        end_date=end_date,

        weather_data=json.dumps(saved_weather)

    )

    db.session.add(record)

    db.session.commit()

    return jsonify({
        "id": record.id,

        "location": place["name"],

        "country": place.get("country"),

        "coordinates": {
            "lat": lat,
            "lon": lon
        },

        "forecast": weather["daily"]

    })