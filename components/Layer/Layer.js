import styled from '@emotion/styled';

export const Layer = styled.aside`
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overscroll-behavior: contain;
  transform: translateZ(0);
  z-index: ${props => props.zIndex};
`;
