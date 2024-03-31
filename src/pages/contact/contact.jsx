import { TextHeader } from "../../staticComponent/headerText";
import "./contact.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  return (
    <>
      <ContactDetails />
    </>
  );
};
function ContactDetails() {
  return (
    <section className="contact-us">
      <div className="container">
        <TextHeader>Contact us</TextHeader>
        <ContactForm />
      </div>
    </section>
  );
}
function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Form submit handler
  let formSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim() === "") return toast.error("Your Name is Required..!");
    if (phone.trim() === "") return toast.error("Your Phone is Required..!");
    if (message.trim() === "") return toast.error("Message is Required..!");
  };

  useEffect(() => {
    const contactForm = document.querySelector(".contact-form");
    let name = document.querySelector(".name-input");
    let phone = document.querySelector(".phone-input");
    let email = document.querySelector(".EmailInput");
    let message = document.querySelector(".PlaceInput");

    contactForm.addEventListener("submit", () => {
      let formData = {
        name: name.value,
        phone: phone.value,
        email: email.value,
        message: message.value,
      };

      let xhr = new XMLHttpRequest();

      xhr.open("POST", "https://coffee-backend-phi.vercel.app/send-message");
      xhr.setRequestHeader("content-type", "application/json");

      xhr.onload = function () {
        const responseTxt = JSON.parse(xhr.responseText);
        console.log(responseTxt);
        if (responseTxt.succses === "the message was send sucssefly") {
          toast.success("Your message has been sent..!");
          name.value = "";
          phone.value = "";
          email.value = "";
          message.value = "";
        } else {
          toast.error("Something went wrong..!");
        }
      };

      xhr.send(JSON.stringify(formData));
    });
  }, []);

  return (
    <form className="contact-form" onSubmit={formSubmitHandler}>
      <div className="form-group">
        <input
          className="name-input"
          type="text"
          placeholder="Name"
          name="firstname"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="phone-input"
          type="tel"
          placeholder="Mobile Number"
          name="mobilenumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          className="EmailInput"
          type="email"
          placeholder="Email"
          name="Email"
        />
      </div>
      <div className="form-group">
        <textarea
          type="text"
          className="PlaceInput"
          placeholder="Message"
          name="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
export default Contact;
