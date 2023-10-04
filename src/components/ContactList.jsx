import React from "react";
import { LiaEdit } from "react-icons/lia";
import { AiOutlineDelete } from "react-icons/ai";

const ContactList = ({
  deleteButton,
  editButton,
  editClicked,
  deleteClicked,
  identities,
}) => {
  const { name, number, email, time } = identities;
  return (
    <div className="w-full h-fit border-b-2 border-gray-500 flex justify-between items-center py-2">
      <div className="flex flex-col">
        <p className="text-[14px] md:text-[19px] font-bold capitalize">
          {name}
        </p>
        <div className="flex gap-3">
          <p className="text-gray-400 text-[10px] md:text-[14px]">{number}</p>
          <p className="text-gray-400 text-[10px] md:text-[14px]">{time}</p>
        </div>
      </div>
      <div className="flex text-[20px] gap-2">
        <LiaEdit
          onClick={editButton}
          className={`text-green-400 hover:text-green-700 cursor-pointer transition-transform duration-100 ease-in-out transform ${
            editClicked ? "scale-110" : "scale-100"
          } `}
        />
        <AiOutlineDelete
          onClick={deleteButton}
          className={`text-red-400 hover:text-red-700 cursor-pointer transition-transform duration-100 ease-in-out transform ${
            deleteClicked ? "scale-110" : "scale-100"
          } `}
        />
      </div>
    </div>
  );
};

export default ContactList;
