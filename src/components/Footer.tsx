import React from 'react';

interface FooterProps {
  todos: number;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({ todos, clearCompleted }) => {
  return (
    <footer>
      <span>{todos} items left</span>
      {todos === 0 ? <span>All Active Completed</span> : null}
      <button onClick={clearCompleted}>Clear Completed</button>
    </footer>
  );
};

export default Footer;
