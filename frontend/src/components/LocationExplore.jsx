import { useEffect, useState } from "react"
import "../Components_style/LocationExplore.css"
import { getYoutubeVideo } from "../services/youtubeApi"


function LocationExplore({ location }) {
    const [videoId, setVideoId] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadVideo() {
            setLoading(true)
            setVideoId(null)
            const id = await getYoutubeVideo(location)
            setVideoId(id)
            setLoading(false)
        }
        if (location) {
            loadVideo()

        }
    }, [location])

    return (
        <div className="explore">
            <h2>
                Discover {location}
            </h2>

            <div className="explore-cards">
                <div className="explore-card">
                    <h3>
                        Explore on YouTube
                    </h3>
                    {

                        loading ?
                            <p>
                                Loading video...
                            </p>
                            :
                            videoId ?
                                <iframe
                                    key={videoId}
                                    width="100%"
                                    height="250"
                                    src={`https://www.youtube.com/embed/${videoId}`}
                                    title="youtube"
                                    allowFullScreen
                                ></iframe>
                                :
                                <p>
                                    No video found
                                </p>
                    }

                </div>
                <div className="explore-card">
                    <h3>
                        Map
                    </h3>
                    <iframe
                        width="100%"
                        height="250"
                        src={`https://www.google.com/maps?q=${location}&output=embed`}
                        title="map"
                    ></iframe>
                </div>
            </div>
        </div>
    )
}

export default LocationExplore