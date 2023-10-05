import React, { useState } from "react";
import { useLocalStorage } from "usehooks-ts";
import Header from "./Header";
import Contact from "./Contact";
import { v4 as uuidv4 } from "uuid";

uuidv4();

const Main = () => {
  const [contacts, addContacts] = useLocalStorage("Your Contacts", []);
  const [editCloseButt, setEditCloseButt] = useState(false);

  const newContact = (name, number, email) => {
    const dateAdded = new Date();
    const addedTime =
      (dateAdded.getHours() < 10
        ? "0" + dateAdded.getHours()
        : dateAdded.getHours()) +
      ":" +
      (dateAdded.getMinutes() < 10
        ? "0" + dateAdded.getMinutes()
        : dateAdded.getMinutes());
    addContacts(
      [
        ...contacts,
        {
          id: uuidv4(),
          name: name,
          number: number,
          email: email,
          time: addedTime,
          editing: false,
        },
      ].sort((a, b) => a.name.localeCompare(b.name))
    );
  };
  const editButton = (id) => {
    addContacts(
      contacts.map((contact) =>
        contact.id === id ? { ...contact, editing: true } : contact
      )
    );
  };
  const removeEditContForm = (id) => {
    setEditCloseButt(!editCloseButt);
    setTimeout(() => {
      setEditCloseButt(false);
    }, 200);
    setTimeout(() => {
      addContacts(
        contacts.map((contact) =>
          contact.id === id ? { ...contact, editing: false } : contact
        )
      );
    }, 150);
  };

  const deleteButton = (id) => {
    addContacts(contacts.filter((contact) => contact.id !== id));
  };

  const submitEditForm = (newName, newPhone, newMail, id) => {
    setTimeout(() => {
      addContacts(
        contacts.map((contact) =>
          contact.id === id
            ? {
                ...contact,
                name: newName,
                number: newPhone,
                email: newMail,
                editing: false,
              }
            : contact
        )
      );
    }, 300);
  };
  return (
    <div className="w-full min-h-screen bg-blue-800">
      <Header />
      <Contact
        submitEditForm={submitEditForm}
        removeEditContForm={removeEditContForm}
        newContact={newContact}
        contacts={contacts}
        addContacts={addContacts}
        editButton={editButton}
        editCloseButt={editCloseButt}
        deleteButton={deleteButton}
      />
    </div>
  );
};

export default Main;
