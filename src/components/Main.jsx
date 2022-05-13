import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteMember,
  getMembers,
  memberSelectors,
} from "../features/memberSlice";

const Main = () => {
  const [key, setKey] = useState("");
  const dispatch = useDispatch();
  const members = useSelector(memberSelectors.selectAll);

  useEffect(() => {
    dispatch(getMembers(key));
  }, [dispatch, key]);

  return (
    <div className="container">
      <nav className="level mt-5">
        <div className="level-item">
          <div className="field has-addons">
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="search"
                onChange={(e) => setKey(e.target.value)}
              />
            </p>
          </div>
        </div>
      </nav>
      <Link to="/add" className="button is-link">
        Add Member
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, i) => (
            <tr key={member.id}>
              <td>{i + 1}</td>
              <td>{member.name}</td>
              <td>{member.address}</td>
              <td>{member.gender}</td>
              <td>{member.birth}</td>
              <td>{member.status}</td>
              <td>
                <Link
                  to={`/edit/${member.id}`}
                  className="button is-success is-small"
                >
                  Edit
                </Link>
                <button
                  className="button is-danger is-small"
                  onClick={() => dispatch(deleteMember(member.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
