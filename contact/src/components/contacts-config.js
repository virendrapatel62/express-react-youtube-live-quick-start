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

const Input = (props) => <input {...props}></input>;
const TextArea = (props) => <textarea {...props}></textarea>;

const formInputs = [
  {
    label: "First Name",
    name: "firstName",

    type: "text",
    tag: "input",
    tag: Input,
  },
  {
    label: "Last Name",
    name: "lastName",
    type: "text",
    tag: Input,
  },
  {
    label: "Nick Name",
    name: "nickName",

    type: "text",
    tag: Input,
  },
  {
    label: "Email Address",
    name: "email",

    type: "email",
    tag: Input,
  },
  {
    label: "Phone Number",
    name: "phone",

    type: "text",
    tag: Input,
  },
  {
    label: "Address",
    name: "address",

    type: "textarea",
    tag: TextArea,
  },
];

export { formInputs, fakeContacts };
