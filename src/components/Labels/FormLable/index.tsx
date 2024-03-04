
interface FormLableProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>{

}

const FormLable : React.FC<FormLableProps> = ({...props})=>{

    return(
        <span {...props}>{props.children}</span>
    );
}

export default FormLable;