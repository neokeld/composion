import styled from '@emotion/styled';

const DividerRoot = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  margin: 20px 0;
`;

const HorizontalDivider = styled.hr`
  background-color: #e1e6ea;
  height: 1px;
  width: 100%;
  border: 0;
`;

const Title = styled.span`
  color: #838c96;
  font-size: 16px;
  font-weight: 700;
`;

export const Divider = ({title}) => <DividerRoot>
    <HorizontalDivider />
    <Title>{title}</Title>
    <HorizontalDivider />
</DividerRoot>;
