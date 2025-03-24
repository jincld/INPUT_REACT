import { useState } from 'react'
import './App.css'
import Calculadora from './components/calculadora'
import Todo from './components/todo/todo'
import Registro from './components/registro/registro'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Calculadora/>
    <Todo />
    <br/>
    <Registro />
    </>
  )
}

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
export default App
