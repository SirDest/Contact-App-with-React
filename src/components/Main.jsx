import React from "react";
import { useLocalStorage } from "usehooks-ts";
import Header from "./Header";
import Contact from "./Contact";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const Main = () => {
  const [contacts, addContacts] = useLocalStorage("Your Contacts", []);

  const newContact = (name, number, email) => {
    const dateAdded = new Date();
    const addedTime = dateAdded.getHours() + ":" + dateAdded.getMinutes();
    addContacts(
      [
        ...contacts,
        {
          id: uuidv4(),
          name: name,
          number: number,
          email: email,
          time: addedTime,
        },
      ].sort((a, b) => a.name.localeCompare(b.name))
    );
  };

  return (
    <div className="w-full h-screen bg-blue-800">
      <Header />
      <Contact newContact={newContact} contacts={contacts} />
    </div>
  );
};

export default Main;
