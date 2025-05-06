import { useState } from "react";

const PodcastArea = () => {
  const videos = [
    { id: "0uvnC07CbiY", name: "Shri Ved Mani Tiwari", role: "CEO, NSDC", clientImg: "/assets/img/live-courses/client-1.png" },
    { id: "Ka8HZAwdNu4", name: "Padma Shri Dr. Resul Pookutty", role: "Oscar Winning Sound Designer", clientImg: "/assets/img/live-courses/client-2.png" },
    { id: "p0TSfYrGy7Q", name: "Ashish Kant Tatla", role: "National Coordinator, PMKVY", clientImg: "/assets/img/live-courses/client-3.png" },
    { id: "8DJkrmwm0sk", name: "Ketki Pandit", role: "Influencer & Coach", clientImg: "/assets/img/live-courses/client-1.png" },
    { id: "mYHoi-vtZg4", name: "Anand Jha", role: "Entrepreneur", clientImg: "/assets/img/live-courses/client-2.png" },
    { id: "SNAPVfTR1NE", name: "Trishikaa Bharadwaj", role: "Actor", clientImg: "/assets/img/live-courses/client-3.png" },
    { id: "vUiIeL_Cedc", name: "Nitish Yadav", role: "Motivational Speaker", clientImg: "/assets/img/live-courses/client-1.png" },
    { id: "GejS5mFhZik", name: "Tanish Shewani", role: "Performer", clientImg: "/assets/img/live-courses/client-2.png" },
    { id: "Isr2X5G4w8o", name: "Mohaan Nadaar", role: "Director & Filmmaker", clientImg: "/assets/img/live-courses/client-3.png" },
    { id: "w5MtZaxgyN8", name: "Prashant Bhanwariya", role: "Artist & Creator", clientImg: "/assets/img/live-courses/client-1.png" },
  ];

  const [activePlayers, setActivePlayers] = useState<string[]>([]);

  const handlePlay = (id: string) => {
    setActivePlayers((prev) => [...prev, id]);
  };

  return (
    <section className="live-courses-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">Podcast</h6>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className="w-full lg:w-[31%] xl:w-[30%] flex-shrink-0"
            >
              <div className="live-courses-main-items">
                <div className="live-courses-items">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg w-full bg-black">
                    {activePlayers.includes(video.id) ? (
                      <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                        title={video.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div
                        className="absolute top-0 left-0 w-full h-full cursor-pointer group"
                        onClick={() => handlePlay(video.id)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt={video.name}
                          className="w-full h-full object-cover rounded-lg group-hover:opacity-80 transition"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <button className="bg-white rounded-full p-3 shadow-lg">
                            ▶
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="content text-center mt-4">
                  <h4 className="mt-2">{video.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastArea;
