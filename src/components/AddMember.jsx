import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMember } from "../features/memberSlice";
import { useNavigate } from "react-router-dom";

const AddMember = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Laki-laki");
  const [birth, setBirth] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("active");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const add = async (e) => {
    e.preventDefault();
    await dispatch(addMember({ name, gender, birth, address, status }));
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={add}>
        <div className="field">
          <div className="label">Name</div>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="type your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="label">Gender</div>
          <div className="control">
            <div className="select">
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </select>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="label">Birth</div>
          <div className="control">
            <input
              className="input"
              type="date"
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="label">Address</div>
          <div className="control">
            <textarea
              className="textarea"
              placeholder="type your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <label className="radio">
              <input
                type="radio"
                name="active"
                value="active"
                onChange={(e) => setStatus(e.target.value)}
                checked={status === "active"}
              />
              Active
            </label>
            <label className="radio">
              <input
                type="radio"
                name="inactive"
                value="inactive"
                onChange={(e) => setStatus(e.target.value)}
                checked={status === "inactive"}
              />
              Inactive
            </label>
          </div>
        </div>
        <button className="button is-link" type="submit">
          Add Member
        </button>
      </form>
    </div>
  );
};

export default AddMember;
