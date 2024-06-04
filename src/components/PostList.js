import React from "react";
import Post from "./Post";

import Avatar1 from "../images/avatars/avatar-1/1x.png";
import Avatar2 from "../images/avatars/2.png";

import PostImage1 from "../images/posts/post-1/2x.jpg"
import PostImage2 from "../images/posts/2.jpg"

const postListData = [
  {
    fullName: "Lara Leones",
    username: "@thewallart",
    avatarImage: Avatar1,
    postImage: PostImage1,
    likesCount: 9800,
    sharesCount: 8600,
    commentsCount: 7400
  },
  {
    fullName: "Thomas J.",
    username: "@thecustomcreater",
    avatarImage: Avatar2,
    postImage: PostImage2,
    likesCount: 2430000,
    sharesCount: 64400,
    commentsCount: 35400
  },
];

function PostList() {
  return (
    <div className="scrollable max-h-[700px] bg-[#F5F5F5] rounded-[10px]">
      {postListData.map(({ fullName, username, avatarImage, postImage, likesCount, commentsCount, sharesCount }, idx) => (
        <Post
          key={idx}
          fullName={fullName}
          username={username}
          avatarImage={avatarImage}
          postImage={postImage}
          likesCountSrv={likesCount}
          commentsCount={commentsCount}
          sharesCount={sharesCount}
        />
      ))}
    </div>
  );
}

export default PostList;
