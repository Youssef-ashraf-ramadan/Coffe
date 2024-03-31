import { TextHeader } from "../../staticComponent/headerText";
import "../contact/contact.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const Pickup = () => {
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
        <TextHeader>Pick Up</TextHeader>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cafe, setCafe] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Form submit handler
  let formSubmitHandler = (e) => {
    e.preventDefault();
    if (name.trim() === "") return toast.error("Your Name is Required..!");
    if (phone.trim() === "") return toast.error("Your Phone is Required..!");
    if (email.trim() === "") return toast.error("Your Email is Required..!");
    if (message.trim() === "") return toast.error("Message is Required..!");

    setIsFormSubmitted(true);
  };

  const [cafeInfo, setCafeInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetch(`https://coffee-backend-phi.vercel.app/cafes/${id}`).then((res) => {
      res.json().then((cafeInfo) => {
        setCafeInfo(cafeInfo);
      });
    });
  }, []);

  useEffect(() => {
    if (cafeInfo && !isFormSubmitted) {
      const pickForm = document.querySelector(".pick-form");
      let name = document.querySelector(".name-input");
      let phone = document.querySelector(".phone-input");
      let email = document.querySelector(".EmailInput");
      let cafe = document.querySelector(".cafe-input");
      let message = document.querySelector(".PlaceInput");

      pickForm.addEventListener("submit", () => {
        let formData = {
          name: name.value,
          phone: phone.value,
          email: email.value,
          cafe: cafe.value,
          message: message.value,
        };

        let xhr = new XMLHttpRequest();

        xhr.open("POST", "https://coffee-backend-phi.vercel.app/pickup");
        xhr.setRequestHeader("content-type", "application/json");

        xhr.onload = function () {
          const responseTxt = JSON.parse(xhr.responseText);
          console.log(xhr.responseText);
          if (responseTxt.succses === "the message was send sucssefly") {
            toast.success("Your message has been sent..!");
            name.value = "";
            setPhone("");
            setEmail("");
            setMessage("");
          } else {
            toast.error("Something went wrong..!");
          }
        };

        xhr.send(JSON.stringify(formData));
      });
    }
  }, [cafeInfo, isFormSubmitted]);

  if (!cafeInfo) return "";

  return (
    <form className="pick-form" onSubmit={formSubmitHandler}>
      <div className="form-group">
        <input
          className="name-input"
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="phone-input"
          type="tel"
          placeholder="Mobile Number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          className="EmailInput"
          type="email"
          placeholder="Email"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <input
          style={{ userSelect: "none", opacity: 0.8 }}
          className="cafe-input EmailInput"
          type="text"
          placeholder="Cafe"
          value={cafeInfo.name}
          disabled
          name="cafe"
        />
      </div>
      <div className="form-group">
        <textarea
          style={{ height: 410 + "px" }}
          type="text"
          className="PlaceInput"
          placeholder="Add Details"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit">Confirm</button>
    </form>
  );
}

export default Pickup;
