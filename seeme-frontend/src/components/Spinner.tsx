import { Circles } from "react-loader-spinner";

const Spinner = ({ message }: { message: string }) => {
  return (
    <div>
      <Circles color="#00BFFF" height={50} width={100} />
    </div>
  );
};

export default Spinner;
