import './App.css'
//import Form from './Form.jsx';
//import TodoList from './TodoList.jsx';
//import {sum} from './helper';
import Lottery from './Lottery.jsx'
function App() {
  let winCondition = (ticket) => {
    return ticket.every((num) => num === ticket[0]);
  };
   return (
    <>
    <Lottery n={3} winCondition={winCondition}/>
</>
  )
}

export default App
