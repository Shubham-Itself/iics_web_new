const ImportantDatesArea = () => {
  //   const events = [
  //     {
  //         dateDay:'18',
  //         dateMonthYear:'April 2025',
  //         name:'Careers in Game',
  //         officeLocation:'Lakshya Ingame Academy',
  //         placeLocation:'Lajpat Nagar, Delhi',
  //         time:'03:00 PM',

  //     },
  //     {
  //         dateDay:'25',
  //         dateMonthYear:'April 2025',
  //         name:'AI Game Jam',
  //         officeLocation:'Nilee Games',
  //         placeLocation:'Lajpat Nagar, Delhi',
  //         time:'09:00 AM',

  //     },
  //     {
  //         dateDay:'26',
  //         dateMonthYear:'April 2025',
  //         name:'AI Game Jam',
  //         officeLocation:'Nilee Games',
  //         placeLocation:'Lajpat Nagar, Delhi',
  //         time:'09:00 AM',

  //     },
  //   ]

  return (
    <div className="px-[50px] pb-[50px]">
      <section className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg shadow-md mt-8">
        <h3 className="text-2xl font-bold text-blue-800 mb-4">
          🗓️ Important Dates
        </h3>
        <ul className="list-disc pl-6 text-gray-800 space-y-2 marker:text-blue-500">
          <li>
            <strong className="text-blue-700">Registration Start Date:</strong>{" "}
            28th April 2025
          </li>
          <li>
            <strong className="text-blue-700">Registration End Date:</strong>{" "}
            12th May 2025
          </li>
          <li>
            <strong className="text-blue-700">Online Entrance Exam:</strong>{" "}
            16th to 18th May 2025
          </li>
          <li>
            <strong className="text-blue-700">Batch Launch:</strong> 12th June
            2025
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ImportantDatesArea;
