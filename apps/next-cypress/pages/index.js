import React from 'react';

const Hello = () => {
  const [value, setValue] = React.useState('')
  return (
    <div>
      <input
        type="text"
        value={value} 
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
};

export default Hello;
