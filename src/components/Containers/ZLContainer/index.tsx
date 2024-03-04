import React from "react";
 
interface ZLContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    backgroundColor?:string;
    borderRadius?:string;
    marginTop?:string;
    marginLeft?:string;
    width?:string;
    height?:string;
    textAlign?:React.CSSProperties;
    position?:string;
}
 
const ZLContainer: React.FC<ZLContainerProps> = ({
    backgroundColor="#33C8AF",
    borderRadius = "40px",
    marginTop = "40px",
    marginLeft = "40px",
    width = "812px",
    height = "720px",
    textAlign = "center",
    position = "relative",
    ...props
}) => {
  return (
    <div
        style={{
            backgroundColor:backgroundColor,
            borderRadius:borderRadius,
            marginTop:marginTop,
            marginLeft:marginLeft,
            width:width,
            height:height,
        }}
        {...props}
    ></div>
  );
};
 
export default ZLContainer;