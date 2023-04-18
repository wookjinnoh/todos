import React, { useCallback, useRef, useState } from 'react';
// components
import Main from './components/Main';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 3; i++) {
    array.push({
      id: i,
      text: `TEST - ${i}`,
      checked: false,
    });
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(4);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // 함수형 업데이트
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1;
  }, []);
  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  }, []);

  const onRemove = useCallback((id) => {
    // id가 같으면 todos 배열에서 나가고, 다르면 todos 유지, filter는 남기는 것
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

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
