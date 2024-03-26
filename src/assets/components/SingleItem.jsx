import PropTypes from "prop-types";
import { moneyFormat } from "./herpers.Js";

const SingleItem = ({ price, type, id, eliminarItem, editItem}) => {

  const HandleDelete = (e) => {
    e.preventDefault();
    // se muestra un mensaje de confirmación
    const answer = window.confirm(`Borrar suscripción a${type}`);
    if(answer){
      eliminarItem(id);
    }
  }

    const HandleEdit = e => {
      e.preventDefault();
      editItem(id);
    }

  const urlImage = `../src/images/${type}.png`;

  return ( 
    <div className="single-item">
      <img src={urlImage} alt="Services" />
      <h3>Precio: {moneyFormat(Number(price))}</h3>
      <div className="itemss">      
        <a href="" className="delete" onClick={HandleDelete}>Borrar</a>
      <a href="" className="edit" onClick={HandleEdit}>Editar</a></div>

    </div>
  );
}

SingleItem.propTypes = {
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  eliminarItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

export default SingleItem;