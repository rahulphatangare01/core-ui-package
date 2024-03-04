import React from "react";
 
interface ImgProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
}
 
const ZImg: React.FC<ImgProps> = ({
...props
}) => {
  return (
    <img
        {...props}
    ></img>
  );
}; 
 
export default ZImg;