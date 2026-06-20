import { useState } from "react"
import WeatherCard from "./WeatherCard"
import "../Components_style/Forecast.css"

function Forecast({ location, forecast, selectedWeather }) {


    if (selectedWeather) {

        forecast = selectedWeather.weather_data.daily
        location = selectedWeather.location

    }


    if (!forecast) {
        return null
    }



    const [page, setPage] = useState(0)


    const totalDays = forecast.time 
        ? forecast.time.length 
        : forecast.date.length



    return (

        <div>


            <div className="forecast-nav">


                <button
                    disabled={page === 0}
                    onClick={() => setPage(page - 1)}
                >
                    ⬅ Previous
                </button>



                <div className="forecast-date">

                    {
                        forecast.time
                        ?
                        forecast.time[page]
                        :
                        forecast.date[page]
                    }

                </div>



                <button

                    disabled={page === totalDays - 1}

                    onClick={() => setPage(page + 1)}

                >

                    Next ➡

                </button>


            </div>



            <WeatherCard


                location={location}



                day={

                    forecast.temperature_2m_max

                    ?

                    forecast.temperature_2m_max[page]

                    :

                    forecast.day_temperature[page]

                }



                night={

                    forecast.temperature_2m_min

                    ?

                    forecast.temperature_2m_min[page]

                    :

                    forecast.night_temperature[page]

                }



                sunrise={forecast.sunrise[page]}


                sunset={forecast.sunset[page]}



                wind={

                    forecast.wind_speed_10m_max

                    ?

                    forecast.wind_speed_10m_max[page]

                    :

                    forecast.wind[page]

                }



                rain={

                    forecast.precipitation_sum

                    ?

                    forecast.precipitation_sum[page]

                    :

                    forecast.rain[page]

                }


            />


        </div>

    )

}


export default Forecast