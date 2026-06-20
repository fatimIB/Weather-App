import WeatherCard from "./WeatherCard"


function WeatherDetails({ selectedWeather }) {


    if (!selectedWeather) {
        return null
    }


    const daily = selectedWeather.weather_data.daily


    return (

        <div>


            {daily.date.map((date, index) => (


                <WeatherCard

                    location={selectedWeather.location}

                    key={index}

                    date={date}
                    

                    day={daily.day_temperature[index]}

                    night={daily.night_temperature[index]}

                    sunrise={daily.sunrise[index]}

                    sunset={daily.sunset[index]}

                    wind={daily.wind[index]}

                    rain={daily.rain[index]}

                />


            ))}


        </div>


    )

}

export default WeatherDetails