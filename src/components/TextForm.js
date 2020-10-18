import React from 'react';

import styled from 'styled-components'

const TEXTLABEL = styled.div`
margin:0 6px;
font-size:20px;
white-space: nowrap;
`

const TEXTFORM = styled.input.attrs({
  type: 'text',
})`
border-radius:10px;
background: #ccccdd;
border:none;
color:#000033;
`

export const TextForm = ({ name, value, onChange }) => (
  <TEXTLABEL>
    <form>
      <label>
        {name}
          <TEXTFORM defaultValue={value} onBlur={onChange}>
          </TEXTFORM>
      </label>
    </form>
  </TEXTLABEL>
);
