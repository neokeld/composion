import React from 'react';
import { select } from '@storybook/addon-knobs';
import styled from '@emotion/styled';

import decorators from '../../.storybook/utils';
import { Box } from './';

export default {
  title: 'Components/Box',
  decorators,
};

const colorValues = ["#eaeaea", "#ea00ea", "#00eaea"];
const paddingValues = ["8px", "16px", "24px", "32px"];

const Container = styled.div`
  max-width: 480px;
`;

export const boxWithBackground = () => {
  return (
    <Box background={select('background', colorValues, "#eaeaea")}>
      Simple Box Component
    </Box>
  );
};

export const boxWithPadding = () => {
  return (
    <Box
      background={select('background', colorValues, "#eaeaea")}
      padding={select('padding', paddingValues, '16px')}
    >
      Simple Box Component
    </Box>
  );
};

export const boxWithChildren = () => {
  return (
    <Container>
      <Box
        direction="row"
        border="12px solid #003061"
        padding={select('padding', paddingValues, '24px')}
      >
        <Box padding="12px" background="rgb(119, 119, 119)" />
        <Box padding="24px" background="rgb(237, 237, 237)" />
      </Box>
    </Container>
  );
};
