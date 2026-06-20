from extensions import db


class WeatherRecord(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    location = db.Column(
        db.String(100),
        nullable=False
    )

    country = db.Column(
        db.String(50)
    )

    start_date = db.Column(
        db.String(20)
    )

    end_date = db.Column(
        db.String(20)
    )

    weather_data = db.Column(
        db.Text
    )