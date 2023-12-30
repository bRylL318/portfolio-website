"use client";
import FirebaseConfig from "../FirebaseConfig/FirebaseConfig";
import { ref, set, get, update, remove, child } from "firebase/database";
import { useState } from "react";

function FirebaseCrud() {
  let [username, setUsername] = useState("");
  let [fullname, setFullname] = useState("");
  let [phone, setPhone] = useState("");
  let [dob, setDob] = useState("");

  return (
    <>
      <label>Username</label>
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />

      <label>Full Name</label>
      <input
        type="text"
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
      />
      <br />

      <label>Phone Number</label>
      <input
        type="text"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />

      <label>Date of Birth</label>
      <input
        type="text"
        value={dob}
        onChange={(e) => {
          setDob(e.target.value);
        }}
      />
      <br />

      <button>Insert Data</button>
      <button>Update Data</button>
      <button>Delete Data</button>
      <button>Select Data</button>
    </>
  );
}
export default FirebaseCrud;
