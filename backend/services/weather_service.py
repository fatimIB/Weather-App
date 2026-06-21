import requests


def get_coordinates(location):
    geo_url = (
        f"https://geocoding-api.open-meteo.com/v1/search"
        f"?name={location}&count=1"
    )
    geo = requests.get(geo_url).json()
    if "results" not in geo:
        return None

    place = geo["results"][0]
    searched = location.lower().strip()
    found = place["name"].lower().strip()

    if searched not in found and found not in searched:
        return None
    return place


def get_forecast(lat, lon, start_date, end_date):

    weather_url = (
        f"https://api.open-meteo.com/v1/forecast?"
        f"latitude={lat}"
        f"&longitude={lon}"
        f"&daily="
        f"temperature_2m_max,"
        f"temperature_2m_min,"
        f"sunrise,"
        f"sunset,"
        f"precipitation_sum,"
        f"wind_speed_10m_max"
        f"&start_date={start_date}"
        f"&end_date={end_date}"
    )

    return requests.get(weather_url).json()


def build_saved_weather(weather):

    return {

        "daily": {

            "date":
            weather["daily"]["time"],

            "day_temperature":
            weather["daily"]["temperature_2m_max"],

            "night_temperature":
            weather["daily"]["temperature_2m_min"],

            "sunrise":
            weather["daily"]["sunrise"],

            "sunset":
            weather["daily"]["sunset"],

            "wind":
            weather["daily"]["wind_speed_10m_max"],

            "rain":
            weather["daily"]["precipitation_sum"]

        }

    }