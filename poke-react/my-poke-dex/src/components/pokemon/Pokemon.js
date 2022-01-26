import { useParams } from "react-router-dom";

const Pokemon = () => {
  /* const props = useParams(); */
  const {name} = useParams();
  console.log(name);
  return (
    <div>
      <h5>Aquí va la información de { name }</h5>
    </div>
  );
};

export default Pokemon;
