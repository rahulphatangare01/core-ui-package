interface AnchorProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{

}

const ZAnchor : React.FC<AnchorProps> = ({...props}) =>{

    return(<a {...props}>{props.children}</a>);
}

export default ZAnchor;