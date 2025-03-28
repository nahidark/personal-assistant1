import { Widget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";

const Chatbot = () => {
  const handleNewUserMessage = (newMessage) => {
    // You can call your AI chatbot API here
    console.log("New message from user:", newMessage);
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Chat with us!"
      subtitle="We're here to help."
    />
  );
};

export default Chatbot;
