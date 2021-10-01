import { useState } from "react";
import { formInputs } from "./contacts-config";
import { internet } from "faker";

function ContactForm(props) {
  const formInitialState = {
    firstName: "",
    lastName: "",
    nickName: "",
    email: "",
    phone: "",
    address: "",
  };
  const [formData, setFormData] = useState(formInitialState);

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const saveContact = (event) => {
    event.preventDefault();

    props.onSave({ ...formData, image: internet.avatar() });

    setFormData(formInitialState);
  };

  return (
    <div className="">
      <form onSubmit={saveContact}>
        {formInputs.map((input, index) => (
          <div className="mb-3" key={index}>
            <label className="form-label">{input.label}</label>
            <input.tag
              onChange={handleOnChange}
              className="form-control"
              name={input.name}
              value={formData[input.name]}
            />
          </div>
        ))}

        <div className="mt-3">
          <input type="submit" className="btn btn-dark" value="Save Contact" />
        </div>
      </form>

      {/* <form>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value="Virendra"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value=""
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nickname</label>
          <input
            type="text"
            className="form-control"
            name="nickname"
            value="Viren"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="number" className="form-control" name="phone" value="" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email" value="" />
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <textarea className="form-control" name="address"></textarea>
        </div>
      </form> */}
    </div>
  );
}

export { ContactForm };
