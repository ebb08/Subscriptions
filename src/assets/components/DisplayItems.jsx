import SingleItem from "./SingleItem";
import PropTypes from "prop-types";

const DisplayItems = ({ subs, eliminarItem, editItem }) => {
  return ( 
    <>
    <h2>Suscripciones</h2>
    {
      subs.map(item => (
        <SingleItem 
        key={item.id} 
        id={item.id} 
        price={item.price} 
        type={item.type} 
        eliminarItem= {eliminarItem}
        editItem= {editItem}
        />
      ))
    }
    </>
   );
}

DisplayItems.propTypes = {
  subs: PropTypes.array.isRequired,
  eliminarItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};
 
export default DisplayItems;