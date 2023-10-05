import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

const ContactList = ({ deleteButton, editButton, identities }) => {
  const { id, name, number, time } = identities;
  return (
    <div className="w-full h-fit border-b-[1px] border-gray-500 flex justify-between items-center py-2 ">
      <div
        className="flex flex-col w-full"
        onClick={() => {
          editButton(id);
        }}
      >
        <p className="text-[14px] md:text-[19px] font-bold capitalize">
          {name}
        </p>
        <div className="flex gap-4">
          <p className="text-gray-400 text-[10px] md:text-[14px]">{number}</p>
          <p className="text-gray-400 text-[10px] md:text-[14px]">{time}</p>
        </div>
      </div>
      <div className="flex text-[20px] px-3">
        <AiOutlineDelete
          onClick={() => {
            deleteButton(id);
          }}
          className="text-red-700 hover:scale-110 cursor-pointer duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default ContactList;
