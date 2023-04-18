import React, { useCallback, useState } from 'react';

// styles
import '../styles/TodoInput.scss';
import { MdAdd } from 'react-icons/md';

const TodoInput = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      e.preventDefault();
      setValue('');
    },
    [onInsert, value],
  );

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form className="TodoInput" onSubmit={onSubmit}>
      <input
        placeholder="일정을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button>
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInput;
