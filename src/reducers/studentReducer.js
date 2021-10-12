import data from "../data/mock_data.json";
import { v4 as uuidv4 } from "uuid";

const names = data.data.map((data) => data.naam);
const studentNamen = [...new Set(names)];
const studentFilter = (student) =>
  data.data.filter((data) => data.naam === student);
const perStudent = studentNamen.map((student) => studentFilter(student));

const studenten = perStudent.map((student) => {
  const namen = student.map((student) => student.naam);
  const naam = namen[1];
  return {
    studentNaam: naam,
    key: uuidv4(),
    opdrachten: [...student],
  };
});

const initialState = studenten;

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default studentReducer;
