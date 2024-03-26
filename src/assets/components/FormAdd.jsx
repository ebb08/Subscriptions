import { useState } from "react";
import PropTypes from "prop-types";

const FormAdd = ({ setCount , setIsValid }) => {

  const [input, setInput] =useState("");
  const [error, setError] =useState(false);
  // Previene el comportamiento por defecto del envío del formulario verificando datos arrojando error si estan vacios 
  const handleForm = e => {
    e.preventDefault();
    if (input === "" || Number(input) < 0) {
      setError(true);
      return;
    }
    setError(false);
    setCount(Number(input));
    setIsValid(true);
  }

  return ( 
    <div className="form-add">
      <form onSubmit={ handleForm }>
        <p>Agregar presupuesto</p>
        <input type="number" placeholder="$50.000" onChange={e => setInput(e.target.value)}></input>
        <input type="submit" value="Agregar"></input>
      </form>
      { error ?       <p className="error">Presupuesto invalido</p> : null }

    </div>
   );
}

FormAdd.propTypes = {
  setCount: PropTypes.func.isRequired,
  setIsValid: PropTypes.func.isRequired
};
 
export default FormAdd;