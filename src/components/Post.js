import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import MoreIcon from "../images/icons/more.png";

import CommentIcon from "../images/icons/comment/comment.jpg";
import HeartBlackIcon from "../images/icons/heart-black.svg";
import HeartRedIcon from "../images/icons/heart-red.svg";
import HeartWhiteIcon from "../images/icons/heart-white.svg";
import ShareIcon from "../images/icons/share/share.jpg";

const shortenCount = (count) => {
  if (count >= 1000 && count < 1000000) {
    return (count / 1000).toFixed(1) + "k";
  } else if (count >= 1000000) {
    return (count / 1000000).toFixed(1) + "M";
  }
};

function Post({
  fullName,
  username,
  avatarImage,
  postImage,
  likesCountSrv,
  commentsCount,
  sharesCount,
}) {
  const [likesCount, setLikesCount] = useState(likesCountSrv);
  const [liked, setLiked] = useState(false);

  console.log(likesCountSrv);
  const toggleLike = () => {
    if (!liked) {
      // send increment like request to api, then
      setLikesCount(likesCount + 1);
      setLiked(true);
    } else {
      // send decrement like request to api, then
      setLikesCount(likesCount - 1);
      setLiked(false);
    }
  };

  return (
    <div className="p-[30px] flex flex-col justify-start gap-[30px] bg-white mb-8 rounded-[10px]">
      <div className="flex justify-start items-center gap-[14px]">
        <img src={avatarImage} alt={""} />
        <div className="flex-1">
          <p className="text-xl font-semibold text-left">{fullName}</p>
          <p className="text-sm text-[#8D8D8D] font-semibold text-left">
            {username}
          </p>
        </div>
        <img src={MoreIcon} alt="" className="h-6 cursor-pointer" />
      </div>

      <p className="text-sm font-medium text-left">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.{" "}
        <span>
          <NavLink to="/dashboard" className="text-[#FF5E8A]">
            Read More{" "}
          </NavLink>
        </span>
      </p>

      <div className="max-w-[560px] min-w-[320px] rounded-[10px] relative">
        <img src={postImage} alt={""} className="max-w-full rounded-[10px]" />
        <button onClick={toggleLike}>
          <img
            src={liked ? HeartRedIcon : HeartWhiteIcon}
            alt=""
            className="text-white absolute z-10 top-6 right-6 max-w-[24px]"
          />
        </button>
      </div>

      <hr />

      <div className="flex gap-5">
        <div className="flex items-center gap-3">
          <button className="h-[22px]" onClick={toggleLike}>
            <img src={liked ? HeartRedIcon : HeartBlackIcon} alt={""} className="max-w-[24px]" />
          </button>
          <span className="text-xl font-semibold">
            {shortenCount(likesCount)}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-[22px]">
            <img src={CommentIcon} alt={""} />
          </button>
          <span className="text-xl font-semibold">
            {shortenCount(commentsCount)}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-[22px]">
            <img src={ShareIcon} alt={""} />
          </button>
          <span className="text-xl font-semibold">
            {shortenCount(sharesCount)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
