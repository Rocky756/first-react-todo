import { useState } from 'react';
import { nanoid } from 'nanoid';

const TodoForm = ({ setList }) => {
  const [inputValue, setInputValue] = useState('');
  const [important, setImportant] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
    setList((pre) => [
      ...pre,
      { title: inputValue, important, done: false, id: nanoid(10) },
    ]);
    setInputValue('');
    setImportant(false);
  };

  return (
    <div>
      <div>{JSON.stringify(important)}</div>
      <form className="formStyle" onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          placeholder="todo text"
          onChange={({ target }) => setInputValue(target.value)}
          value={inputValue}
        />
        <label>
          important
          <input
            type="checkbox"
            name="important"
            checked={important}
            onChange={() => setImportant((pre) => !pre)}
          />
        </label>
        <button>ADD</button>
      </form>
    </div>
  );
};

export default TodoForm;
