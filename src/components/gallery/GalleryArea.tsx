import { Link } from "react-router-dom";

 

const GalleryArea = () => {

    const galleryArea = [
        {
            imageFor:'CreatorsSubmit',
            images:[ 'assets/iics_image/gallery/creatorSubmit/creatorSubmit1.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit2.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit3.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit4.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit5.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit6.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit7.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit8.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit9.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit10.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit11.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit12.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit13.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit14.webp',
                'assets/iics_image/gallery/creatorSubmit/creatorSubmit15.webp']
        },
        {
            imageFor:'workshops',
            images : [
                'assets/iics_image/gallery/workshop/workshop1.webp',
                'assets/iics_image/gallery/workshop/workshop2.webp',
                'assets/iics_image/gallery/workshop/workshop3.webp',
                'assets/iics_image/gallery/workshop/workshop4.webp',
                'assets/iics_image/gallery/workshop/workshop5.webp',
                'assets/iics_image/gallery/workshop/workshop6.webp',
                'assets/iics_image/gallery/workshop/workshop7.webp',
                'assets/iics_image/gallery/workshop/workshop8.webp',
                'assets/iics_image/gallery/workshop/workshop9.webp',
                'assets/iics_image/gallery/workshop/workshop10.webp',
                'assets/iics_image/gallery/workshop/workshop11.webp',
                'assets/iics_image/gallery/workshop/workshop12.webp',
                'assets/iics_image/gallery/workshop/workshop13.webp',
                'assets/iics_image/gallery/workshop/workshop14.webp',
                'assets/iics_image/gallery/workshop/workshop15.webp'
              ]

        },
        {
            imageFor:'events',
            images : [
                'assets/iics_image/gallery/events/events1.webp',
  'assets/iics_image/gallery/events/events2.webp',
  'assets/iics_image/gallery/events/events3.webp',
  'assets/iics_image/gallery/events/events4.webp',
  'assets/iics_image/gallery/events/events5.webp',
  'assets/iics_image/gallery/events/events6.webp',
  'assets/iics_image/gallery/events/events7.webp',
  'assets/iics_image/gallery/events/events8.webp',
  'assets/iics_image/gallery/events/events9.webp',
  'assets/iics_image/gallery/events/events10.webp',
  'assets/iics_image/gallery/events/events11.webp',
  'assets/iics_image/gallery/events/events12.webp',
  'assets/iics_image/gallery/events/events13.webp',
  'assets/iics_image/gallery/events/events14.webp',
  'assets/iics_image/gallery/events/events15.webp'
              ]

        }
    ]
  return (
    <>
       <section className="gallery-section section-padding  fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6>Photo Gallery</h6>
                    <h2>
                    A Glimpse into Our Creative World
                    </h2>
                </div>
                <ul className="nav">
                    <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                        <a href="#CreatorsSubmit" data-bs-toggle="tab" className="nav-link active">
                        Creator’s Summit 
                        </a>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                        <a href="#workshops" data-bs-toggle="tab" className="nav-link">
                        Workshops
                        </a>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                        <a href="#events" data-bs-toggle="tab" className="nav-link">
                        Events
                        </a>
                    </li>
                   
                </ul>
                <div className="tab-content">
                    {
                        galleryArea.map((gallery , index)=>(
                            <div id={gallery.imageFor} key={index} className="tab-pane fade show active">
                            <div className="row">
                                
                                {
                                    gallery.images.map((img , index)=>(
                                        <div className="col-xl-4 col-lg-6 col-md-6" key={index}>
                                        <div className="portfolio-item group">
                                            <div className="portfoio-thumb before:!static">
                                                <img src={img} alt="img" className="w-[410px] h-[400px] object-cover"/>
                                                {/* <div className="portfolio-arrow">
                                                    <Link to="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                                </div> */}
                                                {/* <div className="portfolio-text">
                                                    <h3>University Student Write <br />
                                                        on the exam Paper</h3>
                                                    <p>Student _ Gallery</p>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                               
                               
                            </div>
                        </div>
                        ))
                    }
                   
                  
                   
                </div>
            </div>
        </section>
    </>
  );
};

export default GalleryArea;