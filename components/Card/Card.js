import React from 'react';
import styled from '@emotion/styled';
import {
  cardTheme,
  cardTitleTheme
} from './themes';

import { Box } from '../Box';

export const CardRoot = ({theme, children}) => {

  const themeWithBaseTheme = cardTheme(theme);
  return <Box
    background={themeWithBaseTheme.Card_backgroundColor}
    border={`1px solid ${themeWithBaseTheme.Card_borderColor}`}
    borderRadius={themeWithBaseTheme.Card_borderRadius}
    boxShadow = {themeWithBaseTheme.Card_boxShadow}
    padding= {themeWithBaseTheme.Card_padding}
    focus={{
      boxShadow: themeWithBaseTheme.Card_boxShadow_focus
    }}
    width={themeWithBaseTheme.Card_width}
    basis={themeWithBaseTheme.Card_basis}
    margin={themeWithBaseTheme.Card_margin}
  >
    {children}
  </Box>;
};

export const CardAnchor = styled.a`
    width: ${(props) => props.theme.Card_width};
    flex-basis: ${(props) => props.theme.Card_basis};
    margin: ${(props) => props.theme.Card_margin};
    &:hover {
      color: #003061;
      box-shadow: 0 1px 2px #003061;
      border-radius: 6px;
    }
    color: #30363c;
    text-decoration: none;
`;

export const CardRow = ({theme, children}) => {
    //const theme = cardTheme(theme);
    return <Box padding={theme.CardRow_padding}>{children}</Box>;
};

export const CardBody = ({theme, children}) => 
  <Box 
    height={theme.CardBody_height}
    padding={theme.CardRow_padding}
  >
    {children}
  </Box>;

export const CardTitleContent = styled('h3')(({ theme: baseTheme }) => {
  const theme = cardTitleTheme(baseTheme);
  const fontSize = theme.CardTitle_fontSize;
  return {
    color: theme.CardTitle_color,
    flex: theme.CardTitle_flex, // 1 1 auto
    fontSize,
    fontWeight: theme.CardTitle_fontWeight,
    margin: 0,
  };
});

export const Card = ({title, description, theme={}}) => (
    <CardRoot theme={theme}>
        <CardRow theme={theme}>
            {title}
        </CardRow>
        <CardBody theme={theme}>
            {description}
        </CardBody>
    </CardRoot>
);
