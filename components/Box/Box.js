import styled from '@emotion/styled';

const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  'space-between': 'space-between',
  'space-around': 'space-around',
  center: 'center',
  'space-evenly': 'space-evenly',
};

const alignMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  baseline: 'baseline',
  stretch: 'stretch',
};

const directionMap = {
  column: 'column',
  row: 'row',
};

const alignItems = ({ align = 'left' }) => alignMap[align];
const direction = ({ direction = 'column' }) => directionMap[direction];
const grow = ({ grow }) => (grow ? 1 : 0);
const justifyContent = ({ justify = 'left' }) => justifyMap[justify];
const wrap = ({ wrap }) => (wrap ? 'wrap' : 'nowrap');

const background = ({background}) => background;
const basis = ({basis}) => basis;
const border = ({border}) => border;
const borderRadius = ({borderRadius}) => borderRadius;
const boxShadow = ({boxShadow}) => boxShadow;
const color = ({color}) => color;
const focus = ({focus}) => focus;
const height = ({height}) => height;
const margin = ({ margin }) => margin;
const padding = ({ padding }) => padding;
const shrink = ({shrink}) => shrink;
const width = ({width}) => width;

export const Box = styled.div`
  align-items: ${alignItems};
  background: ${background};
  border: ${border};
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  color: ${color};
  display: flex;
  height: ${height};
  justify-content: ${justifyContent};
  flex-direction: ${direction};
  flex-grow: ${grow};
  flex-shrink: ${shrink};
  flex-basis: ${basis};
  flex-wrap: ${wrap};
  margin: ${margin};
  padding: ${padding};
  width: ${width};
  &:focus: ${focus};
`;
