import React from 'react';

const Item = (
  id,
  text,
  completed
) => {
  return (
    <p style={{ textDecoration: completed ? 'line-through' : 'normal' }}>
      {text}
    </p>
  );
};

export {Item};
