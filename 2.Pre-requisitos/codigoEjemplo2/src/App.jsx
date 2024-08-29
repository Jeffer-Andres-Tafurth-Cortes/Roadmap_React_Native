import { useState } from "react";

// El componente 'App' es el encargado de renderizar los demas componentes a mostrar en pantalla
// 'App' es un componente
function App() {

  // El hook 'useState' es un hook de estado basico en React
  const [text, setText] = useState('Hola Mundo!')

  const handleState = () => {
    // Este es un ejemplo de como cambiar el estado
    setText('Hola React!')
  }

  return (
    <>
      {/** Aqui estamos accediento al estado inicial */}
      <div>{text}</div>

      {/** Agregandole un 'Button' y el evento 'onClick' hacemos que se actualice dicho estado (el estado cambia)*/}
      <button onClick={handleState}>Actualizar Estado</button>
    </>
  )
}

export default App
