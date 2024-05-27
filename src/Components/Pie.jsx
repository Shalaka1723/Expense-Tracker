import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { padding } from '@mui/system';
import { Padding } from '@mui/icons-material';

const data = [
  { value: 5, label: 'Food' },
  { value: 10, label: 'Bills' },
  { value: 15, label: 'Travels' },
  { value: 20, label: 'Shopping' },
];

const size = {
  width: 500,
  height: 300,
};

export default function PieArcLabel() {
  return (
    <PieChart
    series={[
      {
        arcLabel: (item) => `${item.label} (${item.value})`,
        arcLabelMinAngle: 45,
        data,
      },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
      />

    );
}
