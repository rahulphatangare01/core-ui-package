import { Button } from "@fluentui/react-components";
// import type { ButtonProps } from "@fluentui/react-components";
import { makeStyles, shorthands } from "@fluentui/react-components";

const ZconfirmButtonStyle = makeStyles({
  root: {
    marginTop: "40px",
    marginLeft: "300px",
    backgroundColor: "black",
    color: "white",
    ...shorthands.borderRadius("10px !important"),
  },
});
// type Props = {
//   text: string;
// };

// const ZButton: React.FC<Props> = ({ text }) => {
//   return <button> {text} </button>;
// };

// export default ZButton;

// const button = (props: ButtonProps) => <Button {...props}></Button>;

const ZButton = ({ children }: { children: string }) => {
  const style = ZconfirmButtonStyle();

  return <Button className={style.root}> {children} </Button>;
};

export default ZButton;
