import React from "react";

const Links = () => {
  return (
    <div className="links_section">
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
        title="An online book store for both design and coding."
      >
        Zuri Books
      </a>

      <a
        className="links"
        href="https://books.zuri.team/python-for-beginners?ref_id=Elevio"
        target="_blank"
        id="book__python"
        rel="noreferrer"
        title="A comprehensive and beginner-friendly introduction to python."
      >
        Python Book
      </a>

      <a
        className="links"
        href="https://background.zuri.team/"
        target="_blank"
        id="pitch"
        rel="noreferrer"
        title="A trusted and tested service which helps to regulate and thoroughly vet coders."
      >
        Background Check for Coders
      </a>

      <a
        className="links"
        href="https://books.zuri.team/design-rules"
        target="_blank"
        id="book__design"
        rel="noreferrer"
        title="A well broken down resource with laid down guidelines to becoming a master of design."
      >
        Design Books
      </a>

      <div className="icons">
        <img src="assets/github.png" id="github" alt="github_img" />
        <img src="assets/slack.png" id="slackImg" alt="slack_img" />
      </div>
    </div>
  );
};

export default Links;
