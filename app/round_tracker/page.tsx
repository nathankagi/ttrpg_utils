"use client";

import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa"; // font awesome 5

const sortByValue = (a: { value: number }, b: { value: number }) => {
  return b.value - a.value;
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
  const defaultState = elements.sort(sortByValue);
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
          <div className="flex rounded-md flex-grow p-2 m-5 h-24 bg-white border-2 border-b-4 border-black text-black items-center">
            <div className="w-5"></div>
            <div className="w-24 text-xl">{active ? active.name : "None"}</div>
            <div className="w-20 text-xl">{active ? active.value : 0}</div>
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
            onClick={() => {
              const confirmBox = window.confirm(
                "Are you sure? Resetting will restore the tracker to default state."
              );
              if (confirmBox === true) {
                handleReset();
              }
            }}
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
    <div className="flex align-middle bordered-box hover:bg-gray-200 transition-all">
      <div className="flex flex-row w-96">
        <div className="w-20 m-2">{item.name}</div>
        <div className="w-20 m-2">{item.value}</div>
        <div className="flex flex-grow"></div>
        <div className="flex justify-center items-center">
          <FaBars></FaBars>
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ item, selectHandler, ...props }) => {
  const [selected, setSelected] = useState(false);
  var component = item;

  const handleSelected = () => {
    setSelected(!selected);
    component.selected = !selected;
  };

  useEffect(() => {
    selectHandler(component, selected);
  }, [selected]);

  return (
    <div
      onClick={handleSelected}
      className={`flex align-middle bg-${
        component.selected ? "gray-400" : "white"
      } h-16 bordered-box hover:bg-gray-200 transition-all`}
    >
      <div className="flex flex-row">
        <input
          className="m-2 w-24"
          defaultValue={item.name}
          onChange={(e) => {
            component.name = e.target.value;
          }}
        ></input>
        <input
          className="m-2 w-16"
          defaultValue={item.value}
          onChange={(e) => {
            component.value = e.target.value;
          }}
        ></input>
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
    selected: false,
  };

  const [pendingItems, setPendingItems] = useState([]);
  const [listItems, setListItems] = useState([]);
  const [itemKey, setItemKey] = useState(0);

  const handleCreate = () => {
    let temp_item = defaultItem;
    temp_item.id = itemKey;
    setItemKey(itemKey + 1);
    listItems.push(temp_item);
  };

  const handleUpdate = () => {
    updateHandler([...pendingItems]);
    setPendingItems([]);
    listItems.forEach((item) => {
      item.selected = false;
    });
  };

  const handleClear = () => {
    setListItems([]);
    setPendingItems([]);
    setItemKey(0);
  };

  const handlePendingUpdate = function handlePendingUpdate(item, state) {
    if (state) {
      pendingItems.push(item);
    }

    if (!state && pendingItems.length > 0) {
      pendingItems.forEach((each, index) => {
        if (item.id === each.id) {
          pendingItems.splice(index, 1);
        }
      });
    }
  };

  useEffect(() => {}, [listItems]);

  return (
    <div className="w-2/5">
      <div className="mx-4 font-bold text-xl pl-4">ITEMS</div>
      <div className="bordered-box m-2">
        <div className="flex flex-row flex-auto h-20 justify-center items-center bordered-box">
          <div
            className="flex h-12 w-24 bordered-box mx-4 hover:bg-gray-400 items-center justify-center"
            onClick={handleCreate}
          >
            CREATE
          </div>
          <div
            className="flex h-12 w-24 bordered-box mx-4 hover:bg-gray-400 items-center justify-center"
            onClick={handleUpdate}
          >
            UPDATE
          </div>
          <div
            className="flex h-12 w-24 bordered-box mx-4 hover:bg-gray-400 items-center justify-center"
            onClick={() => {
              const confirmBox = window.confirm(
                "Are you sure? Clearing will remove all items."
              );
              if (confirmBox === true) {
                handleClear();
              }
            }}
          >
            CLEAR
          </div>
        </div>
        <div className="max-h-96 overflow-auto mb-5">
          {listItems &&
            listItems.map((item) => {
              return (
                <ListItem
                  item={item}
                  selectHandler={handlePendingUpdate}
                  key={item.id}
                ></ListItem>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const RoundBar = () => {
  return (
    <div className="flex mx-5 h-6 bordered-box bg-gray-400 items-center justify-center"></div>
  );
};

export default Tracker;
