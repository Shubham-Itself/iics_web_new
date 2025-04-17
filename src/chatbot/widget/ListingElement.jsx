import React from 'react'
import { useNavigate } from 'react-router-dom';

const ListingElement = ({title  , path , setOpenChatBot , onClick}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (setOpenChatBot) setOpenChatBot(false);
        
        if (onClick) {
          onClick(); // Trigger custom action like handleSubject("Mentors")
        } else if (path) {
          navigate(path); // Default route navigation
        }
      };
  return (
    <div
    onClick={handleClick}
      
    style={{
      padding: "5px 8px",
      margin: "2px",
      backgroundColor: "rgba(255, 255, 255, 0.5)", // light translucent blue
      color: "white", // matching blue text
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
    
    {title}
  </div>
  )
}

export default ListingElement
