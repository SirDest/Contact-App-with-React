import React, { useState } from "react";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import { BsPersonAdd } from "react-icons/bs";
import { ImAddressBook } from "react-icons/im";
import EditContact from "./EditContact";

const Contact = ({
  newContact,
  contacts,
  deleteButton,
  editCloseButt,
  editButton,
  removeEditContForm,
  submitEditForm,
}) => {
  const [addClicked, setAddClicked] = useState(false);
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
  const [search, setSearch] = useState("");

  const searchChange = (e) => {
    const term = e.target.value;

    setSearch(term);
  };

  const getFilteredItems = () => {
    if (!search) {
      return contacts;
    }
    return contacts.filter(
      (contact) =>
        contact.email.toLowerCase().includes(search.toLowerCase()) ||
        contact.name.toLowerCase().includes(search.toLowerCase()) ||
        contact.number.toLowerCase().includes(search.toLowerCase())
    );
  };
  const searchedContact = getFilteredItems();

  return addContForm ? (
    <AddContact setAddContForm={setAddContForm} newContact={newContact} />
  ) : (
    <div className="w-full h-fit flex flex-col">
      <div className="w-full sm:w-[500px] m-auto h-fit bg-white flex justify-between gap-1 sm:gap-2 md:gap-4 items-center p-3 border-t-2 border-gray-400">
        <ImAddressBook className="text-[40px]" />
        <input
          onChange={searchChange}
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
        {searchedContact.map((identities) =>
          identities.editing ? (
            <EditContact
              submitEditForm={submitEditForm}
              identities={identities}
              removeEditContForm={removeEditContForm}
              key={identities.id}
              editCloseButt={editCloseButt}
            />
          ) : (
            <ContactList
              key={identities.id}
              identities={identities}
              deleteButton={deleteButton}
              editButton={editButton}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Contact;
