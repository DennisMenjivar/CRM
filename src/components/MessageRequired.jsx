import React from "react";

const MessageRequired = ({children}) => {
  return (
    <div className="text-center bg-red-500 text-white text-xs"> {children} </div>
  )
};

export default MessageRequired;
