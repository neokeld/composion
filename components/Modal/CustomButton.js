import { Button } from '../Button';

export const CustomButton = ({onClick, children}) => (
    <Button
      border="solid 2px"
      borderRadius="6px"
      color="#484d51"
      padding="10px 20px"
      hover={{color: "#003061"}}
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
      onClick={onClick}
    >{children}</Button>
  );
