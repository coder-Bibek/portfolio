import React, { useState } from "react";
import "./Contact.component.css";
const Contact = () => {
  const [number, setNumber] = useState("");
  return (
    <div className="contact-main" id="contact-div">
      <div className="contact-section">
        <form>
          <input
            placeholder="Enter your mail"
            type="text"
            className="nameinp"
            required
          />
          <br />
          <input
            placeholder="Enter your number"
            type="number"
            className="numinp"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
          <br />
          <input
            placeholder="Enter your company name"
            type="company"
            className="numinp"
          />
        </form>
        <section>
          <textarea
            cols={36}
            rows={6}
            placeholder="message..."
            className="txtarea col-sm-6"
          />
          <button
            className="submit-btn"
            type="submit"
            onClick={() => {
              number !== ""
                ? alert("Thankyou for your feedback")
                : alert("please fill all the fields");
            }}
          >
            SUBMIT
          </button>
        </section>
      </div>
    </div>
  );
};
export default Contact;
