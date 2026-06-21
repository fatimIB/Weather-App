import { useState } from "react"
import "../Components_style/ExportButton.css"
import {
    exportCSV,
    exportPDF
} from "../services/weatherApi"

function ExportButton({ weather, selectedWeather }) {
    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState("")
    const exportData = weather || selectedWeather
    const chooseOption = (option) => {
        setOpen(false)
        if (!exportData) {
            setMessage("No weather data to export!")
            setTimeout(() => {
                setMessage("")
            }, 3000)
            return
        }
        const id = exportData.id
        if (option === "CSV") {
            exportCSV(id)
        }
        if (option === "PDF") {
            exportPDF(id)
        }
    }
    return (
        <div className="export-container">
            <div
                className="selected"
                onClick={() => setOpen(!open)}
            >
                Export
                <span className="arrow">
                    ▼
                </span>
            </div>
            {
                open &&
                <div className="options">
                    <div
                        className="option"
                        onClick={() => chooseOption("CSV")}
                    >
                        Export as CSV
                    </div>
                    <div
                        className="option"
                        onClick={() => chooseOption("PDF")}
                    >
                        Export as PDF
                    </div>
                </div>
            }

            {
                message &&
                <div className="export-toast">
                    {message}
                </div>
            }

        </div>
    )
}
export default ExportButton