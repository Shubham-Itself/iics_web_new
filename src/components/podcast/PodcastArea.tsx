

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

  return (
    <section className="live-courses-section section-padding">
      <div className="container">
        <div className="section-title text-center">
          <h6 className="wow fadeInUp">Podcast</h6>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          {videos.map((video, index) => (
            <div
              key={index}
              className="w-full  lg:w-[31%] xl:w-[30%] flex-shrink-0"
            >
              <div className="live-courses-main-items">
                <div className="live-courses-items">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg w-full">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="content text-center mt-4">
                  {/* Uncomment if needed */}
                  {/* <div
                    className="client-img mx-auto w-16 h-16 bg-cover bg-center rounded-full"
                    style={{ backgroundImage: `url(${video.clientImg})` }}
                  ></div> */}
                  <h4 className="mt-2">{video.name}</h4>
                  {/* <p>{video.role}</p> */}
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