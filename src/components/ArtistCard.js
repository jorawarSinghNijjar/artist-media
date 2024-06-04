import React from "react";

function ArtistCard({ background, avatar, fullName, username }) {
  return (
    <div className="rounded-[10px] w-full relative">
      <img src={background} alt="user-bg" className="w-full" />

      <div className="overlay"></div>
      <div className="absolute z-10 bottom-[14px] left-[14px] flex gap-[14px]">
        <div className="relative">
          <img src={avatar} alt="user-avatar" />
          <div className="absolute -top-1 -right-1 rounded-full w-3 h-3 border border-white bg-[#0EC297]"></div>
        </div>

        <div className="flex-1">
          <p className="text-base font-semibold text-left text-white">{fullName}</p>
          <p className="text-xs text-white font-medium text-left">
            {username}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
