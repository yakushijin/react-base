import React from 'react';

import styled from 'styled-components'

const SELECTFORM = styled.div`
margin:0 6px;
color:#00aaaa;
font-size:20px;
`

export const SelectForm = ({ name, value, onChange }) => (
  <SELECTFORM>
  <form >
    <label>
      {name}
      <select value={value} onChange={onChange}>
        <option value="0">0</option>

      </select>
    </label>
  </form>
  </SELECTFORM>
);
