import React from "react";

const Links = () => {
  return (
    <div className="links_section">
      <a
        className="links"
        href="https://training.zuri.team/"
        target="_blank"
        id="btn_zuri"
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
      >
        Zuri Books
      </a>

      <a
        className="links"
        href="https://books.zuri.team/python-for-beginners?ref_id=elevio"
        target="_blank"
        id="books"
        rel="noreferrer"
      >
        Python Book
      </a>

      <a
        className="links"
        href="https://background.zuri.team/"
        target="_blank"
        id="pitch"
        rel="noreferrer"
      >
        Background Check for Coders
      </a>

      <a
        className="links"
        href="https://books.zuri.team/design-rules"
        target="_blank"
        id="book_design"
        rel="noreferrer"
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
