import React from "react";
 
interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
}
 
const ZInput: React.FC<InputProps> = ({
...props
}) => {
  return (
    <input
      {...props}
    ></input>
  );
};
 
export default ZInput;