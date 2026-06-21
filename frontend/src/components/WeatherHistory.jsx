import { useEffect, useState } from "react"
import "../Components_style/WeatherHistory.css"


function WeatherHistory({
    history,
    viewRecord,
    deleteRecord,
    editRecord,
    closeHistory
}) {
    const [closing, setClosing] = useState(false)
    const handleClose = () => {
        setClosing(true)
        setTimeout(() => { closeHistory() }, 300)
    }


    return (
        <div className={`history-modal ${closing ? "close" : ""}`}>
            <div className="history-content">
                <button
                    style={{ color: "white" }}
                    className="close-btn"
                    onClick={handleClose}
                >
                    ✖
                </button>
                <div className="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Location</th>
                                <th>Country</th>
                                <th>Start</th>
                                <th>End</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                history.map((record) => (
                                    <tr key={record.id}>
                                        <td>{record.location}</td>
                                        <td>{record.country}</td>
                                        <td>{record.start}</td>
                                        <td>{record.end}</td>
                                        <td>
                                            <button onClick={() => {
                                                viewRecord(record.id)
                                                closeHistory()
                                            }}>
                                                View
                                            </button>
                                            <button onClick={() => deleteRecord(record.id)}>
                                                Delete
                                            </button>
                                            <button onClick={() => editRecord(record)}>
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}
export default WeatherHistory