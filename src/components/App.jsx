import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  const [list, setList] = useState([
    { title: 'learn React', important: true, done: false, id: '1' },
    { title: 'learn Express', important: true, done: true, id: '2' },
    { title: 'learn Mongo', important: true, done: true, id: '3' },
  ]);

  return (
    <div>
      <TodoForm setList={setList} />
      <hr />
      <TodoList list={list} setList={setList} />
    </div>
  );
};

export default App;
