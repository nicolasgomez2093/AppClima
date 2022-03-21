import Formulario from "./Formulario";
import Resultado from "./Resultado";
import Spinner from "./Spinner";
import useClima from "../hooks/useClima";

function AppClima() {
  const { resultado, cargando } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? <Spinner /> : resultado?.name && (<Resultado />) }
      </main>
    </>
  );
}
export default AppClima;
