import React from 'react';

const Hello = () => {
  const [value, setValue] = React.useState<string>('');
  return (
    <div>
      <input
        type="text"
        value={value} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
      />
    </div>
  )
};

export default Hello;