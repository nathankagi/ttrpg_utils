"use client";

import { useState } from "react";
import { FaBars, FaCog, FaTools } from "react-icons/fa"; // font awesome 5

export default function RoundTracker() {
  let items = ["item1", "item2", "item3", "item4"];

  return (
    <div className=" w-96 border-black border-2 rounded-lg">
      <div className="rounded-md p-2 m-5 h-24 bg-white border-2 border-black text-black"></div>
      <TrackerMenuBar></TrackerMenuBar>
      <div>
        {items.map((item) => {
          return <RoundTrackerItem item={item}></RoundTrackerItem>;
        })}
      </div>
    </div>
  );
}

const RoundTrackerItem = ({ item, ...props }) => {
  return <div className="tracker_item">{item}</div>;
};

const TrackerMenuBar = ({ ...props }) => {
  return <div className="w-fill h-10"></div>;
};
