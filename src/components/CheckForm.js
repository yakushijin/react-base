import React from 'react';

export const CheckForm = ({ name,value, onChange }) => (
  <form >
    {name}
  <input type="checkbox"
    value={value}
    onChange={onChange}>
  </input>
</form>

);
