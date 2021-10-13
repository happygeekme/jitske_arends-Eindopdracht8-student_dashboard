import React from "react";
import { useSelector } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
  VictoryZoomContainer,
  VictoryLegend,
} from "victory";

const Student = ({ match }) => {
  const studenten = useSelector((state) => state.studenten);
  const naam = match.params.studentNaam;
  const student = studenten.find((student) => student.studentNaam === naam);

  const opdrachten = student.opdrachten.map((opdracht) => {
    const naam = opdracht.opdracht;
    const opdrachtNaam =
      naam.length > 6 ? naam.substr(0, naam.indexOf(" ")) : naam;

    return {
      opdracht: opdrachtNaam,
      moeilijk: parseInt(opdracht.moeilijk),
      leuk: parseInt(opdracht.leuk)
    };
  });

  return (
    <div>
       <h3 className="studentName">Opdracht evaluties van {student.studentNaam}</h3>
      <VictoryChart
        domainPadding={{ x: 5 }}
        domain={{ y: [0, 5]}}
        width={1200}
        containerComponent={
          <VictoryZoomContainer 
              zoomDimension="x" 
              allowPan={false} 
          />
        }      
      >
         <VictoryLegend x={60} y={0} 
        title="legenda"
        centerTitle
        orientation="horizontal"
        gutter={30}
        style={{ border: { stroke: "rgb(21, 104, 172" }, title: {fontSize: 20 } }}
        data={[
          { name: "moeilijk", symbol: {fill:  "rgb(73, 151, 216)"}},
          {name: "leuk", symbol: {fill: "rgb(218, 161, 247)"}}
        ]}
      />

        <VictoryGroup offset={5}>
          <VictoryBar
            data={opdrachten}
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
            data={opdrachten}
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
            tickLabelComponent={<VictoryLabel 
                                  angle={40} 
                                  textAnchor="start" 
                                />}
        />

        <VictoryAxis 
            tickFormat={[1, 2, 3, 4, 5]}
            tickValues={[1, 2, 3, 4, 5]}
            dependentAxis 
        />
      
      </VictoryChart>
    </div>

  );
};

export default Student;
