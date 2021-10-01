import { name, internet, phone, lorem } from "faker";

const fakeContacts = new Array(5).fill({}).map((el) => {
  return {
    firstName: name.firstName(),
    lastName: name.lastName(),
    email: internet.email(),
    phone: phone.phoneNumber(),
    address: lorem.paragraph(),
    image: internet.avatar(),
  };
});

const formInputs = [
  {
    label: "First Name",
    name: "firstName",
    type: "text",
    tag: "input",
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    tag: "input",
  },
  {
    label: "Nick Name",
    name: "nickName",
    type: "text",
    tag: "input",
  },
  {
    label: "Email Address",
    name: "email",
    type: "email",
    tag: "input",
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "text",
    tag: "input",
  },
  {
    label: "Address",
    name: "address",
    type: "textarea",
    tag: "textarea",
  },
];

export { formInputs, fakeContacts };
