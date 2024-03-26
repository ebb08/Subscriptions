import PropTypes from "prop-types";
import { moneyFormat } from "./herpers.Js";
import { useEffect } from "react";


const Balance = ({ count, subs, spent, setSpent }) => {

  const updateBalance = () => {
    // se utiliza para recalcular el monto total gastado (spent) basándose en la lista de elementos (subs). Utiliza reduce para sumar los precios de todos los elementos en subs
    const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
    setSpent(spent);
  }
  // monto total gastado se actualiza automáticamente cada vez que la lista de elementos cambie
  useEffect(() =>{
    updateBalance();
  }, [subs]);

  return ( 
    <div className="balance">
      <h3>Presupuesto: {moneyFormat(count)}</h3>
      <h3>Disponible: {moneyFormat(count - spent)}</h3>
      <h3>Gastado: {moneyFormat(spent)}</h3>
    </div>
   );
}

Balance.propTypes = {
  count: PropTypes.number.isRequired,
  subs: PropTypes.array.isRequired,
  spent: PropTypes.number.isRequired,
  setSpent: PropTypes.func.isRequired,
};
 
export default Balance;