"use client";

import { useState } from "react";
import { FaBars, FaCog, FaTools } from "react-icons/fa"; // font awesome 5

const Tracker = () => {
  return (
    <div className="flex flex-row p-4">
      <RoundTracker></RoundTracker>
      <ItemList></ItemList>
    </div>
  );
};

const RoundTracker = ({ ...props }) => {
  let [active, setActive] = useState("");
  //   let [items, setItems] = useState([]);

  let items = ["item1", "item2", "item3", "item4", "item5"];

  return (
    <div className="w-2/5 border-black border-2 border-b-4 rounded-lg m-2">
      <div className="rounded-md p-2 m-5 h-24 bg-white border-2 border-b-4 border-black text-black"></div>
      <TrackerMenuBar></TrackerMenuBar>
      <div className="max-h-96 overflow-auto my-4">
        {items.map((item) => {
          return <RoundTrackerItem item={item}></RoundTrackerItem>;
        })}
      </div>
    </div>
  );
};

const RoundTrackerItem = ({ item, ...props }) => {
  return (
    <div className="flex align-middle rounded-md p-2 border-b-4 m-5 h-16 bg-white border-2 border-black text-black hover:bg-gray-200 transition-all">
      {item}
    </div>
  );
};

const TrackerMenuBar = ({ ...props }) => {
  const handleReset = () => {
    // set to default state
  };

  const handleNextItem = () => {
    // change state of round tracker
  };

  return (
    <div className="flex flex-row h-12 rounded-lg m-5 items-center justify-center bg-gray-200">
      <div
        onClick={handleNextItem}
        className="w-36 h-8 mx-2 bg-white border-2 border-transparent rounded-lg flex justify-center text-center items-center hover:border-black transition-all duration-300 ease-in-out"
      >
        NEXT TURN
      </div>
      <div className="flex-grow"></div>
      <div className="m-2 w-8 h-8 text-lg border-transparent rounded-lg border-2 flex items-center justify-center bg-white hover:border-black transition-all duration-300 ease-in-out">
        <FaCog></FaCog>
      </div>
    </div>
  );
};

const ItemList = () => {
  return (
    <div className="w-2/5 border-black border-2 border-b-4 rounded-lg m-2">
      <div className="rounded-md p-2 m-5 h-24 bg-white border-2 border-b-4 border-black text-black">
        MENU
      </div>
      <div className="rounded-md p-2 m-5 h-3/4 bg-white border-2 border-b-4 border-black text-black"></div>
    </div>
  );
};

export default Tracker;
