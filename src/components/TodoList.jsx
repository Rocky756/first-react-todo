const TodoList = ({ list, setList }) => {
  const doneHandler = (id) => {
    setList((pre) =>
      pre.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, done: !todoItem.done } : todoItem
      )
    );
  };

  const importantHandler = (id) => {
    setList((pre) =>
      pre.map((item) =>
        item.id === id ? { ...item, important: !item.important } : item
      )
    );
  };

  const doneStyle = {
    textDecoration: 'line-through',
    backgroundColor: 'lightgray',
  };

  const deleteHandler = (id) => {
    setList((pre) => pre.filter((item) => item.id !== id));
  };

  return (
    <>
      <ol>
        {list.map(({ title, id, important, done }) => (
          <li key={id}>
            <input
              type="checkbox"
              checked={important}
              onChange={() => importantHandler(id)}
            />
            <span
              style={done ? doneStyle : null}
              onClick={() => doneHandler(id)}
            >
              {title}
            </span>
            <button onClick={() => deleteHandler(id)}>DELETE</button>
          </li>
        ))}
      </ol>
      <hr />
      <pre>{JSON.stringify(list,null,2)}</pre>
    </>
  );
};

// { title: inputValue, important, done: false, id: nanoid(10) },

export default TodoList;
