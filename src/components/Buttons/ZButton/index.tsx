// import "../OneButtn/style.css";

interface PropsType extends React.DOMAttributes<HTMLButtonElement> {
  className?: string;
  style?: React.CSSProperties;
}

const ZButton = ({ children, className, style, ...props }: PropsType) => {
  return (
    <button className={className} style={style} {...props}>
      {children}
    </button>
  );
};

export default ZButton;
