const FeatureArea = () => {
  return (
    <>
      <div className="feature-section-3 section-padding !pt-0">
        <div className="section-title ml-[50px] !mb-[10px] text-center">
          <h6 className="wow fadeInUp">What makes us Unique</h6>
        </div>
        <div className="container">
          <div className="feature-wrapper-3 style-2">
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp !px-0"
                data-wow-delay=".2s"
              >
                <div
                  className="feature-card-items relative text-white h-full"
                  style={{
                    backgroundImage: `url('/assets/iics_image/makeusunique/make_us_unique1.webp')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 z-0 rounded-[inherit]" />

                  {/* Content */}
                  <div className="relative z-10 p-4">
                    {/* <div className="icon text-white mb-2">
      <i className="flaticon-graduation"></i>
    </div> */}
                    <div className="content">
                      <h5 className="text-lg font-semibold text-white">
                        A Course Structure That Builds Careers
                      </h5>
                      <p className="text-sm">
                        Our programs follow a one-of-a-kind model:
                        <br />
                        12 months of intensive learning,
                        <br />6 months of industry-led LIVE projects,
                        <br />
                        followed by a 6-month paid internship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp !px-0"
                data-wow-delay=".4s"
              >
                <div
                  className="feature-card-items relative text-white h-full"
                  style={{
                    backgroundImage: `url('/assets/iics_image/makeusunique/make_us_unique2.webp')`, // replace with your actual image
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/70 z-0 rounded-lg" />

                  {/* Content */}
                  <div className="relative z-10 p-6 flex flex-col justify-center h-full">
                    {/* Icon (Optional, if needed later) */}
                    {/* <div className="icon text-white mb-2">
      <i className="flaticon-instructor"></i>
    </div> */}

                    {/* Text content */}
                    <div className="content">
                      <h5 className="text-xl font-semibold text-white ">
                        Real-World, Not Just Reel World
                      </h5>
                      <p className="text-base">
                        From on-ground productions to studio simulations, our
                        students work on real assignments from Day 1 — not just
                        theory, but actual experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp !px-0"
                data-wow-delay=".6s"
              >
                <div
  className="feature-card-items relative text-white h-full"
  style={{
    backgroundImage: `url('/assets/iics_image/makeusunique/make_us_unique3.webp')`, // Replace with your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0 rounded-lg" />

  {/* Content */}
  <div className="relative z-10 p-6 flex flex-col justify-center h-full">
    {/* Icon */}
    {/* <div className="icon text-white mb-4">
      <i className="flaticon-certficate"></i>
    </div> */}

    {/* Text Content */}
    <div className="content">
      <h5 className="text-xl font-semibold text-white">Creator to Entrepreneur</h5>
      <p className="text-base">
        We train you to think like a brand, build your own IP, and become a creative entrepreneur, not just a job seeker.
      </p>
    </div>
  </div>
</div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp !px-0"
                data-wow-delay=".8s"
              >
               <div
  className="feature-card-items relative text-white h-full"
  style={{
    backgroundImage: `url('/assets/iics_image/makeusunique/make_us_unique4.webp')`, // Replace with your image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-0 rounded-lg" />

  {/* Content */}
  <div className="relative z-10 p-6 flex flex-col justify-center h-full">
    {/* Icon (Optional) */}
    {/* <div className="icon text-white mb-4">
      <i className="flaticon-school text-3xl" />
    </div> */}

    {/* Text Content */}
    <div className="content">
      <h5 className="text-xl font-semibold text-white">Celeb-Led Learning</h5>
      <p className="text-base text-white">
        Where else can you be mentored by Oscar winners, national awardees, and media icons? 
        At IICS, legends walk the halls — and guide your growth.
      </p>
    </div>
  </div>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureArea;
