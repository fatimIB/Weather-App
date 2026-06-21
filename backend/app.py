from flask import Flask
from flask_cors import CORS
from extensions import db
from routes.weather import weather_bp
from routes.history import history_bp
from routes.export import export_bp
from routes.youtube_routes import youtube_bp
from dotenv import load_dotenv



app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///weather.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False



db.init_app(app)

CORS(app)

load_dotenv()

with app.app_context():
    db.create_all()




app.register_blueprint(youtube_bp)

app.register_blueprint(weather_bp)

app.register_blueprint(history_bp)

app.register_blueprint(export_bp)




@app.route("/")
def home():
    return {
        "message":"Weather API is running"
    }

if __name__=="__main__":

    app.run(debug=True)