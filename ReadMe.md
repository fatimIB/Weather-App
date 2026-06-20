# Weather Explorer 🌤️

A full-stack weather application that allows users to search for weather forecasts, save searches, view history, export weather data, and explore locations.

## Features

- Search weather by location
- Select date range for forecast
- Display weather information:
  - Temperature (day/night)
  - Sunrise & sunset
  - Wind speed
  - Rain precipitation
- Save weather searches in database
- View search history
- Edit and delete saved searches
- Export weather data:
  - CSV
  - PDF report with charts
- Location exploration:
  - YouTube travel video
  - Google Maps location view
- Responsive UI with animated backgrounds


## Technologies Used

### Frontend
- React.js
- CSS
- Fetch API

### Backend
- Python
- Flask
- SQLite
- SQLAlchemy
- Open-Meteo API
- YouTube API

### Python Libraries
- Flask
- Flask-CORS
- Flask-SQLAlchemy
- Requests
- python-dotenv
- ReportLab
- Matplotlib


# Installation and Setup (Windows)

## 1. Clone the repository

```bash
git clone https://github.com/fatimIB/Weather-App.git
```


Go to the project folder:
```bash
cd Weather-App
``` 
## 2. Backend Setup

Open a terminal:

Go to backend:
```bash
cd backend
```

Install required Python packages:

```bash
pip install -r requirements.txt
```

Run the Flask server:
```bash
python app.py
```
The backend will run on: http://127.0.0.1:5000

## 3. Frontend Setup

Open another terminal.

Go to frontend:
```bash
cd frontend
```

Install React dependencies:
```bash
npm install
```

Start the frontend:
```bash
npm run dev
```

The application will run on the URL provided by Vite, usually: http://localhost:5173

# Project Structure

Weather-App
│
├── backend
│   │
│   ├── app.py
│   ├── models.py
│   ├── extensions.py
│   ├── requirements.txt
│   ├── routes
│   ├── services
│   └── .env.example
│
│
├── frontend
│   │
│   ├── src
│   ├── package.json
│   └── components
│
│
└── README.md


# APIs Used
## 1. weather API

The application uses:

### a. Open-Meteo API

It provides:

* Location coordinates
* Weather forecast data
* YouTube API

Used to display travel videos related to searched locations.

### b. Database

* The application uses SQLite.

* The database file is automatically created when running the backend for the first time.

### c. Environment Variables

The backend uses environment variables for API keys.

Create a .env file inside the backend folder:
```
YOUTUBE_API_KEY=your_api_key_here
```

The .env file should not be committed to GitHub.

# How It Works
* User enters a location and dates.
* React sends the request to the Flask backend.
* Backend gets coordinates and weather data.
* Weather information is returned and displayed
* Users can save, edit, delete, and export their weather searches.

# Author

Fatima IBOUBKARNE

* GitHub:
https://github.com/fatimIB

* Portfolio: https://fatima-iboubkarne.vercel.app/

* LinkedIn: 
https://linkedin.com/in/fatima-iboubkarne-849675281


# PM Accelerator Information

This project was developed as part of the technical assessment for PM Accelerator.

PM Accelerator helps individuals develop product management skills through practical learning, mentorship, and real-world experience.

* LinkedIn:
https://www.linkedin.com/company/product-manager-accelerator/
