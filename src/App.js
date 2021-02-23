import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App m-5">
      <h3 className="title-app">What's the plan for today ?</h3>
     <TodoInput />
     <TodoList />
    </div>
  );
}

export default App;
