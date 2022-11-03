import React from "react";
import {NavLink} from 'react-router-dom';
import Header from "./Header";

const Links = () => {
  return (
    <>
      <Header />
      <div className="links_section">
        <div>
          <a
            className="links"
            href="https://training.zuri.team/"
            target="_blank"
            id="btn__zuri"
            rel="noreferrer"
          >
            Twitter Link
          </a>

          <a
            className="links"
            href="http://books.zuri.team/"
            target="_blank"
            id="books"
            rel="noreferrer"
            title="Zuri Book Resource "
          >
            <div>
              Zuri Books
              <sub>An online book store for both design and coding.</sub>
            </div>
          </a>

          <a
            className="links"
            href="https://books.zuri.team/python-for-beginners?ref_id=Elevio"
            target="_blank"
            id="book__python"
            rel="noreferrer"
            title="Python Book"
          >
            <div>
              Python Book
              <sub>
                A comprehensive and beginner-friendly introduction to python.
              </sub>
            </div>
          </a>

          <a
            className="links"
            href="https://background.zuri.team/"
            target="_blank"
            id="pitch"
            rel="noreferrer"
            title="Background Check for Coders"
          >
            <div>
              Background Check for Coders
              <sub>
                A trusted and tested service which helps to regulate and
                thoroughly vet coders.
              </sub>
            </div>
          </a>

          <a
            className="links"
            href="https://books.zuri.team/design-rules"
            target="_blank"
            id="book__design"
            rel="noreferrer"
            title="Design books"
          >
            <div>
              Design Books
              <sub>
                A well broken down resource with laid down guidelines to
                becoming a master of design.
              </sub>
            </div>
          </a>

          <NavLink
            className="links"
            to="/contact"
            id="contact"
          >
            <div>Contact Me</div>
          </NavLink>

          <div className="icons">
            <img src="assets/github.png" id="github" alt="github_img" />
            <img src="assets/slack.png" id="slackImg" alt="slack_img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Links;
