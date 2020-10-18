//react
import React from "react";

//js拡張
import { connect } from "react-redux";
import styled from "styled-components";

//Action
import * as pageAction from "../actions/PageAction";

//component
import { FormsSet } from "../components/FormsSet";

//server
import pageServer from "../server/PageServer";

//ダミーデータ。ajaxで連携するデータ想定
const initData = {
  TextData: "test",
  CheckData: true,
};

class Page extends React.Component {
  //初回実行処理
  componentDidMount() {
    this.props.initDataSet(initData);
  }

  //データ取得、サーバ送信
  data(prop) {
    console.log(prop);
    var resData = pageServer(prop);
    console.log(resData);
  }

  //HTMLレンダリング
  render() {
    const DataDisp = ({ prop }) => {
      return (
        <div>
          <FormsSet props={prop.stateData} prop={prop} />
        </div>
      );
    };

    return (
      <div>
        <DataDisp prop={this.props} />
        <button onClick={() => this.data(this.props.stateData)}>data</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateData: state.stateData,
});

const mapDispatchToProps = (dispatch) => ({
  initDataSet: (x) => dispatch(pageAction.initDataSet(x)),
  updateTextBox: (x) => dispatch(pageAction.updateTextBox(x)),
  updateCheckBox: (x) => dispatch(pageAction.updateCheckBox(x)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
