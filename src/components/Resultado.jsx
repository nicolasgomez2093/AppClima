import useClima from "../hooks/useClima";
import Alerta from "./Alerta";

function Resultado() {
  const { resultado, alertaRespuesta } = useClima();
  const { name, main } = resultado;

  const kelvin = 273.15;

  return (
    <div className="contenedor clima">
      {alertaRespuesta ? (<Alerta>{alertaRespuesta}</Alerta>) : (
        <>
          <h2>{name}</h2>
          <p>
            {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
          </p>
          <div className="temp_min_max">
            <p>
              Min: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
            </p>
            <p>
              Max: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
}
export default Resultado;
