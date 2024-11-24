import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
  return (
    <BarChart
      series={[
        { data: [35, 44, 24, 34], color: "#4caf50" }, // Green
        { data: [51, 6, 49, 30], color: "#000059" },  // Blue
        { data: [15, 25, 30, 50], color: "#FFB85D" }, // Red
        { data: [60, 50, 15, 25], color: "#2E8BC0" }, // light blue
      ]}
      height={400}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      // margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}