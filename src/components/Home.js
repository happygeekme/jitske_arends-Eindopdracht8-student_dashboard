import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryGroup,
  VictoryZoomContainer,
  VictoryLegend
} from "victory";

const Overzicht = () => {

  const opdrachten = useSelector((state) => state.opdrachten)
  console.log(opdrachten)
  const [studenten, setStudenten] = useState(useSelector((state)=> state.studenten))
  
  const [externalMutations, setExternalMutations] = useState(undefined)


const removeMutation = () => {
  setExternalMutations([
    {externalMutations: undefined}
  ]);
}

const checkChecked = (event) => {
  
  const checkbox = event.target
  if (checkbox.checked){
    setExternalMutations( [
      {
        childName: event.target.value,
        target: ["data"],
        eventKey: "all",
        mutation: () => event.target.value === "moeilijk" 
                        ? ({ style: { opacity: 1, fill: "rgb(73, 151, 216)"  } })
                        : ({ style: { opacity: 1, fill: "rgb(218, 161, 247)" } }),
        callback: removeMutation
      }
    ]);
  } else {
    setExternalMutations( [
      {
        childName: event.target.value,
        target: ["data"],
        eventKey: "all",
        mutation: () => ({ style: { opacity: 0  } }),
        callback: removeMutation
      }
    ]);
  }
}


  return (
    <div>
      <div className="chart">
       <h3 className="studentName">Overzicht van alle opdrachten</h3>
      <VictoryChart
        // externalEventMutations={externalMutations}
        domainPadding={{ x: 5 }}
        domain={{ y: [0, 5]}}
        width={1200}
        containerComponent={
          <VictoryZoomContainer 
              zoomDimension="x" 
              allowPan={false} 

          />
        }     
        externalEventMutations={externalMutations}
      >
         <VictoryLegend x={60} y={0} 
        title="legenda"
        centerTitle
        orientation="horizontal"
        gutter={30}
        style={{ border: { stroke: "rgb(21, 104, 172" }, title: {fontSize: 20 }}}
        data={[
          { name: "moeilijk", symbol: {fill:  "rgb(73, 151, 216)"}},
          {name: "leuk", symbol: {fill: "rgb(218, 161, 247)"}}
        ]}
      />

        <VictoryGroup offset={5}>
          <VictoryBar
            name="moeilijk"
            data={opdrachten}
            x="opdrachtnaam"
            y="gemiddeldeScoreMoeilijk"
            style={{
              data: {
                fill: "rgb(73, 151, 216)",
                fillOpacity: 1
              },
            }}
            barRatio={5}
            barWidth={5}
          />
          <VictoryBar
            name="leuk"
            data={opdrachten}
            x="opdrachtnaam"
            y="gemiddeldeScoreLeuk"
            style={{
              data: {
                fill: "rgb(218, 161, 247)",
                fillOpacity: 1
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

      <div className="form">
        <input 
            type="checkbox" 
            onClick={checkChecked}
            value="moeilijk"
        />
          Laat de gemiddelde scores moeilijk zien
        <br/>
        <input 
            type="checkbox" 
            onClick={checkChecked}
            value="leuk"
        />
          Laat de gemiddelde scores leuk zien
       
      </div>
    </div>
  );
};

export default Overzicht;
