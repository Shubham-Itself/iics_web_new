import { useNavigate } from "react-router-dom";

const HeroHomeOne = ({ onSchoolButtonClick }: any) => {
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
    <>
      <section className="fix relative pb-[96px]">
        <img
          src="assets/iics_image/main_iics_banner.webp"
          alt="banner_imahe"
          className="w-[100%]"
        />
        <div className="absolute bottom-[96px] left-0 flex left-[37%] gap-[20px] -translate-x-1/2 justify-between p-[20px]">
          {registrationInfo.map((items, index) => (
            <div key={index} className="flex flex-col gap-[5px]">
              <button
                onClick={() => handleButtonClick(items.procees)}
                className="theme-btn yellow-btn !px-[16px] !py-[12px]"
              >
                {items.procees}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroHomeOne;