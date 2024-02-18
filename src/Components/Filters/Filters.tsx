import React from 'react';

import { brown } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Filters: React.FC = () => {
  return (
    <aside className="filters main__filters">
      <Checkbox {...label} defaultChecked />
      <Checkbox {...label} defaultChecked color="secondary" />
      <Checkbox {...label} defaultChecked color="success" />
      <Checkbox {...label} defaultChecked color="default" />
      <Checkbox
        {...label}
        defaultChecked
        sx={{
          color: brown[800],
          '&.Mui-checked': {
            color: brown[600],
          },
        }}
      />

    </aside>
  );
};
