// chatbot/MessageParser.js

class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      // Not used because input field is hidden
      this.actionProvider.handleMessage(message);
    }
  }
  
  export default MessageParser;