
import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header'
import FormAdd from './assets/components/FormAdd'
import MainControl from './assets/components/MainControl'


// En base al estado isValid,se decide qué componente renderizar. Si isValid es true, se renderiza MainControl pasando el estado count como una prop.

function App() {
  const [ count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const component = isValid 
   ?    <MainControl count={count}/>
   :    <FormAdd setCount={setCount} setIsValid={setIsValid}/>

  return (
    <div className='App'>
          <Header />
    { component }
    </div>


  )
}

export default App
