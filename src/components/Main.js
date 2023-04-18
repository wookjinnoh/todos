import React from 'react';

// styles
import '../styles/Main.scss';

const Main = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="TodoTemplate-title">예정</div>
      <div className="TodoTemplate-content">{children}</div>
    </div>
  );
};

export default Main;
