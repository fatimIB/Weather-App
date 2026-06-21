import { useState } from "react"
import "../Components_style/WeatherForm.css"
import { getWeather } from "../services/weatherApi"


function WeatherForm({ setWeather, setSelectedWeather, getHistory }) {
    const [loading, setLoading] = useState(false)
    const [location, setLocation] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [error, setError] = useState("")
    const handleSubmit = async () => {
        setError("")
        if (!location.trim()) {
            setError("Please enter a location.")
            return
        }
        if (
            startDate &&
            endDate &&
            new Date(endDate) < new Date(startDate)
        ) {
            setError("End date must be after start date.")
            return
        }
        try {
            setLoading(true)
            const data = await getWeather({
                location: location,
                startDate: startDate,
                endDate: endDate
            })
            if (!data) {
                setError("Location not found. Please try another place.")
                return
            }
            setSelectedWeather(null)
            setWeather(data)
            setLocation("")
            setStartDate("")
            setEndDate("")
        }
        catch (error) {
            setError("Location not found. Please try another place.")
        }
        finally {
            setLoading(false)
        }
    }
    return (
        <div className="weather-form">
            <div>
                <label>
                    Enter a Location
                </label>
                <input
                    type="text"
                    placeholder="Example: Agadir"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div>
                <label>
                    Start date
                </label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
            <div>
                <label>
                    End date
                </label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </div>
            <div className="button-group">
                <button
                    onClick={handleSubmit}
                    disabled={loading}
                >
                    {
                        loading
                            ?
                            "Loading..."
                            :
                            "See Weather"
                    }
                </button>
                <span style={{ textShadow: "4px 15px rgba(0,0,0,0.25);", color: "white", marginBottom: "10px" }}>OR</span>
                <button onClick={() => {
                    getHistory()
                    disabled = { loading }
                }}>
                    See History
                </button>
            </div>
            {
                error &&
                <div className="error">
                    {error}
                </div>
            }
        </div>

    )
}


export default WeatherForm