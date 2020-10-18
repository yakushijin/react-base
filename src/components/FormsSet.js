//react
import React from "react";

//js拡張
import styled from "styled-components";

//component
import { TextForm } from "./TextForm";
import { CheckForm } from "./CheckForm";
import { SelectForm } from "./SelectForm";

export const FormsSet = ({ props, prop }) => (
  <div>
    <TextForm
      name={"テキストボックス"}
      value={props.TextData}
      onChange={(e) => prop.updateTextBox(e.target.value)}
    />
    <CheckForm
      name={"チェックボックス"}
      value={props.CheckData}
      onChange={(e) => prop.updateCheckBox(e.target.checked)}
    />
  </div>
);
