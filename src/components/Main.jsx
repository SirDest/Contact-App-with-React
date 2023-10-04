import React from "react";
import Header from "./Header";
import Contact from "./Contact";

const Main = () => {
  return (
    <div className="w-full h-screen bg-blue-600">
      <Header />
      <Contact />
      {/* <AddContact /> */}
    </div>
  );
};

export default Main;
