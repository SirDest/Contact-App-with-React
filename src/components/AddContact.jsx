import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddContact = ({ setAddContForm, newContact }) => {
  const [addButt, setAddButt] = useState(false);
  const [addContButton, setAddContactButt] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setphoneValue] = useState("");

  const handleNameChange = (e) => {
    const nameChange = e.target.value;
    setNameValue(nameChange);
  };
  const handleEmailChange = (e) => {
    const emailChange = e.target.value;
    setEmailValue(emailChange);
  };

  const handlePhoneChange = (e) => {
    const phoneChange = e.target.value;
    setphoneValue(phoneChange);
  };

  const submitAddContForm = (e) => {
    e.preventDefault();
    setAddContactButt(true);
    setTimeout(() => {
      setAddContactButt(false);
    }, 200);

    newContact(nameValue, phoneValue, emailValue);
    setTimeout(() => {
      setAddContForm(false);
    }, 200);
  };

  const removeAddContForm = () => {
    setTimeout(() => {
      setAddContForm(false);
    }, 300);

    setAddButt(true);
    setTimeout(() => {
      setAddButt(false);
    }, 200);
  };
  return (
    <div className="w-full h-fit flex">
      <form
        onSubmit={submitAddContForm}
        className="sm:w-[400px] h-full w-full sm:h-[350px] flex flex-col border-t-2 border-gray-400 relative bg-white m-auto p-4"
      >
        <AiOutlineClose
          onClick={removeAddContForm}
          className={`transition-transform duration-100 ease-in-out transform text-[20px] text-red-500 absolute top-4 right-4 cursor-pointer hover:text-red-700 ${
            addButt ? "scale-110" : "scale-100"
          } `}
        />
        <div className="flex flex-col mt-5">
          <label className="text-[18px]">Name:</label>
          <input
            required
            type="text"
            value={nameValue}
            onChange={handleNameChange}
            className=" bg-gray-300 outline-none py-1 px-2"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[18px]">Phone Number:</label>
          <input
            required
            type="number"
            value={phoneValue}
            onChange={handlePhoneChange}
            className=" bg-gray-300 outline-none py-1 px-2"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[18px]">Email:</label>
          <input
            type="email"
            required
            value={emailValue}
            onChange={handleEmailChange}
            className="bg-gray-300 outline-none py-1 px-2"
          />
        </div>
        <button
          type="submit"
          className={` transition-transform duration-100 ease-in-out transform text-[17px] py-2 mt-6 bg-blue-700 hover:scale-110 ${
            addContButton ? "scale-125" : "scale-100"
          }`}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddContact;
