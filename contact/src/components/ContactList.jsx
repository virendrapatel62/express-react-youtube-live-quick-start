function ContactList(props) {
  const { onContactClick, contacts } = props;
  const style = {
    height: "35px",
    borderRadius: "50%",
  };

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
              <div className="col-3">
                <img src={contact.image} style={style} />
              </div>
              <div className="col">
                {contact.firstName} {contact.lastName}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { ContactList };
