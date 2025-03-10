import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  let [name1, setname1] = useState("");
  let [name2, setname2] = useState("");
  let [calbtn, setcalbtn] = useState(false);
  let [status, setStatus] = useState("");

  let rel_status = [
    "Siblings",
    "Friends",
    "Love",
    "Affection",
    "Marriage",
    "Enemy",
  ];

  function handleClick(e) {
    e.preventDefault();
    setcalbtn(true);
    let temp1 = name1;
    let temp2 = name2;

    for (let t1 in temp1) {
      for (let t2 in temp2) {
        if (temp1[t1] === temp2[t2]) {
          temp1 = temp1.replace(temp1[t1], "");
          temp2 = temp2.replace(temp2[t2], "");
        }
      }
    }
    console.log(temp1);
    console.log(temp2);
    let l1 = temp1.length;
    let l2 = temp2.length;
    let l3 = l1 + l2;
    if (l3 % 6 == 0) {
      setStatus(rel_status[0]);
    }
    if (l3 % 6 == 1) {
      setStatus(rel_status[1]);
    }
    if (l3 % 6 == 2) {
      setStatus(rel_status[2]);
    }
    if (l3 % 6 == 3) {
      setStatus(rel_status[3]);
    }
    if (l3 % 6 == 4) {
      setStatus(rel_status[4]);
    }
    if (l3 % 6 == 5) {
      setStatus(rel_status[5]);
    } else {
      setStatus("Please Enter valid input");
    }

    console.log(l3);
    console.log(status);
  }
  function handleClear() {
    setStatus("");
    setname1("");
    setname2("");
  }
  return (
    <div id="main">
      {/* Do not remove the main div */}
      <form>
        <input
          type="text"
          data-testid="input1"
          value={name1}
          name="name1"
          onChange={(e) => {
            setname1(e.target.value);
            setcalbtn(false);
            setStatus("");
          }}
        ></input>
        <input
          type="text"
          data-testid="input2"
          name="name2"
          value={name2}
          onChange={(e) => {
            setname2(e.target.value);
            setcalbtn(false);
            setStatus("");
          }}
        ></input>
        <button
          data-testid="calculate_relationship"
          name="calculate_relationship"
          onClick={handleClick}
        >
          Calculate Relationship Future
        </button>
        <button data-testid="clear" name="clear" onClick={handleClear}>
          Clear
        </button>
      </form>
      {calbtn && <h3 data-testid="answer">{status}</h3>}
    </div>
  );
};

export default App;
