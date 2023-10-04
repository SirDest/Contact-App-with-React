import React, { useState } from "react";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

import { BsPersonAdd } from "react-icons/bs";
import { ImAddressBook } from "react-icons/im";

const Contact = () => {
  const [addClicked, setAddClicked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [addContForm, setAddContForm] = useState(false);

  const addButtonClick = () => {
    setAddClicked(!addClicked);
    setTimeout(() => {
      setAddClicked(false);
    }, 200);
    setTimeout(() => {
      setAddContForm(true);
    }, 300);
  };
  const editButton = () => {
    setEditClicked(!editClicked);
    setTimeout(() => {
      setEditClicked(false);
    }, 200);
  };

  const deleteButton = () => {
    setDeleteClicked(!deleteClicked);

    setTimeout(() => {
      setDeleteClicked(false);
    }, 200);
  };

  return addContForm ? (
    <AddContact setAddContForm={setAddContForm} />
  ) : (
    <div className="w-full h-fit flex flex-col">
      <div className="w-full sm:w-[500px] m-auto h-fit bg-white flex justify-between gap-1 sm:gap-2 md:gap-4 items-center p-3 border-t-2 border-gray-400">
        <ImAddressBook className="text-[40px]" />
        <input
          type="text"
          className="bg-gray-200 p-2 w-full outline-none border-none"
          placeholder="Search..."
        />
        <button>
          <BsPersonAdd
            onClick={addButtonClick}
            className={`transition-transform duration-100 ease-in-out transform text-[30px] text-blue-400 hover:text-blue-700 ${
              addClicked ? "scale-110" : "scale-100"
            } `}
          />
        </button>
      </div>
      <div className="h-fit w-full sm:w-[500px] bg-white m-auto flex flex-col p-3">
        <ContactList
          deleteButton={deleteButton}
          editButton={editButton}
          editClicked={editClicked}
          deleteClicked={deleteClicked}
        />
      </div>
    </div>
  );
};

export default Contact;
