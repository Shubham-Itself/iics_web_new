 

const FeatureHomeOne = () => {
  return (
    <>
      <section className="feature-section mt-[100px]">
      <div className="section-title ml-[50px] !mb-[10px]">
                    <h6 className="wow fadeInUp">Core Pillars</h6>
                    </div>
            <div className="row gx-0 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 row-cols-xxl-5">
                <div className="col wow fadeInUp">
                   
             
                <div
  className="feature-box-items relative !py-[30px] !h-full"
  style={{
    backgroundImage: `url('/assets/iics_image/core_piller/core_piller_1.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0 rounded-[inherit]" />

  {/* Content */}
  <div className="relative z-10">
    {/* <div className="icon">
      <i className="flaticon-teacher"></i>
    </div> */}
    <div className="content">
      <h3 className="text-[18px] text-white">Industry-Driven Curriculum</h3>
      <p className="text-[14px] text-white">
        Programs designed by real-world professionals — ensuring you gain practical, job-ready skills aligned with current industry needs.
      </p>
    </div>
  </div>
</div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".2s">
                <div
  className="feature-box-items relative !py-[30px] !h-full"
  style={{
    backgroundImage: `url('/assets/iics_image/core_piller/core_piller_2.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0 rounded-[inherit]" />

  {/* Content */}
  <div className="relative z-10">
    <div className="content">
      <h3 className="text-[18px] text-white">Mentorship by <br /> Legends</h3>
      <p className="text-[14px] text-white">
        Learn directly from celebrities, award-winners, and industry pioneers who bring decades of experience and insider knowledge to the classroom.
      </p>
    </div>
  </div>
</div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".4s">
                <div
  className="feature-box-items relative !py-[30px] !h-full"
  style={{
    backgroundImage: `url('/assets/iics_image/core_piller/core_piller_3.webp')`, // replace with actual image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0 rounded-[inherit]" />

  {/* Content */}
  <div className="relative z-10">
    {/* <div className="icon text-white">
      <i className="flaticon-community"></i>
    </div> */}
    <div className="content">
      <h3 className="text-[18px] text-white">Entrepreneurship & IP Creation</h3>
      <p className="text-[14px] text-white">
        Go beyond employment — build your own brand, own your content, and learn to monetize creativity through business thinking and innovation.
      </p>
    </div>
  </div>
</div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".6s">
                <div
  className="feature-box-items relative !py-[30px] !h-full"
  style={{
    backgroundImage: `url('/assets/iics_image/core_piller/core_piller_4.webp')`, // update path if needed
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0 rounded-[inherit]" />

  {/* Content */}
  <div className="relative z-10">
    {/* <div className="icon text-white">
      <i className="flaticon-membership"></i>
    </div> */}
    <div className="content">
      <h3 className="text-[18px] text-white">World-Class Infrastructure</h3>
      <p className="text-[14px] text-white">
        Train in studio-grade classrooms, edit suites, performance labs, and makeup rooms that mirror actual industry environments.
      </p>
    </div>
  </div>
</div>
                </div>
                <div className="col wow fadeInUp" data-wow-delay=".8s">
                <div
  className="feature-box-items relative !py-[30px] !h-full"
  style={{
    backgroundImage: `url('/assets/iics_image/core_piller/core_piller_5.webp')`, // replace with your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0 rounded-[inherit]" />

  {/* Content */}
  <div className="relative z-10">
    {/* <div className="icon text-white">
      <i className="flaticon-group"></i>
    </div> */}
    <div className="content">
      <h3 className="text-[18px] text-white">Global Perspective with Local Roots</h3>
      <p className="text-[14px] text-white">
        Curriculum and collaborations that prepare students to work both in India and on international platforms - from day one.
      </p>
    </div>
  </div>
</div>
                </div>
            </div>
        </section>
    </>
  );
};

export default FeatureHomeOne;