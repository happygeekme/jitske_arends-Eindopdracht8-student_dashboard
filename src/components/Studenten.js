import React from "react";
import { useSelector } from "react-redux";

const Studenten = () => {
  const studenten = useSelector((state) => state.studenten);
  console.log(studenten);

  return <div></div>;
};

export default Studenten;
