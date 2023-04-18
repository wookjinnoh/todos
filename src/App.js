import React, { useCallback, useRef, useState } from 'react';
// components
import Main from './components/Main';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'test1',
      checked: true,
    },
    {
      id: 2,
      text: 'test2',
      checked: false,
    },
  ]);

  const nextId = useRef(3);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      // id가 같으면 todos 배열에서 나가고, 다르면 todos 유지, filter는 남기는 것
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  return (
    <div className="App">
      <Main>
        <TodoInput onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </Main>
    </div>
  );
}

export default App;
