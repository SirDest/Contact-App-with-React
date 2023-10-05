import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const EditContact = ({
  identities,
  removeEditContForm,
  submitEditForm,
  editCloseButt,
}) => {
  const { id, name, number, email } = identities;
  const [nameValue, setNameValue] = useState(name);
  const [emailValue, setEmailValue] = useState(email);
  const [phoneValue, setphoneValue] = useState(number);

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

  const submitEditContForm = (e) => {
    e.preventDefault();
    submitEditForm(nameValue, phoneValue, emailValue, id);
  };

  return (
    <div className="w-full h-fit flex">
      <form
        onSubmit={submitEditContForm}
        className="sm:w-[400px] h-full w-full sm:h-[350px] flex flex-col border-[1px] border-gray-400 relative bg-white m-auto p-4"
      >
        <AiOutlineClose
          onClick={() => {
            removeEditContForm(id);
          }}
          className={`transition-transform duration-100 ease-in-out transform text-[20px] text-red-500 absolute top-4 right-4 cursor-pointer hover:text-red-700 ${
            editCloseButt ? "scale-110" : "scale-100"
          } `}
        />
        <div className="flex flex-col mt-5">
          <label className="text-[15px]">Name:</label>
          <input
            required
            type="text"
            value={nameValue}
            onChange={handleNameChange}
            className=" bg-gray-300 outline-none py-1 px-2"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[15px]">Phone Number:</label>
          <input
            required
            type="number"
            value={phoneValue}
            onChange={handlePhoneChange}
            className=" bg-gray-300 outline-none py-1 px-2"
          />
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[15px]">Email:</label>
          <input
            type="email"
            required
            value={emailValue}
            onChange={handleEmailChange}
            className="bg-gray-300 outline-none py-1 px-2"
          />
        </div>
        <button
          onSubmit={submitEditContForm}
          type="submit"
          className="text-[17px] font-bold py-2 mt-6 bg-blue-700 hover:scale-110 ease-in-out duration-200"
        >
          UPDATE
        </button>
      </form>
    </div>
  );
};

export default EditContact;
