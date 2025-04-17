// chatbot/widgets/SubjectOptions.js
import React from "react";

const SubjectOptions = ({ actionProvider }) => {
  const options = ["Admission Process", "Courses", "Mentors" , "Careers" , "Live Projects" , 'Industry Associations' , 'Apprenticeship'];

  const handleClick = (option) => {
    actionProvider.handleSubject(option);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "10px" }}>
      What you want know?

      <div className="flex flex-wrap">
      {options.map((option) => (
      <div
      key={option}
      onClick={() => handleClick(option)}
      style={{
        padding: "5px 8px",
        margin: "2px",
        backgroundColor: "rgba(0, 123, 255, 0.15)", // light translucent blue
        color: "#007bff", // matching blue text
        border: "1px solid rgba(0, 123, 255, 0.3)", // subtle border
        borderRadius: "5px",
        cursor: "pointer",
        width: "fit-content",
        fontWeight: "500",
        fontSize: "10px",
        lineHeight:'15px',
        display: "flex",
        alignItems: "center",
        gap: "8px",
        backdropFilter: "blur(4px)",
      }}
    >
      <span style={{ fontSize: "18px", fontWeight: "bold" }}>+</span>
      {option}
    </div>
      ))}
      </div>
    </div>
  );
};

export default SubjectOptions;