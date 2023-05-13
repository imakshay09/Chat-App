import React from "react";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1658235081033-ccd89cdfe77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1658235081033-ccd89cdfe77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>{" "}
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1658235081033-ccd89cdfe77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>{" "}
    </div>
  );
};

export default Chats;
