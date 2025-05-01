import { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
const HiringArea = () => {
  const [openDialog, setOpenDialog] = useState<null | 'job1' | 'job2' | 'job3' | 'job4'>(null);

  // const hiringInformation = [
  //   {
  //     jobtitle:'Field Marketing Executive',
  //     location:'Delhi',
  //     salary:'Upto 3 LPA',
  //     educationalQualification:'Any Graduation',
  //     yearsofexperiance:'Minimum 1 Year',
  //     jobResponsibility:[
  //       'Visit potential clients or students in the assigned field area.',
  //       'Promote and create awareness about the institution’s courses or programs.',
  //       'Generate interest among students for enrolment.',
  //       'Build and maintain relationships with students, and parents.',
  //       'Collaborate with schools, institutions, and colleges to do awareness creation programs.',
  //       'Collaborate with schools, institutions, and colleges to do awareness creation programs.',
  //       'Report daily activities and leads to the manager.',
  //       'Meet assigned targets for student engagement or enrolment.'
  //     ],
  //     tagline:'Good communication, interpersonal, and persuasive sales skills are highly preferred.'
  //   },
  //   {
  //     jobtitle:'Education Counsellor',
  //     location:'Delhi',
  //     salary:'Upto 3 LPA',
  //     educationalQualification:'Any Graduation',
  //     yearsofexperiance:'Minimum 1 Year',
  //     jobResponsibility:[
  //       'Conversion of leads received through various marketing channels.',
  //       'Connecting with the prospective students each day from the leads/database.',
  //       'Helping prospective students with the detailed information about the programs offered through phone or video counselling & create a strong pipeline.',
  //       'Ensure to meet daily deliverables & achieve weekly/monthly enrolment target.',
  //       'Consistently achieve revenue targets in line with team/organizational objectives.',
  //       'Identifying references through the existing customer base to increase the sales pipeline.',
  //       'Proactively identifying cross-selling/ upselling opportunities with the existing customers.',
  //       // 'Meet assigned targets for student engagement or enrolment.'
  //     ],
  //     keyQualification:['Experience: Minimum 2 years in education sales, admissions, education counselling',''],
  //     tagline:'Good communication, interpersonal, and persuasive sales skills are highly preferred.'
  //   }
  // ]
  return (
    <div className="py-[50px] px-[100px] mobile:px-[20px]">
      <p className="mb-[50px]">Indian Institute of Creative Skills (IICS) is dedicated to transforming creative education in India by integrating industry expertise, modern infrastructure, and a global perspective. Our goal is to nurture the talent in the creative field by offering innovative programs, hands-on training, and strong industry collaborations. We are expanding in multiple cities and are actively seeking people for multiple roles for New Delhi, Ahmedabad and Bhopal campuses.</p>
     <div>
     <div className="flex gap-[30px]">
      {/* <p className="text-[30px] font-semibold text-[#de4141]">1</p> */}
      <div className="border p-[20px] rounded-[20px] w-full">
        <p className="font-bold">
          Job Title: <span className="font-normal">Field Marketing Executive</span>
        </p>
        <p className="font-bold">
          Location: <span className="font-normal">Delhi</span>
        </p>
        <p className="font-bold">
          Educational Qualification: <span className="font-normal">Any Graduation</span>
        </p>
        <p className="font-bold">
          Years of Experience: <span className="font-normal">Minimum 1 Year</span>
        </p>

        <button
          onClick={() => setOpenDialog('job1')}
          className="text-blue-600 underline mt-2"
        >
          Know more about the job
        </button>

        <Dialog open={openDialog === 'job1'} onClose={() => setOpenDialog(null)} className="relative z-50">
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white p-6 rounded-xl max-w-[74rem] w-full shadow-xl">
              <DialogTitle className="text-lg font-bold mb-4">Job Responsibilities</DialogTitle>
              <ul className="list-disc text-[15px] pl-5 space-y-2 mb-4">
                <li>Visit potential clients or students in the assigned field area.</li>
                <li>Promote and create awareness about the institution’s courses or programs.</li>
                <li>Generate interest among students for enrolment.</li>
                <li>Build and maintain relationships with students, and parents.</li>
                <li>Collaborate with schools, institutions, and colleges to do awareness creation programs.</li>
                <li>Report daily activities and leads to the manager.</li>
                <li>Meet assigned targets for student engagement or enrolment.</li>
              </ul>
              <p className="font-semibold text-[#005BFF]">
                Good communication, interpersonal, and persuasive sales skills are highly preferred.
              </p>
              <button
                onClick={() => setOpenDialog(null)}
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>
  

    <div className="flex gap-[30px] mt-[50px]">
      {/* <p className="text-[30px] font-semibold text-[#de4141]">2</p> */}
      <div className="border p-[20px] rounded-[20px] w-full">
        <p className="font-bold">
          Job Title: <span className="font-normal">Education Counsellor</span>
        </p>
        <p className="font-bold">
          Location: <span className="font-normal">Delhi</span>
        </p>

        <button
         onClick={() => setOpenDialog('job2')}
          className="text-blue-600 underline mt-2"
        >
          Know more about the job
        </button>

        <Dialog open={openDialog === 'job2'} onClose={() => setOpenDialog(null)} className="relative z-50">
          <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <DialogPanel className="bg-white p-6 rounded-xl max-w-[74rem] w-full shadow-xl overflow-y-auto max-h-[75vh]">
              <DialogTitle className="text-lg font-bold mb-4">Key Responsibilities</DialogTitle>
              <ul className="list-disc text-[15px] pl-5 space-y-2 mb-4">
                <li>Conversion of leads received through various marketing channels.</li>
                <li>Connecting with the prospective students each day from the leads/database.</li>
                <li>Helping prospective students with the detailed information about the programs offered through phone or video counselling & create a strong pipeline.</li>
                <li>Ensure to meet daily deliverables & achieve weekly/monthly enrolment target.</li>
                <li>Consistently achieve revenue targets in line with team/organizational objectives.</li>
                <li>Identifying references through the existing customer base to increase the sales pipeline.</li>
                <li>Proactively identifying cross-selling/ upselling opportunities with the existing customers.</li>
              </ul>

              <p className="text-lg font-bold mb-2">Key Qualifications & Skills</p>
              <ul className="list-disc text-[15px] pl-5 space-y-2 mb-4">
                <li>Experience: Minimum 2 years in education sales, admissions, education counselling.</li>
                <li>Education: Minimum graduate degree in Management, Education, Creative Arts, or related fields preferred.</li>
                <li>Business Acumen: Ability to identify, build, and convert revenue-generating opportunities.</li>
                <li>Communication Skills: Excellent verbal and written communication skills to engage with stakeholders, faculty, and students effectively.</li>
                <li>Problem-Solving: Ability to navigate challenges and drive innovative solutions for institutional growth.</li>
              </ul>

              <p className="font-semibold text-[#005BFF] mt-4">
                <span className="block">Application Process:</span>
                Interested candidates can send their CVs to <a href="mailto:hr@iicsindia.org" className="underline">hr@iicsindia.org</a> with the subject line “Application for Education Counsellor” or call at <a href="tel:+917428006657" className="underline">+91 7428006657</a>
              </p>

              <button
                onClick={() => setOpenDialog(null)}
                className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </DialogPanel>
          </div>
        </Dialog>
      </div>
    </div>

    <div className="flex gap-[30px] mt-[50px]">
  {/* <p className="text-[30px] font-semibold text-[#de4141]">3</p> */}
  <div className="border p-[20px] rounded-[20px] w-full">
    <p className="font-bold">
      Job Title: <span className="font-normal">Content Writer</span>
    </p>
    <p className="font-bold">
      Location: <span className="font-normal">Delhi</span>
    </p>

    <button
      onClick={() => setOpenDialog('job3')}
      className="text-blue-600 underline mt-2"
    >
      Know more about the job
    </button>

    <Dialog open={openDialog === 'job3'} onClose={() => setOpenDialog(null)} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white p-6 rounded-xl max-w-[74rem] w-full shadow-xl overflow-y-auto max-h-[75vh]">
          <DialogTitle className="text-lg font-bold mb-4">Key Responsibilities</DialogTitle>
          <ul className="list-disc text-[15px] pl-5 space-y-2 mb-4">
            <li><span className="font-semibold">Create High-Quality Content:</span> Deliver well-researched, original, and engaging content that aligns with brand tone and goals.</li>
            <li><span className="font-semibold">Long-Form Content Writing:</span> Develop in-depth articles, whitepapers, reports, and blog posts that reflect thought leadership.</li>
            <li><span className="font-semibold">Social Media Content Creation:</span> Craft compelling captions, posts, and short-form content tailored for various platforms (LinkedIn, Instagram, X, etc.).</li>
            <li><span className="font-semibold">Magazine & Editorial Writing:</span> Write features, columns, and editorial content for internal/external publications and magazines.</li>
            <li><span className="font-semibold">Public Relations Support:</span> Collaborate with PR teams to write press releases, media briefs, and communication pieces.</li>
            <li><span className="font-semibold">Content Strategy Contribution:</span> Participate in brainstorming and planning sessions to align content with campaign objectives.</li>
            <li><span className="font-semibold">SEO Integration:</span> Implement basic SEO practices to improve content visibility and reach.</li>
            <li><span className="font-semibold">Proofreading & Editing:</span> Ensure grammatical accuracy, brand consistency, and clarity in all content deliverables.</li>
            <li><span className="font-semibold">Deadline Management:</span> Consistently deliver high-quality content within stipulated timelines.</li>
          </ul>

          <p className="text-lg font-bold mb-2">Key Qualifications & Skills</p>
          <ul className="list-disc text-[15px] pl-5 space-y-2 mb-4">
            <li>Bachelor’s degree in English, Journalism, Communications, Marketing, or a related field.</li>
            <li>2–4 years of experience in content writing, preferably in a digital media or corporate communications setup.</li>
            <li>Proven portfolio of published articles, blog posts, or social media campaigns.</li>
            <li>Familiarity with editorial standards and publication formats.</li>
          </ul>

          <p className="font-semibold text-[#005BFF] mt-4">
            <span className="block">Application Process:</span>
            Interested candidates can send their CVs to <a href="mailto:hr@iicsindia.org" className="underline">hr@iicsindia.org</a> with the subject line “Application for Content Writer” or call at <a href="tel:+919953895532" className="underline">+91 9953895532</a>
          </p>

          <button
            onClick={() => setOpenDialog(null)}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  </div>
</div>

<div className="flex gap-[30px] mt-[50px]">
  {/* <p className="text-[30px] font-semibold text-[#de4141]">4</p> */}
  <div className="border p-[20px] rounded-[20px] w-full">
    <p className="font-bold">
      Job Title: <span className="font-normal">Business Development Manager</span>
    </p>
    <p className="font-bold">
      Location: <span className="font-normal">Delhi</span>
    </p>

    <button
      onClick={() => setOpenDialog('job4')}
      className="text-blue-600 underline mt-2"
    >
      Know more about the job
    </button>

    <Dialog open={openDialog === 'job4'} onClose={() => setOpenDialog(null)} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white p-6 rounded-xl max-w-[74rem] w-full shadow-xl overflow-y-auto max-h-[75vh]">
          <DialogTitle className="text-lg font-bold mb-4">Key Responsibilities</DialogTitle>

          <p className="font-semibold mt-[15px]">Centre Setup & Operations:</p>
          <ul className="list-disc text-[15px] pl-5 space-y-2 mb-4">
            <li>Spearhead the establishment of the IICS centre, ensuring a smooth and efficient setup process.</li>
            <li>Oversee infrastructure planning, resource allocation, and operational readiness to launch academic and training programs successfully.</li>
            <li>Coordinate with internal and external stakeholders to ensure compliance with institutional and regulatory guidelines.</li>
          </ul>

          <p className="font-semibold mt-[15px]">Team Building & Management:</p>
          <ul className="list-disc text-[15px] pl-5 space-y-2 mb-4">
            <li>Lead the recruitment and onboarding of faculty, administrative staff, and other key personnel required for the centre's operation.</li>
            <li>Develop and implement training programs to ensure a highly skilled and motivated workforce.</li>
            <li>Foster a positive and performance-driven work culture within the centre.</li>
          </ul>

          <p className="font-semibold mt-[15px]">Academic & Industry Collaboration:</p>
          <ul className="list-disc text-[15px] pl-5 space-y-2 mb-4">
            <li>Collaborate with industry experts, corporate partners, and academic institutions to enhance the learning experience and employability of students.</li>
            <li>Establish strategic partnerships for internships, industry projects, and guest lectures.</li>
            <li>Drive innovation in curriculum development, ensuring alignment with global creative industry standards.</li>
          </ul>

          <p className="font-semibold mt-[15px]">Student & Program Development:</p>
          <ul className="list-disc text-[15px] pl-5 space-y-2 mb-4">
            <li>Oversee student admissions, ensuring high-quality intake and program effectiveness.</li>
            <li>Monitor and enhance the quality of training programs, ensuring industry relevance and excellence.</li>
            <li>Implement student engagement strategies to create a thriving learning environment.</li>
          </ul>

          <p className="font-semibold mt-[15px]">Business Growth & Revenue Generation:</p>
          <ul className="list-disc text-[15px] pl-5 space-y-2 mb-4">
            <li>Develop and execute strategies for centre growth, including outreach, marketing, and branding initiatives.</li>
            <li>Identify revenue streams, including corporate collaborations, industry-sponsored projects, and skill development programs.</li>
            <li>Optimize resource utilization to ensure financial sustainability and operational efficiency.</li>
          </ul>

          <p className="text-lg font-bold mb-2">Key Qualifications & Skills</p>
          <ul className="list-disc text-[15px] pl-5 space-y-2 mb-4">
            <li>Minimum 10–15 years in education management, training, or a leadership role in the Media & Entertainment, skill development, or corporate training sectors.</li>
            <li>Postgraduate degree in Management, Education, Creative Arts, or related fields preferred.</li>
            <li>Strong ability to build and lead teams, drive results, and establish a high-performing institution.</li>
            <li>Proven expertise in setting up and scaling operations, managing budgets, and achieving business targets.</li>
            <li>Strong network in the education and creative industry to facilitate partnerships and collaborations.</li>
            <li>Ability to identify, build, and convert revenue-generating opportunities.</li>
            <li>Excellent verbal and written communication skills to engage with stakeholders, faculty, and students effectively.</li>
            <li>Ability to navigate challenges and drive innovative solutions for institutional growth.</li>
          </ul>

          <p className="font-semibold text-[#005BFF] mt-4">
            <span className="block">Application Process:</span>
            Interested candidates can send their CVs to <a href="mailto:hr@iicsindia.org" className="underline">hr@iicsindia.org</a> with the subject line “Application for Business Development Manager” or call at <a href="tel:+919953895532" className="underline">+91 9953895532</a>
          </p>

          <button
            onClick={() => setOpenDialog(null)}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </DialogPanel>
      </div>
    </Dialog>
  </div>
</div>
     </div>
     
    </div>
  )
}

export default HiringArea
