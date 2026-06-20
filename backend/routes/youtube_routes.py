from flask import Blueprint, request, jsonify
from services.youtube_service import get_youtube_video



youtube_bp = Blueprint(
    "youtube",
    __name__
)



@youtube_bp.route("/youtube", methods=["GET"])
def youtube():


    location = request.args.get("location")


    if not location:

        return jsonify({
            "error":"No location"
        }),400



    video_id = get_youtube_video(location)



    return jsonify({

        "videoId": video_id

    })