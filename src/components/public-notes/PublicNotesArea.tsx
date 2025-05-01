import { Link } from "react-router-dom";


 

const PublicNotesArea = () => {

//   const careers = [
//     {
       
//         name:'1. Performing Arts & Media Management',
//         courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
//         numberofSeat:'20',
//         courseLocation:'Lajpat Nagar, New Delhi',
//         fees:'6,00,000 Rs'
       

//     },
//     {
//        name:'2. Hair, Makeup & Prosthetics',
//         courseDuration:'1 Year (6 Months Learning + 3 Months Industry Experience + 3 Months Paid Internship)',
//         numberofSeat:'15',
//         courseLocation:'Lajpat Nagar, New Delhi',
//         fees:'6,00,000 Rs'
     
        
//     },
//     {
//         name:'3. Sound Recording & Sound Design',
//         courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
//         numberofSeat:'20',
//         courseLocation:'Lajpat Nagar, New Delhi',
//         fees:'6,00,000 Rs'
        
//     },
//     {
//         name:'4. 3D Game Art',
//         courseDuration:'2 Years (12 months Game Art Foundation + 6 months Game Art Specialization + 6 months Paid Internship)',
//         numberofSeat:'25',
//         courseLocation:'Lajpat Nagar, New Delhi',
//         fees:'6,00,000 Rs'
        
//     },
//     {
//         name:'5. Advanced Gaming & XR Innovations',
//         courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
//         numberofSeat:'25',
//         courseLocation:'Lajpat Nagar, New Delhi',
//         fees:'6,00,000 Rs'
        
//     },
//     {
//         name:'6. Journalism, PR, Image Strategization & Branding',
//         courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
//         numberofSeat:'20',
//         courseLocation:'Lajpat Nagar, New Delhi',
//         fees:'6,00,000 Rs'
        
//     },
//     {
//         name:'7. Events & Experiential Management',
//         courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
//         numberofSeat:'30',
//         courseLocation:'Lajpat Nagar, New Delhi',
//         fees:'6,00,000 Rs'
        
//     },
//     {
//         name:'8. Digital Management & Content Creation',
//         courseDuration:'2 Years (12 Months Learning + 6 Months Industry Experience + 6 Months Paid Internship)',
//         numberofSeat:'20',
//         courseLocation:'Lajpat Nagar, New Delhi',
//         fees:'6,00,000 Rs'
        
//     },
//   ]

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                  
                    <div className="my-[60px]">
                    <p className="text-[35px] font-bold text-black mb-[30px] mobile:text-[25px]">Public Notices</p>
                    <div className="section-title !mb-0 ">
                    <h6 className="wow fadeInUp !mb-0">Stay updated with the latest announcements, policies, and official information from IICS.</h6>
                   
                </div>
                    </div>
                    <p className="text-[20px] font-semibold mb-[30px]">Latest Notices</p>
                   
         

                    <div className="overflow-x-auto">
  <table className="min-w-full table-auto border-collapse rounded-xl overflow-hidden shadow-[inset_5px_5px_10px_#a9a9aa77,inset_-5px_-5px_10px_#ffffff7e]">
    <thead className="bg-[#005BFF] text-left text-sm font-semibold text-white">
      <tr>
        <th className="px-4 py-3 w-[58rem]">Title</th>
        <th className="px-4 py-3">Date</th>
        <th className="px-4 py-3">Download/View</th>
      </tr>
    </thead>
    <tbody className="text-gray-800">
      <tr className="border-t ">
        <td className="px-4 py-4 max-w-[300px]">
          <Link to="#" className="text-[18px] font-medium text-blue-600 mobile:text-[16px]">
            Notice for Commencement of Registration Process at Indian Institute of Creative Skills, Delhi
          </Link>
        </td>
        <td className="px-4 py-4">
          11.04.2025
        </td>
        <td className="px-4 py-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/IICS PDF/IICS_Public_Notice.pdf"
            className="text-blue-500 hover:underline"
          >
            Download Here
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</div>
                 
               
                   
                   <p className="mt-[30px] font-semibold text-[20px] mobile:text-[16px]">Note:</p>
                   <ul className="list-disc pl-[30px]">
                    <li className="mobile:text-[14px]">All notices are released by the <span className="font-bold">IICS Administrative Office.</span></li>
                    <li className="mobile:text-[14px]">For any clarification, contact us at: info@iicsindia.org</li>
                   </ul>
                 
                </div>
               
            </div>
        </section>
    </>
  );
};

export default PublicNotesArea;