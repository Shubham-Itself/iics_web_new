// @ts-nocheck

import Chatbot from 'react-chatbot-kit';

import createConfig from '../../chatbot/config';
import MessageParser from '../../chatbot/MessageParser';
import ActionProvider from '../../chatbot/ActionProvider';

const ChatbotWrapper = ({ setOpenChatBot }) => {
    const config = createConfig(setOpenChatBot);
  return (
    
    <Chatbot
    config={config}
    messageParser={MessageParser}
    actionProvider={ActionProvider}
  />
  )
}

export default ChatbotWrapper
