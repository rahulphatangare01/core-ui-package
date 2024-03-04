import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  // Add more props as needed for your specific button requirements
}

const DButton: React.FC<ButtonProps> = ({
  children,
  className,
  style,
  onClick,
  type = "button",
  disabled = false,
  ...rest
}) => {
  return (
    <button
      className={`my-button-class ${className}`}
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default DButton;



// interface PropsType extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

// const ZButton : React.FC<PropsType> = ({...props}) => {
  
//   return (
//     <button {...props}>
//       {props.children}
//     </button>
//   );
// };

// export default ZButton;