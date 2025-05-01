import { useNavigate } from "react-router-dom";


const ImportantCtaArea = ({ onSchoolButtonClick }: any) => {
    const navigate = useNavigate(); // React Router v6+ hook for navigation

    const registrationInfo = [
      {
        procees: 'Important Dates',
      },
      {
        procees: 'Upcoming Event',
      },
      {
        procees: 'School',
      },
    ];
  
    const handleButtonClick = (process: string) => {
      if (process === 'Upcoming Event') {
        navigate('/event'); // Redirect to /events when the "Upcoming Event" button is clicked
      } else {
        onSchoolButtonClick(); // Call the passed function for other buttons
      }
    };
  return (
   <div className="flex justify-center">
     <div className=" w-[50%]  flex  gap-[20px]  justify-between p-[20px] mobile:w-full ">
    {registrationInfo.map((items, index) => (
      <div key={index} className="flex flex-col gap-[5px]">
        <button
          onClick={() => handleButtonClick(items.procees)}
          className="theme-btn yellow-btn !px-[16px] !py-[12px] mobile:!text-[8px]"
        >
          {items.procees}
        </button>
      </div>
    ))}
  </div>
   </div>
  )
}

export default ImportantCtaArea
