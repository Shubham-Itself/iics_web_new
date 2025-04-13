 
const CampusArea = () => {
    const campusInformation = [
        {
            campusState: 'Delhi',
            campusLocation:'Lajpat Nagar ',
            campusSubLocation:'13-A 3rd Floor Above Tata Motors Showroom Main Ring Road Lajpat Nagar -4 New Delhi - 110024',
            campusMobileNumber:'+91 959-4949-959',
            campusEmailId:'info@iicsindia.org'

        },
        {
            campusState: 'Bhopal',
            campusLocation:'Sage University',
            campusSubLocation:'Katara Hills, Extension, Bhopal, Madhya Pradesh 462022',
            campusMobileNumber:'+91 959-4949-959',
            campusEmailId:'info@iicsindia.org'

        },
        {
            campusState: 'Chandigarh',
            campusLocation:'CH Devi Lal Centre of Learning',
            campusSubLocation:'5, Madhya Marg, 28B, Sector 28, Chandigarh, 160028',
            campusMobileNumber:'+91 959-4949-959',
            campusEmailId:'info@iicsindia.org'

        },
        {
            campusState: 'Kolkata',
            campusLocation:'',
            campusSubLocation:'',
            campusMobileNumber:'',
            campusEmailId:''

        },
        {
            campusState: 'Bhubaneshwar',
            campusLocation:'',
            campusSubLocation:'',
            campusMobileNumber:'',
            campusEmailId:''

        },
    ]
  return (
    <>
      <section className="contact-section section-padding  fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">Our Campuses</h6>
                    <h2 className="wow fadeInUp !text-[18px] !font-normal " data-wow-delay=".3s">
                    At IICS, we believe that creativity has no boundaries — and neither should training. Our campuses are strategically located in India’s emerging creative hubs, equipped with world-class infrastructure, studio-grade labs, and immersive learning environments.
                    </h2>
                </div>
                <div className="row">
                    {
                        campusInformation.map(( campus , index )=>(
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="contact-box-items">
                                {/* <div className="icon">
                                    <i className="flaticon-map"></i>
                                </div> */}
                                <h5 className="!text-[#005bff] !font-bold">
                                    {campus.campusState}
                                </h5>
                                <div className="image">
                                    <img src="assets/img/small-line.png" alt="img" />
                                </div>
                                <h6 className="mb-[15px] font-bold">
                                  {campus.campusLocation && campus.campusSubLocation != '' ? campus.campusLocation : 'Coming Soon'} 
                                  
                                </h6>
                                {
                                    campus.campusLocation && campus.campusSubLocation && <>
                                     <h6 className="mb-[15px]">
                               {campus.campusSubLocation}
                                </h6>
                                <h6 className="mb-[15px]">
                                <span className="font-bold">Mobile No :</span> {campus.campusMobileNumber}
                                </h6>
                                <h6> <span className="font-bold">Email Id :</span> {campus.campusEmailId}</h6>
                                    </>
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

export default CampusArea;