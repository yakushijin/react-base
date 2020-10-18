//action取込
import * as pageAction from "../actions/PageAction";

//データセット
const initData = {
  TextData: "",
  CheckData: "",
};
const initDataSet = [initData];

//reducer実装
const stateData = (state = initDataSet, action) => {
  switch (action.type) {
    case pageAction.USER_DETAIL_DATA_SET:

      let stateData3 = [...state];
      stateData3 = action.payload;

      return stateData3;

    case pageAction.SET_TEXT_DATA:
      let stateData1 = state;
      stateData1.TextData = action.payload;

      return stateData1;

    case pageAction.SET_CHECK_DATA:
      let stateData2 = state;
      stateData2.CheckData = action.payload;

      return stateData2;

    default:
      return state;
  }
};

export default stateData;
