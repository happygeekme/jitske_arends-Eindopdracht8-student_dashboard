import data from "../data/mock_data.json";
import { v4 as uuidv4 } from "uuid";

const opdr = data.data.map((d) => d.opdracht);
const opdrachtNamen = [...new Set(opdr)];
const opdrachtFilter = (opdracht) =>
  data.data.filter((data) => data.opdracht === opdracht);
const perOpdracht = opdrachtNamen.map((opdracht) => opdrachtFilter(opdracht));

const opdrachten = perOpdracht.map((opdracht) => {
  const namen = opdracht.map((opdracht) => opdracht.opdracht);
  const naam = namen[1];

  const moeilijk = opdracht.map((opdracht) => opdracht.moeilijk);
  const totaleScoreMoeilijk = moeilijk.reduce(
    (prev, curr) => parseInt(prev) + parseInt(curr)
  );
  const gemiddeldeScoreMoeilijk = totaleScoreMoeilijk / moeilijk.length;

  const leuk = opdracht.map((opdracht) => opdracht.leuk);
  const totaleScoreLeuk = leuk.reduce(
    (prev, curr) => parseInt(prev) + parseInt(curr)
  );
  const gemiddeldeScoreLeuk = totaleScoreLeuk / leuk.length;
  const opdrachtNaam =
    naam.length > 6 ? naam.substr(0, naam.indexOf(" ")) : naam;

  return {
    ...opdracht,
    opdrachtnaam: opdrachtNaam,
    gemiddeldeScoreMoeilijk: gemiddeldeScoreMoeilijk,
    gemiddeldeScoreLeuk: gemiddeldeScoreLeuk,
    key: uuidv4(),
  };
});

const initialState = opdrachten;

const opdrachtReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default opdrachtReducer;
