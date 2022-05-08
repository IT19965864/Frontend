import React from "react";
import { useEffect, useState } from "react";
import _ from "lodash";
import { Label, Search } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import teacherService from "../adapters/TeacherService";

const SearchBar = () => {
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");
  const badAllUsers = useSelector((state) => state.searchReducer.users);
  const currentUser = useSelector((state) => state.userReducer.user);
  const users = _.reject(badAllUsers, currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(teacherService.getAllTeachers());
  }, []);

  const handleSearchChange = (e) => {
    let value = e.target.value;
    setValue(value);
    const re = new RegExp(_.escapeRegExp(value), "i");
    const isMatch = (result) => re.test(result.teacherName);
    setResults(_.filter(users, isMatch));
  };
  const resultRenderer = ({ teacherName }) => (
    <Label as={Link} to={`/user/${teacherName}`} content={teacherName} />
  );
  return (
    <Search
      onSearchChange={handleSearchChange}
      noResultsMessage="No users found."
      resultRenderer={resultRenderer}
      results={results}
      value={value}
    />
  );
};
export default SearchBar;
