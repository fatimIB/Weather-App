import os
import requests


YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")


def get_youtube_video(location):


    url = (
        "https://www.googleapis.com/youtube/v3/search"
        f"?part=snippet"
        f"&q={location} travel"
        f"&type=video"
        f"&maxResults=1"
        f"&key={YOUTUBE_API_KEY}"
    )


    response = requests.get(url)


    data = response.json()



    if "items" not in data or len(data["items"]) == 0:

        return None



    return data["items"][0]["id"]["videoId"]