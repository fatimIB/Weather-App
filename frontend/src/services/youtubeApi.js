const API = "http://127.0.0.1:5000";

export async function getYoutubeVideo(location) {
  const response = await fetch(`${API}/youtube?location=${location}`);

  const data = await response.json();

  return data.videoId;
}
