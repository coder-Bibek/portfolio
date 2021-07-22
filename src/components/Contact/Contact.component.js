import React from "react";
import "./Contact.component.css";
const Contact = () => {
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
            required
          />
          <br />
          <input
            placeholder="Enter your number"
            type="number"
            className="numinp"
            required
          />
        </form>
        <section>
          <textarea
            cols={36}
            rows={6}
            placeholder="message..."
            className="txtarea"
          />
          <button
            className="submit-btn"
            type="submit"
            onClick={() => alert("Thankyou for your feedback")}
          >
            SUBMIT
          </button>
        </section>
      </div>
    </div>
  );
};
export default Contact;
