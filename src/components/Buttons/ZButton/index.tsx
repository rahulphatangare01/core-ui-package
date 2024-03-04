interface PropsType extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

const ZButton : React.FC<PropsType> = ({...props}) => {
  
  return (
    <button {...props}>
      {props.children}
    </button>
  );
};

export default ZButton;