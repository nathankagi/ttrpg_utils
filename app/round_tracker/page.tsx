"use client";

import { useEffect, useState } from "react";
import { FaBars, FaCog, FaTools } from "react-icons/fa"; // font awesome 5

const sortByValue = (a: { value: number }, b: { value: number }) => {
  if (a.value > b.value) return -1;
  if (a.value < b.value) return 1;
  return 0;
};

const Tracker = () => {
  const [elements, setElements] = useState([]);

  const updateHandler = function updateHandler(items) {
    setElements(items);
  };

  useEffect(() => {}, [elements]);

  return (
    <div className="flex flex-row p-4">
      <RoundTracker elements={elements}></RoundTracker>
      <ItemList updateHandler={updateHandler}></ItemList>
    </div>
  );
};

const RoundTracker = ({ elements, ...props }) => {
  const [active, setActive] = useState({
    id: 0,
    name: "... loading",
    value: 0,
  });
  const defaultState = elements;
  const [items, setItems] = useState([]);
  const [nextItems, setNextItems] = useState([]);
  const [rounds, setRounds] = useState(0);

  const arrayRotate = (arr: any[], reverse: boolean) => {
    if (reverse) arr.unshift(arr.pop());
    else arr.push(arr.shift());
    return arr;
  };

  const handleReset = () => {
    if (defaultState) {
      setItems(defaultState.sort(sortByValue));
      setNextItems(defaultState);
      setActive(items.at(0));
      setRounds(0);
    }
  };

  const handleNextItem = () => {
    setItems(items.slice(1));
  };

  const handleDelayItem = () => {
    const temp_items = items.slice(1);
    temp_items.push(active);
    setItems(temp_items);
  };

  useEffect(() => {
    handleReset();
  }, [defaultState]);

  useEffect(() => {
    if (defaultState) {
      setActive(items.at(0));
      if (items && items.length === 0) {
        setItems(nextItems);
        setNextItems(defaultState);
        setRounds(rounds + 1);
      }
    }
  }, [items]);

  return (
    <div className="w-2/5">
      <div className="mx-4 font-bold text-xl pl-4">TRACKER</div>
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
            {defaultState &&
              items &&
              items.map((item, index) => {
                if (index > 0) {
                  return (
                    defaultState && (
                      <RoundTrackerItem
                        key={index}
                        item={item}
                      ></RoundTrackerItem>
                    )
                  );
                }
              })}
          </div>
          <RoundBar></RoundBar>
          <div>
            {defaultState &&
              nextItems &&
              nextItems.map((item, index) => {
                return (
                  defaultState && (
                    <RoundTrackerItem
                      key={index}
                      item={item}
                    ></RoundTrackerItem>
                  )
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
      <div className="flex flex-row">
        <div className="m-2">{item.name}</div>
        <div className="m-2">{item.value}</div>
      </div>
    </div>
  );
};

const ListItem = ({ item, ...props }) => {
  return (
    <div className="flex align-middle rounded-md p-2 border-b-4 m-5 h-16 bg-white border-2 border-black text-black hover:bg-gray-200 transition-all">
      <div className="flex flex-row">
        <input className="m-2 w-24" defaultValue={item.name}></input>
        <input className="m-2 w-16" defaultValue={item.value}></input>
      </div>
    </div>
  );
};

const ItemList = ({ updateHandler, ...props }) => {
  const defaultItem = {
    id: null,
    name: "Name",
    value: 0,
    other: 0,
  };
  const [listItems, setListItems] = useState([]);
  const [itemKey, setItemKey] = useState(0);

  const handleCreate = () => {
    let temp_item = defaultItem;
    temp_item.id = itemKey;
    setItemKey(itemKey + 1);
    listItems.push(temp_item);
  };

  const handleUpdate = () => {
    updateHandler([...listItems]);
  };

  const handleClear = () => {
    setListItems([]);
    setItemKey(0);
  };

  useEffect(() => {}, [listItems]);

  return (
    <div className="w-2/5">
      <div className="mx-4 font-bold text-xl pl-4">ITEMS</div>
      <div className="border-black border-2 border-b-4 rounded-lg m-2">
        <div className="flex flex-row flex-auto rounded-md p-2 m-5 h-20 justify-center items-center bg-white border-2 border-b-4 border-black text-black">
          <div
            className="flex h-12 w-24 bg-white border-2 border-b-4 border-black rounded-lg mx-4 hover:bg-gray-400 items-center justify-center"
            onClick={handleCreate}
          >
            CREATE
          </div>
          <div
            className="flex h-12 w-24 bg-white border-2 border-b-4 border-black rounded-lg mx-4 hover:bg-gray-400 items-center justify-center"
            onClick={handleUpdate}
          >
            UPDATE
          </div>
          <div
            className="flex h-12 w-24 bg-white border-2 border-b-4 border-black rounded-lg mx-4 hover:bg-gray-400 items-center justify-center"
            onClick={handleClear}
          >
            CLEAR
          </div>
        </div>
        <div className="max-h-96 overflow-auto mb-5">
          {listItems &&
            listItems.map((item) => {
              return <ListItem item={item} key={item.id}></ListItem>;
            })}
        </div>
      </div>
    </div>
  );
};

const RoundBar = () => {
  return (
    <div className="flex mx-5 h-6 border-2 border-black border-b-4 rounded-md bg-gray-400 items-center justify-center"></div>
  );
};

export default Tracker;
