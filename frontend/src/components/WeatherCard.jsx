import "../Components_style/WeatherCard.css"

import sun from "../assets/sun.png"
import moon from "../assets/moon.png"
import rainIcon from "../assets/rain.png"
import windIcon from "../assets/wind.png"

function WeatherCard({
    location,
    day,
    night,
    sunrise,
    sunset,
    wind,
    rain
}) {
    let condition = "Sunny"
    let icon = sun
    if (rain > 0) {
        condition = "Rainy"
        icon = rainIcon
    }
    else if (wind > 30) {
        condition = "Windy"
        icon = windIcon

    }
    const formatTime = (dateTime) => {
        return dateTime.split("T")[1]

    }

    return (
        <div className="weather-card">
            <div className="weather-left">
                <h1>
                    {condition}
                </h1>
                <h2>
                    at {location}
                </h2>
            </div>

            <div className="weather-grid">
                <div className="weather-box">
                    <img src={sun} />
                    <h2>{day}°</h2>
                    <p>Day</p>
                </div>
                <div className="weather-box">
                    <img src={moon} />
                    <h2>{night}°</h2>
                    <p>Night</p>
                </div>
                <div className="weather-box">
                    <img src={windIcon} />
                    <h2>{wind}</h2>
                    <p>Wind km/h</p>

                </div>
                <div className="weather-box">
                    <img src={rainIcon} />
                    <h2>{rain}</h2>
                    <p>Rain mm</p>
                </div>

                <div className="weather-box sun-box">

                    <h2>{formatTime(sunrise)}</h2>
                    <p>Sunrise</p>

                </div>

                <div className="weather-box sun-box">
                    <h2>{formatTime(sunset)}</h2>
                    <p>Sunset</p>

                </div>

            </div>

        </div>

    )

}
export default WeatherCard