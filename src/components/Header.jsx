import React from "react";

const Header = () => {
  return (
    <div>
      <div className="profile">
        <div>
          <img src="assets/Mypic.jpg" id="profile__img" alt="profile_img" />

          <div id="twitter">GODWILL ONYEWUCHI</div>

          <div id="slack">Elevio</div>
        </div>

        <img id="share" src="assets/Icon.png" alt="shareIcon" />
      </div>
    </div>
  );
};

export default Header;
