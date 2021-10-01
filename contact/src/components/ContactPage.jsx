import { useEffect, useState } from "react";
import { Router, useHistory } from "react-router-dom";
import {
  getContacts,
  saveContacts as saveContactsToLocalStorage,
} from "../services/localstorage";

import { Route, Link, Switch } from "react-router-dom";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { fakeContacts } from "./contacts-config";

function ContactPage() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);

  const history = useHistory();

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

    history.push("/details");
  };

  return (
    <div className="shadow shadow-sm  p-2 rounded col-lg-6 mx-auto">
      <div className="m-4 rounded">
        <Link className="btn btn-dark m-3" to="/create">
          Create Contact
        </Link>
        <Link className="btn btn-dark m-3" to="/list">
          <span>List Contact</span>
        </Link>

        <hr className="text-dark" />
      </div>
      <Switch>
        <Route path="/create">
          <div className="col rounded p-3 m-1">
            <ContactForm onSave={saveContact} />
          </div>
        </Route>
        <Route path={["/list", "/"]}>
          <div className="col rounded p-3 m-1">
            <ContactList
              onContactClick={handleContactClick}
              contacts={contacts}
            />
          </div>
        </Route>

        <Route path="/details">
          <div className="card col-8 mx-auto">
            <img
              src={selectedContact?.image}
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">{selectedContact?.firstName}</h5>
              <div className="card-text">
                <p>{selectedContact?.email}</p>
                <p>{selectedContact?.address}</p>
                <p>{selectedContact?.phone}</p>
              </div>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export { ContactPage };
