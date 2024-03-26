import { useState } from "react";
import PropTypes from "prop-types";

const FromAddSubs = ({ setType, setPrice, type, price, setSubs, subs, editId, setEditId, spent, count }) => {
  // para controlar si hay un error en los campos del formulario
  const [error, setError] = useState(false);
  // para controlar si el usuario tiene suficiente presupuesto para agregar la suscripción
  const [errorMoney, setErrorMoney] = useState(false);
  // Previene el comportamiento por defecto del envío del formulario
  const handleSubs = e => {
    e.preventDefault();
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    if (count - spent < Number(price)) {
      setErrorMoney(true);
      return;
    }
    setError(false);
    setErrorMoney(false);

    if (editId != "") {    // Esta condición verifica si editId no está vacío
      setEditId("");       // indica que ya no se está realizando una edición
      const newSubs = subs.map(item => {
        // Se crea newSubs aplicando subs, que contiene las suscripciones actuales
        if (item.id === editId) {
          item.type = type;
          item.price = price;
        }
        return item;
      })
      setSubs(newSubs); // para actualizar el estado de subs con las suscripciones actualizadas


    } else {
      // está vacío, significa que no se está editando una suscripción existente, sino que se está agregando una nueva suscripción
      const data = {
        type: type,
        price: price,
        id: Date.now()
      }
      setSubs([...subs, data]);
    }


  setType("");
  setPrice("");


  }
  return ( 
    <div className="add-subscription">
      <h3>Agregar suscripciones</h3>
      <form onSubmit={ handleSubs }>
        <p>Servicio</p>
        <select onChange={e => setType(e.target.value)} value={type}>
          <option value=""> --Elegir--</option>
          <option value="netflix">Netflix</option>
          <option value="disneyPlus">DisneyPlus</option>
          <option value="hboMax">HBO max</option>
          <option value="starPlus">Star Plus</option>
          <option value="primeVideo">Prime video </option>
          <option value="spotify">Spotify </option>
        </select>
        <p>Cantidad</p>
        <input type="number" placeholder="$15.000" onChange={e => setPrice(e.target.value)} value={price}></input>
        { editId != "" ? <input type="submit" value="Guardar"/> 
                       : <input type="submit" value="Agregar"></input>}
      </form>

      {error ? <p className="error">Campos invalidos</p> : null }
      {errorMoney ? <p className="error">No tienes presupuesto</p> : null }

    </div>
   );
}

FromAddSubs.propTypes = {
  setType: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  setSubs: PropTypes.func.isRequired,
  subs: PropTypes.array.isRequired,
  editId: PropTypes.func.isRequired,
  setEditId: PropTypes.func.isRequired,
  spent: PropTypes.func.isRequired,
  count: PropTypes.func.isRequired,

};
 
export default FromAddSubs;