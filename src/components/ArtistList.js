import React from "react";
import ArtistCard from "./ArtistCard";

import Avatar1 from "../images/users/avatar/1.png";
import Avatar2 from "../images/users/avatar/2.png";
import Avatar3 from "../images/users/avatar/3.png";
import Avatar4 from "../images/users/avatar/4.png";

import Background1 from "../images/users/user-bg/1.jpg";
import Background2 from "../images/users/user-bg/2.jpg";
import Background3 from "../images/users/user-bg/3.jpg";
import Background4 from "../images/users/user-bg/4.jpg";
import Background5 from "../images/users/user-bg/5.jpg";

const artistListData = [
  {
    avatar: Avatar1,
    background: Background1,
    fullName: "Thomas Edward",
    username: "@thewildwithyou",
  },
  {
    avatar: Avatar2,
    background: Background2,
    fullName: "Chris Doe",
    username: "@thewildwithyou",
  },
  {
    avatar: Avatar3,
    background: Background3,
    fullName: "Emilie Jones",
    username: "@thewildwithyou",
  },
  {
    avatar: Avatar4,
    background: Background4,
    fullName: "Jessica Williams",
    username: "@thewildwithyou",
  },
  {
    avatar: Avatar1,
    background: Background5,
    fullName: "Bell Suillian",
    username: "@thewildwithyou",
  },
];

function ArtistList() {
  return (
    <div className="flex flex-col gap-8">
      {artistListData.map(({ avatar, background, fullName, username }, idx) => (
        <ArtistCard
          key={idx}
          avatar={avatar}
          background={background}
          fullName={fullName}
          username={username}
        />
      ))}
    </div>
  );
}

export default ArtistList;
