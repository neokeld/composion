import React from 'react';
import { select } from '@storybook/addon-knobs';
import decorators from '../../.storybook/utils';
import { Button } from './';

import mdx from './Button.mdx';

export default {
  title: 'Components/Button',
  decorators,
  parameters: {
    docs: { 
      page: mdx
    }
  },
};

const colorValues = ["red", "#003061", "rgb(40, 41, 54)"];
const paddingValues = ["8px", "12px", "24px", "32px"];

export const defaultButton = () => {
  return <Button>Default Solid Button</Button>;
};

export const buttonWithProps = () => {
  return (
    <Button
      color={select('color', colorValues, "red")}
      padding={select('padding', paddingValues, '12px')}
    >
      Solid Button
    </Button>
  );
};

export const hoverButtonWithProps = () => {
  return (
    <Button
      color={select('color', colorValues, "red")}
      padding={select('padding', paddingValues, '12px')}
      hover={{color: "white", background: select('color', colorValues, "red")}}
    >
      Solid Button
    </Button>
  );
};

export const advancedButton = () => {
  return (
    <Button
      border="solid 2px"
      borderRadius="6px"
      color="#484d51"
      padding="10px 20px"
      hover={{color: select('hover color', colorValues, "#003061")}}
      after={{
        content: '""',
        display: "block",
        position: "absolute",
        width: "20%",
        height: "20%",
        border: "2px solid",
        borderRadius: "6px",
        bottom: "1px",
        right: "1px",
        borderColor: "#484d51",
      }}
      hoverAfter={{
        borderColor: "#003061",
        width: "100%",
        height: "100%",
      }}
    >
      Solid Button
    </Button>
  );
}