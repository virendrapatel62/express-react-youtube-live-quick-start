function ContactList(props) {
  const { onContactClick, contacts, onDelete } = props;
  const style = {
    height: "35px",
    borderRadius: "50%",
  };

  const handleClick = (event, contact, index) => {
    event.stopPropagation();
    onDelete(contact, index);
  };

  if (!contacts.length) {
    return <p className="alert alert-info display-4">No-Contacts</p>;
  }

  return (
    <div className="">
      <ul className="list-group">
        {contacts.map((contact, index) => (
          <li
            onClick={() => onContactClick(contact)}
            className="list-group-item"
            key={index}
            style={{ cursor: "pointer" }}
          >
            <div className="row">
              <div className="col-2">
                <img src={contact.image} style={style} />
              </div>
              <div className="col">
                {contact.firstName} {contact.lastName}
              </div>
              <div className="col-2">
                <button
                  onClick={(event) => handleClick(event, contact, index)}
                  className="btn"
                >
                  ❌
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { ContactList };
