import React from 'react';

const Container = ({ children }) => {
  return (
    <div style={{ width: '80%', margin: 'auto', minHeight: '100vh' }}>
      {children}
    </div>
  );
};
export default Container;
