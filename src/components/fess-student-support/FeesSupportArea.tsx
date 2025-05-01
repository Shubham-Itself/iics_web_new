import { Link } from "react-router-dom";


 

const FeesSupportArea = () => {

  const careers = [
    {
       
        name:'Performing Arts And Media Management',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
      
        fees:'INR 6,00,000'
       

    },
    {
       name:'Hair, Makeup & Prosthetics',
        courseDuration:'1 Year (6 Months Learning + 3 Months Industry Experience + 3 Months Paid Internship)',
      
        fees:'INR 6,00,000'
     
        
    },
    {
        name:'Sound Recording And Sound Design',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
     
        fees:'INR 6,00,000'
        
    },
    {
        name:'3D Game Art',
        courseDuration:'2 Years (12 months Game Art Foundation + 6 months Game Art Specialization + 6 months Paid Internship)',
     
        fees:'INR 6,00,000'
        
    },
    {
        name:'Advance Gaming and Extended Reality (XR) Innovations',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
       
        fees:'INR 6,00,000'
        
    },
    {
        name:'Journalism, PR, Image Strategization & Brand Custodianship Program',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
     
        fees:'INR 6,00,000'
        
    },
    {
        name:'Events And Experiential Media',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
       
        fees:'INR 6,00,000'
        
    },
    {
        name:'Digital Content Creation',
        courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',

        fees:'INR 6,00,000'
        
    },
  ]

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                  
                    <div className="my-[60px]">
                    <p className="text-[35px] font-bold text-black mb-[30px] mobile:text-[25px]">Course Fees</p>
                    {/* <div className="section-title !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0">Here’s a glimpse of the exciting career opportunities across our programs:</h6>
                   
                </div> */}
                    </div>
                   
                    <div className="overflow-x-auto md:border md:border-gray-300 md:rounded-[20px]">
                    <table className="min-w-full table-auto  md:shadow-md hidden md:table">
  <thead className="bg-[#005BFF] ">
    <tr>
      <th className="px-6 py-4 text-left text-sm font-semibold text-white">Name</th>
      <th className="px-4 py-4 text-left text-sm font-semibold text-white w-[700px]">Course Duration</th>
      <th className="px-4 py-4 text-left text-sm font-semibold text-white whitespace-nowrap w-[150px]">Annual Fee</th>
    </tr>
  </thead>
  <tbody>
    {careers.map((career, idx) => (
      <tr
        key={idx}
        className="even:bg-gray-50 hover:bg-gray-100 transition"
        style={{
          boxShadow: 'inset 5px 5px 10px #a9a9aa77, inset -5px -5px 10px #ffffff7e',
        }}
      >
        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
  <Link
    to={`/courses-details/${encodeURIComponent(career.name?.toString() || '')}`}
    className="text-blue-600 hover:underline"
  >
    {career.name}
  </Link>
</td>
        <td className="px-4 py-4 text-sm text-gray-900 whitespace-normal">{career.courseDuration}</td>
        <td className="px-4 py-4 text-sm text-gray-900 whitespace-nowrap">{career.fees}</td>
      </tr>
    ))}
  </tbody>
</table>

  {/* Mobile View (Cards) */}
  <div className="space-y-4 md:hidden">
    {careers.map((career, idx) => (
      <div
        key={idx}
        className="border rounded-[20px] p-4 md:shadow"
        style={{
          boxShadow: 'inset 5px 5px 10px #a9a9aa77, inset -5px -5px 10px #ffffff7e',
        }}
      >
        <p className="text-base font-semibold text-gray-800">
          <Link     to={`/courses-details/${encodeURIComponent(career.name?.toString() || '')}`} className="text-blue-600 hover:underline">
            {career.name}
          </Link>
        </p>
        <p className="text-sm mt-2">
          <span className="font-medium">Course Duration:</span> {career.courseDuration} months
        </p>
        <p className="text-sm">
          <span className="font-medium">Annual Fee:</span> {career.fees}
        </p>
      </div>
    ))}
  </div>
</div>
                   
                   
                 
                </div>
               <div className="flex justify-between gap-[20px] mobile:flex-col ">
               <div className="bg-gray-50 p-6 rounded-xl shadow-md mt-[20px] w-[50%] mobile:w-full">
                    <p className="text-[25px] font-bold text-[#005BFF]  mb-[30px] mobile:text-[20px]">What’s Included in the Fees?</p>
                    <ul className="list-disc pl-[40px] mobile:pl-[20px]">
                        <li className="font-bold text-[18px] mobile:text-[16px] text-black mb-[5px]"> <span className="font-normal">12-24 months of on-campus learning </span></li>
                        <li className="font-bold text-[18px] mobile:text-[16px] text-black mb-[5px]"><span className="font-normal">6 months of live industry projects </span></li>
                        <li className="font-bold text-[18px] mobile:text-[16px] text-black mb-[5px]"><span className="font-normal">6 months of paid apprenticeship</span></li>
                        <li className="font-bold text-[18px] mobile:text-[16px] text-black mb-[5px]"><span className="font-normal">Access to industry-standard labs & equipment</span></li>
                        <li className="font-bold text-[18px] mobile:text-[16px] text-black mb-[5px]"><span className="font-normal">Mentorship from top industry experts</span></li>


                    </ul>
                </div>
               

                {/* <div>
                    <p className="text-[25px] font-bold text-[#005BFF] mt-[60px] mb-[10px]">Payment Options</p>
                    <p className="text-[16px] text-black mb-[30px]">Our dedicated placement cell actively connects students with opportunities across:</p>
                    <ul className="list-disc pl-[40px]">
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Full Payment (5% discount applicable) </span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"> <span className="font-normal">Semester-Wise Installments</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Monthly EMI Plans (through partner NBFCs)</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Media Agencies</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Event Firms</span></li>
                        <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Digital Brands</span></li>


                    </ul>

                    <p className="text-[16px] text-black mt-[30px]">
                   EMI starting as low as ₹4,999/month*</p>
                </div> */}

                <div className="bg-gray-50 p-6 rounded-xl shadow-md mt-[20px] w-[50%] mobile:w-full">
                    <p className="text-[25px] font-bold text-[#005BFF]  mb-[5px] mobile:text-[20px]">Student Support Services
                    </p>
                    <p className="mb-[5px] mobile:text-[16px]">Our support extends beyond financial aid — we’re here to guide you through every step:</p>
                    <ul className="list-disc pl-[40px] mobile:pl-[20px]">
                        <li className="font-bold text-[18px] mobile:text-[16px] text-black mb-[5px]"> <span className="font-normal">One-on-one Counseling Sessions </span></li>
                        <li className="font-bold text-[18px] mobile:text-[16px] text-black mb-[5px]"><span className="font-normal">Admission & Career Guidance</span></li>
                        <li className="font-bold text-[18px] mobile:text-[16px] text-black mb-[5px]"><span className="font-normal">Application Help Desk</span></li>
                        <li className="font-bold text-[18px] mobile:text-[16px] text-black mb-[5px]"><span className="font-normal">Mentorship Connect</span></li>
                        {/* <li className="font-bold text-[18px] text-black mb-[5px]"><span className="font-normal">Mentorship from top industry experts</span></li> */}


                    </ul>
                </div>
               </div>
            </div>
        </section>
    </>
  );
};

export default FeesSupportArea;