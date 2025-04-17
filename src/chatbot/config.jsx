// chatbot/config.js
import { createChatBotMessage } from "react-chatbot-kit";
import SubjectOptions from "./widget/SubjectOption";

const botName = "Zuno";

const createConfig = (setOpenChatBot) => ({
  botName,
  initialMessages: [
    createChatBotMessage("Hi, Welcome to IICS! How can I help you", {
      widget: "subjectOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "subjectOptions",
      widgetFunc: (props) => <SubjectOptions {...props} />,
      props: {
        setOpenChatBot, // now works because it's passed in
      },
    },
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
});


export default createConfig;