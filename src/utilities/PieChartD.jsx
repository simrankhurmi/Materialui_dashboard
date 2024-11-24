import * as React from 'react';
import { DefaultizedPieValueType } from '@mui/x-charts/models';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const data = [
  { label: 'Group A', value: 400, color: "#4caf50"},
  { label: 'Group B', value: 300, color: "#000059" },
  { label: 'Group C', value: 300, color: "#FFB85D"},
  { label: 'Group D', value: 200, color: "#2E8BC0"},
];

const sizing = {
  margin: { right: 5 },
  width: 400,
  height: 400,
  legend: { hidden: true },
};
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);

const getArcLabel = (params) => {
  const percent = params.value / TOTAL;
  return `${(percent * 100).toFixed(0)}%`;
};

export default function PieChartWithCustomizedLabel() {
  return (
    <PieChart
      series={[
        {
          outerRadius: 150,
          data,
          arcLabel: getArcLabel,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontSize: 14,
        },
        "& .MuiResponsiveChart-container ":{
          width:"100%",
        }
      }}
      {...sizing}
    />
  );
}