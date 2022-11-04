import React from "react";

const Contact = () => {
  return (
    <div className="contactCon">
      <div id="title">Contact Me</div>
      <p id="subTitle">
        Hi there, contact me to ask me about anything you have in mind.
      </p>

      <form className="form">
        <div className="names">
          <div className="form-group">
            <div className="form-label">
              <label>First name</label>
            </div>

            <input
              className="form-control"
              type="text"
              placeholder="Enter your first name"
              id="first_name"
              required={true}
            />
          </div>

          <div className="form-group">
            <div className="form-label">
              <label>Last name</label>
            </div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter your last name"
              id="last_name"
              required={true}
            />
          </div>
        </div>

        <div className="form-group">
          <div className="form-label">
            <label>Email</label>
          </div>
          <input
            className="form-control"
            type="email"
            placeholder="yourname@email.com"
            id="email"
            required={true}
          />
        </div>

        <div className="form-group">
          <div className="form-label">
            <label>Message</label>
          </div>
          <textarea
            className="form-control"
            type="text"
            placeholder="Send me a message and I'll reply you as soon as possible..."
            rows="5"
            id="message"
            required={true}
          ></textarea>
        </div>

        <div className="agree">
          <input type="checkbox" className="checkbox" required={true}/>
          <p>You agree to providing your data to Elevio who may contact you.</p>
        </div>

        <button type="submit" className="btn" id="btn__submit">Send message</button>
      </form>
    </div>
  );
};

export default Contact;
