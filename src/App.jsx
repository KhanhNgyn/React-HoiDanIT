import './components/todo/todo.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'

const App = () => {

  const hoidanit = "Eric";
  const age = 21;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  // {key: value}

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <TodoNew />
        <TodoData
          name={hoidanit}
          age={age}
          data={data}
        />
        <div className='todo-img'>
          <img className='logo' src={reactLogo} />
        </div>
      </div >
    </>
  )
}

export default App
