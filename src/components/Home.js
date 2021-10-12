import React from "react";
import { useSelector } from "react-redux";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
  VictoryGroup,
  VictoryZoomContainer,
} from "victory";

const Overzicht = () => {
  const data = useSelector((state) => state.data);
  const opdrachten = useSelector((state) => state.opdrachten);
  const studenten = useSelector((state) => state.studenten);
  console.log(data);
  console.log(opdrachten);
  console.log(studenten);

  return (
    <div>
      <VictoryChart
        domainPadding={{ x: 5 }}
        width={1200}
        containerComponent={
          <VictoryZoomContainer zoomDimension="x" allowPan={false} />
        }
      >
        <VictoryGroup offset={5}>
          <VictoryBar
            data={opdrachten}
            x="opdrachtnaam"
            y="gemiddeldeScoreMoeilijk"
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
            x="opdrachtnaam"
            y="gemiddeldeScoreLeuk"
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

        <VictoryAxis tickFormat={[1, 2, 3, 4, 5]} dependentAxis />
      </VictoryChart>
    </div>
  );
};

export default Overzicht;
