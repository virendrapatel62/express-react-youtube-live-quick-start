const contactKey = "contacts";

function saveContacts(contacts) {
  localStorage.setItem(contactKey, JSON.stringify(contacts));
}

function getContacts() {
  try {
    const raw = localStorage.getItem(contactKey);
    return JSON.parse(raw);
  } catch (err) {
    console.error("Parsing error");
    return [];
  }
}

export { getContacts, saveContacts };
