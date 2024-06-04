import React from "react";
import "./dashboard.css";
import SearchBox from "./SearchBox";
import Sidebar from "./Sidebar";
import Post from "./Post";
import PostList from "./PostList";
import UserList from "./UserList";
import HorizontalList from "./HorizontalList";

function Dashboard() {
  return (
    <div className="board pt-10">
      <div className="container mx-auto">
        <div
          className="grid grid-cols-12 gap-[30px] *:rounded-[10px]"
          id="grid"
        >
          <div className="col-start-1 col-span-3 item-1 px-9 py-5 bg-white">
            <h5 className="logo-text">Logo</h5>
          </div>

          <div className="col-start-4 col-span-6 item-2 p-[30px] bg-white">
            <SearchBox />
          </div>
          <div className="col-end-13 col-span-3 item-3">
            <button className="btn-primary w-full h-full rounded-[10px] text-white font-semibold text-base">Become a Seller</button>
          </div>
          <div className="col-start-1 col-span-3 item-4 ">
            <Sidebar />
          </div>
          <div className="col-start-4 col-span-6 item-5 max-h-full rounded-[10px]">
            <PostList className="mb-8" />
            <HorizontalList />
          </div>
          <div className="col-end-13 col-span-3 item-6 relative">
            <UserList />
          </div>
        </div>

        
      </div>
    </div>
  );
}

export default Dashboard;
