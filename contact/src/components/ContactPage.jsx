import { useState } from "react";
import { ContactForm } from "./ContactForm";
import { ContactList } from "./ContactList";
import { fakeContacts } from "./contacts-config";

function ContactPage() {
  const [contacts, setContacts] = useState(fakeContacts);

  const saveContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  return (
    <div className="shadow shadow-sm row p-2 rounded">
      <div className="col border rounded p-3 m-1">
        <ContactForm onSave={saveContact} />
      </div>
      <div className="col border rounded p-3 m-1">
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export { ContactPage };
