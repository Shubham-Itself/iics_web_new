import { useEffect, useState } from "react";
import SocialIcons from "../../common/socialFixedIcons/SocialIcons";
import ChatbotWrapper from "../chatbotWrapper/ChatbotWrapper";


const FixedItemOnWeb = () => {
    const [openChatBot, setOpenChatBot] = useState(false);
    useEffect(() => {
      document.body.style.overflow = openChatBot ? "hidden" : "auto";
    }, [openChatBot]);
  return (
    <>
     <div className="fixed z-[10000] top-[50%] right-0">
        <SocialIcons />
      </div>
      <div
        className={`fixed top-0 left-0 ${
          openChatBot
            ? "w-full h-[100vh] bg-[rgba(0,0,0,0.5)] z-[10000]"
            : "z-[10000]"
        }`}
        onClick={() => setOpenChatBot(false)} // close on overlay click
      >
        <div
          className="z-[1000000] fixed right-[15px] bottom-[30px] p-[10px] bg-[#005BFF]"
          style={{
            boxShadow: "0 6px 10px 0 rgba(0, 0, 0, 0.3)",
            borderRadius: "50%",
          }}
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          <img
            src="/assets/iics_image/chatbot/robot-assistant.webp"
            alt="chatbot"
            className="w-[40px] h-[40px]"
            onClick={() => setOpenChatBot(!openChatBot)}
          />
          <div className="absolute z-[10000] -top-[442px] right-[67px]">
            {openChatBot && <ChatbotWrapper setOpenChatBot={setOpenChatBot}/>}
          </div>
        </div>
      </div>

    </>
  )
}

export default FixedItemOnWeb
