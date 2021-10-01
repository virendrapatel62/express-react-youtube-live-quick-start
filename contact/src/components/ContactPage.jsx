import { useEffect, useState } from "react";
import {
  getContacts,
  saveContacts as saveContactsToLocalStorage,
} from "../services/localstorage";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { fakeContacts } from "./contacts-config";

function ContactPage() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    console.log("contacts changed....", contacts);
    if (contacts.length) {
      saveContactsToLocalStorage(contacts);
    } else {
      setContacts(getContacts());
    }
  }, [contacts]);

  const saveContact = (contact) => {
    setContacts([...contacts, contact]);
  };
  const handleContactClick = (contact) => {
    console.log("Clicked on ", contact);
    setSelectedContact(contact);
  };

  return (
    <div className="shadow shadow-sm  p-2 rounded">
      {!selectedContact ? (
        <div className="row">
          <div className="col border rounded p-3 m-1">
            <ContactForm onSave={saveContact} />
          </div>
          <div className="col border rounded p-3 m-1">
            <ContactList
              onContactClick={handleContactClick}
              contacts={contacts}
            />
          </div>
        </div>
      ) : (
        <div className="col border rounded p-3 m-1">
          <button
            onClick={() => setSelectedContact(null)}
            className="btn btn-sm btn-info"
          >
            Back
          </button>
          <hr />
          <div className="card col-lg-4 col-md-6 mx-auto">
            <img
              src={selectedContact.image}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">{selectedContact.firstName}</h5>
              <div className="card-text">
                <p>{selectedContact.email}</p>
                <p>{selectedContact.address}</p>
                <p>{selectedContact.phone}</p>
              </div>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { ContactPage };
