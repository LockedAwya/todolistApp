import * as React from 'react';
import { styled } from '@mui/material/styles';

export function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));