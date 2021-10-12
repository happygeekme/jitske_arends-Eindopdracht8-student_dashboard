import React from "react";
import { useSelector } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
  VictoryZoomContainer,
} from "victory";

const Student = ({ match }) => {
  const studenten = useSelector((state) => state.studenten);
  const naam = match.params.studentNaam;
  const student = studenten.find((student) => student.studentNaam === naam);

  const opdrachtenMoeilijk = student.opdrachten.map((opdracht) => {
    const naam = opdracht.opdracht;
    const opdrachtNaam =
      naam.length > 6 ? naam.substr(0, naam.indexOf(" ")) : naam;

    return {
      opdracht: opdrachtNaam,
      moeilijk: opdracht.moeilijk,
    };
  });

  const opdrachtenLeuk = student.opdrachten.map((opdracht) => {
    const naam = opdracht.opdracht;
    const opdrachtNaam =
      naam.length > 6 ? naam.substr(0, naam.indexOf(" ")) : naam;
    return {
      opdracht: opdrachtNaam,
      leuk: opdracht.leuk,
    };
  });

  return (
    <div>
      <h3 className="studentName">{naam}</h3>
      <VictoryChart
        domain={{ y: [0, 5]}}
        width={1200}
        containerComponent={
          <VictoryZoomContainer zoomDimension="x" allowPan={false} />
        }
      >
        <VictoryGroup offset={5}>
          <VictoryBar
            data={opdrachtenMoeilijk}
            x="opdracht"
            y="moeilijk"
            style={{
              data: {
                fill: "rgb(73, 151, 216)",
              },
            }}
            barRatio={5}
            barWidth={5}
          />
          <VictoryBar
            data={opdrachtenLeuk}
            x="opdracht"
            y="leuk"
            style={{
              data: {
                fill: "rgb(218, 161, 247)",
              },
            }}
            barRatio={5}
            barWidth={5}
          />
        </VictoryGroup>
        <VictoryAxis
          tickLabelComponent={<VictoryLabel angle={40} textAnchor="start" />}
        />

        <VictoryAxis tickFormat={[1, 2, 3, 4, 5]}  dependentAxis />
      </VictoryChart>
    </div>
  );
};

export default Student;
