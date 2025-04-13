 
const PartnersArea = () => {
    const partnersInformation = [
        {
            name: 'Nilee Games',
            logo:'assets/iics_image/partners/nilee_games.webp',
          
         

        },
        {
            name: 'Lakshya Ingame Academy',
            logo:'assets/iics_image/partners/lakshay_one.webp',
            logoTwo: 'assets/iics_image/partners/lakshay_two.webp',
         

        },
        {
            name: 'Moira',
            logo:'assets/iics_image/partners/moira.webp',
      

        },
        {
            name: 'Iwata',
            logo:'assets/iics_image/partners/iwata.webp',
            
         

        },
        {
            name: 'Smooth-On',
            logo:'assets/iics_image/partners/smoothOn.webp',
         

        },
        {
            name: 'Makeup-Studio Professional Amsterdam',
            logo:'assets/iics_image/partners/makeup.webp',
         

        },
    ]
  return (
    <>
      <section className="contact-section section-padding  fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">Partners of Indian Institute of Creative Skills</h6>
                    {/* <h2 className="wow fadeInUp !text-[18px] !font-normal " data-wow-delay=".3s">
                    At IICS, we believe that creativity has no boundaries — and neither should training. Our campuses are strategically located in India’s emerging creative hubs, equipped with world-class infrastructure, studio-grade labs, and immersive learning environments.
                    </h2> */}
                </div>
                <div className="flex gap-[60px] flex-wrap">
                    {
                        partnersInformation.map(( partner , index )=>(
                            <div key={index} className="content cardStake  w-[30%] flex flex-col items-center rounded-[20px] py-[20px]" style={{ boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff' }}>
                                <div className="mb-[20px] flex gap-[10px] logo">
                                    <img src={partner.logo} alt="logo" className="w-fit h-[100px] object-contain" />
                                    {partner.logoTwo &&  <img src={partner.logoTwo} alt="logo" className="w-fit h-[100px] object-contain" />}
                                </div>
                                <div className="text-black text-[16px] text-center textPartner">
                                    {partner.name   }
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

export default PartnersArea;