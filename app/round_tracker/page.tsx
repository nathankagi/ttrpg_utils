"use client";

import { handleClientScriptLoad } from "next/script";
import { useEffect, useState } from "react";
import { FaBars, FaCog, FaTools } from "react-icons/fa"; // font awesome 5

const Tracker = () => {
  const temp_items = [
    { id: 1, name: "item1" },
    { id: 2, name: "item2" },
    { id: 3, name: "item3" },
    { id: 4, name: "item4" },
    { id: 5, name: "item5" },
  ];
  return (
    <div className="flex flex-row p-4">
      <RoundTracker elements={temp_items}></RoundTracker>
      <ItemList></ItemList>
    </div>
  );
};

const RoundTracker = ({ elements, ...props }) => {
  const [active, setActive] = useState({ id: 0, name: "active" });
  const [items, setItems] = useState(elements);
  const [nextItems, setNextItems] = useState(elements);
  const [rounds, setRounds] = useState(0);

  const handleReset = () => {
    // set to default state
    setItems(
      items.sort((a, b) => {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        return 0;
      })
    );
    setActive(items.at(0));
    setRounds(0);
  };

  const arrayRotate = (arr, reverse) => {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  };

  useEffect(() => {
    setActive(items.at(0));
    setRounds(0);
  }, []);

  useEffect(() => {
    setActive(items.at(0));
    if (items.length === 0) {
      setItems(nextItems);
      setRounds(rounds + 1);
    }
  }, [items]);

  const handleNextItem = () => {
    // change state of round tracker
    // setItems(arrayRotate(items, false));
    setItems(items.slice(1));
  };

  const handleDelayItem = () => {
    const temp_items = items.slice(1);
    temp_items.push(active);
    setItems(temp_items);
  };

  return (
    <div className="w-2/5">
      <div className="mx-4 font-bold text-xl">TRACKER</div>
      <div className="border-black border-2 border-b-4 rounded-lg m-2">
        <div className="flex flex-row">
          <div className="rounded-md flex-grow p-2 m-5 h-24 bg-white border-2 border-b-4 border-black text-black">
            {active ? active.name : "None"}
          </div>
          <div className="rounded-md w-24 p-2 ml-0 m-5 h-24 bg-white border-2 border-b-4 border-black text-black justify-center text-center items-center">
            <div>ROUND</div>
            <div className="w-16 h-16 text-lg justify-center text-center items-center">
              {rounds}
            </div>
          </div>
        </div>
        <div className="flex flex-row h-12 rounded-lg m-5 items-center justify-center bg-gray-200">
          <div
            onClick={handleNextItem}
            className="w-36 h-8 mx-2 bg-white border-2 border-transparent rounded-lg flex justify-center text-center items-center hover:border-black transition-all duration-300 ease-in-out"
          >
            NEXT TURN
          </div>
          <div
            onClick={handleDelayItem}
            className="w-36 h-8 mx-2 bg-white border-2 border-transparent rounded-lg flex justify-center text-center items-center hover:border-black transition-all duration-300 ease-in-out"
          >
            DELAY
          </div>
          <div className="flex-grow"></div>
          <div
            onClick={handleReset}
            className="m-2 w-20 h-8 text-lg border-transparent rounded-lg border-2 flex items-center justify-center bg-white hover:border-black transition-all duration-300 ease-in-out"
          >
            RESET
          </div>
        </div>
        <div className="max-h-80 overflow-auto my-4">
          <div>
            {items.map((item, index) => {
              if (index > 0) {
                return (
                  <RoundTrackerItem key={index} item={item}></RoundTrackerItem>
                );
              }
            })}
          </div>
          <div className="flex mx-5 h-6 border-2 border-black border-b-4 rounded-xl bg-red-900 items-center justify-center">
            {" "}
            === next round ==={" "}
          </div>
          <div>
            {nextItems.map((item, index) => {
              return (
                <RoundTrackerItem key={index} item={item}></RoundTrackerItem>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const RoundTrackerItem = ({ item, ...props }) => {
  return (
    <div className="flex align-middle rounded-md p-2 border-b-4 m-5 h-16 bg-white border-2 border-black text-black hover:bg-gray-200 transition-all">
      {item.name}
    </div>
  );
};

const ItemList = () => {
  return (
    <div className="w-2/5">
      <div className="mx-4 font-bold text-xl">ITEMS</div>
      <div className="border-black border-2 border-b-4 rounded-lg m-2">
        <div className="rounded-md p-2 m-5 h-24 bg-white border-2 border-b-4 border-black text-black">
          MENU
        </div>
        <div className="rounded-md py-2 m-5 h-96 bg-white border-2 border-b-4 border-black text-black">
          <div className="bg-gray-100">item1</div>
          <div className="bg-white">item2</div>
          <div className="bg-gray-100">item3</div>
          <div>item4</div>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
