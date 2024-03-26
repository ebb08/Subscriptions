import Balance from "./Balance"
import DisplayItems from "./DisplayItems";
import FormAddSubs from "./FromAddSubs"
import PropTypes from "prop-types";
import { useState } from "react";


const MainControl = ({ count }) => {
  // estados para almacenar los datos
  const [subs, setSubs] = useState([]);
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState("");
  const [spent, setSpent] = useState(0);
// funciones auxiliares
  const eliminarItem = id => {
    const newList = subs.filter(item =>  item.id != id);
    setSubs(newList);
  }
  const editItem = id => {
    setEditId(id);
    subs.map(item => {
      if (item.id === id) {
        setType(item.type);
        setPrice(item.price);
      }
    }) 
  }

  return ( 
  <>
  {/* pasa las props necesarias a estos componentes para que puedan funcionar correctamente */}
  <div className="main-form">
        <Balance 
        count={count} 
        subs={subs}
        spent={spent}
        setSpent={setSpent}
        />
        <FormAddSubs 
        setType={setType} 
        setPrice={setPrice}
        type={type}
        price={price}
        setSubs={setSubs}
        subs={subs}
        editId={editId}
        setEditId={setEditId}
        spent={spent}
        count={count}
        />
      </div>
      <DisplayItems 
      subs={subs}
      eliminarItem= {eliminarItem}
      editItem= {editItem}
      />
      </>
   );
}

MainControl.propTypes = {
  count: PropTypes.func.isRequired,
};
 
export default MainControl;