import styled from '@emotion/styled';

export const Button = styled.button`
  background: ${props => props.background ? props.background : 'transparent' };
  border: ${props => props.border ? props.border : '1px solid'};
  borderRadius: ${props => props.borderRadius};
  boxShadow: ${props => props.boxShadow};
  color: ${props => props.color};
  cursor: 'pointer';
  fontFamily: ${props => props.fontFamily};
  fontSize: ${props => props.fontSize};
  fontWeight: ${(fontWeight = 500) => fontWeight};
  opacity: ${props => props.disabled && 0.7};
  outline: none;
  padding: ${props => props.padding};
  position: relative;
  transition: 'all 0.3s linear';
  &:hover { ${props => !props.disabled && props.hover} }
  &::after { ${props => props.after} }
  &:hover::after { ${props => props.hoverAfter} }
  &::before { ${props => props.before} }
  &:hover::before { ${props => props.hoverBefore} }
`;
