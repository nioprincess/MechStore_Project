import { useEffect, useState } from "react";
import useUserAxios from "../hooks/useUserAxios";
import useToast from "../hooks/useToast";

const Messages = () => {
  const axios= useUserAxios()
  const {setToastMessage}=useToast()
  const [selectedMessage, setSelectedMessage] = useState(null);
  const[messages, setMessages]= useState([])
  const getMessages=async()=>{
    try {
      const resp= await axios.get("/api/product/view-messages");
      setMessages(resp.data);
       
      
    } catch (error) {
      setToastMessage({
        variant: "danger",
        message: error.message,
      });
      
    }
  }
  useEffect(()=>{
    getMessages()
  },[])
  return (
    <div className="bg-white p-4" id="messages">
      <h2 className="text-lg font-semibold mb-4">Client Messages</h2>

      <div className="flex flex-col lg:flex-row gap-4">
        <ul className="w-full lg:w-1/2">
          {messages.map((message) => (
            <li
              key={message.id}
              onClick={() => setSelectedMessage(message)}
              className={`p-3 mb-2 bg-gray-100 rounded-lg cursor-pointer hover:bg-blue-100 ${
                selectedMessage?.messageId === message.messageId && "bg-blue-200"
              }`}
            >
              <div className="font-medium text-gray-700">{message.Email}</div>
              <div className="text-sm text-gray-500">
                From: {message.Email} | Product ID: {message.productId}
              </div>
            </li>
          ))}
        </ul>

        {/* Message Details */}
        <div className="w-full lg:w-1/2">
          {selectedMessage ? (
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                {selectedMessage.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Email:</strong> {selectedMessage.Email}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Telephone:</strong> {selectedMessage.Telephone}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Address:</strong> {selectedMessage.Location}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Product ID:</strong> {selectedMessage.productId}
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <strong>Message:</strong> {selectedMessage.Message}
              </p>
            </div>
          ) : (
            <div className="text-gray-500 text-center p-4">
              Click on a message to view details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Messages;
