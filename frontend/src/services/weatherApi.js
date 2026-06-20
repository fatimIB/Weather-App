const API = "http://127.0.0.1:5000";

export async function getWeather(data) {
  const response = await fetch(`${API}/weather`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Location not found");
  }

  return await response.json();
}

export async function fetchHistory() {
  const response = await fetch(`${API}/history`);

  return await response.json();
}

export async function fetchWeatherDetails(id) {
  const response = await fetch(`${API}/history/${id}`);

  return await response.json();
}

export async function removeWeather(id) {
  await fetch(`${API}/history/${id}`, {
    method: "DELETE",
  });
}

export async function editWeather(id, data) {
  const response = await fetch(`${API}/history/${id}`, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });

  return await response.json();
}

export function exportCSV(id) {
  window.open(
    `${API}/history/${id}/export/csv`,

    "_blank",
  );
}

export function exportPDF(id) {
  window.open(
    `${API}/history/${id}/export/pdf`,

    "_blank",
  );
}
