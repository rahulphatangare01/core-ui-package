type Props = {
  text: string;
};

const ZInput: React.FC<Props> = ({ text }) => {
  // return <input />;
  return <h1> {text}</h1>;
};

export default ZInput;
