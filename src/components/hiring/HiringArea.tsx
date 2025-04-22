

const HiringArea = () => {
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
    <div className="py-[50px] px-[100px]">
      <div className="flex gap-[30px]">
        <p className="text-[30px] font-semibold text-[#de4141]">1</p>
        <div className="border p-[50px] rounded-[20px] w-full">
        <p className="font-bold">Job Title: <span className="font-normal">Field Marketing Executive</span></p>
        <p className="font-bold">Location: <span className="font-normal">Delhi</span></p>
        <p className="font-bold">Educational Qualification: <span className="font-normal">Any Graduation</span></p>
        <p className="font-bold">Years of Experience: <span className="font-normal">Minimum 1 Year</span></p>
        <p className="font-bold">Job Responsibilities:</p>
        <ul className="list-disc text-[15px]">
            <li>Visit potential clients or students in the assigned field area.</li>
            <li>Promote and create awareness about the institution’s courses or programs.</li>
            <li>Generate interest among students for enrolment.</li>
            <li>Build and maintain relationships with students, and parents.</li>
            <li>Collaborate with schools, institutions, and colleges to do awareness creation programs.</li>
            <li>Report daily activities and leads to the manager.</li>
            <li>Meet assigned targets for student engagement or enrolment.</li>
        </ul>
        <p className="font-semibold text-[#005BFF]">Good communication, interpersonal, and persuasive sales skills are highly preferred.</p>


        


      </div>
      </div>
     
    </div>
  )
}

export default HiringArea
