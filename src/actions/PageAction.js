//action-rerucer定数
export const USER_DETAIL_DATA_SET = "USER_DETAIL_DATA_SET";
export const SET_TEXT_DATA = "SET_TEXT_DATA";
export const SET_CHECK_DATA = "SET_CHECK_DATA";

//action実装
export const initDataSet = (x) => {
  return {
    type: USER_DETAIL_DATA_SET,
    payload: x,
  };
};

export const updateTextBox = (x) => {
  return {
    type: SET_TEXT_DATA,
    payload: x,
  };
};

export const updateCheckBox = (x) => {
  return {
    type: SET_CHECK_DATA,
    payload: x,
  };
};
