//react
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//js拡張
import styled from 'styled-components'
import { Provider } from "react-redux"
import { createStore } from 'redux';

//reducer
import reducer from './reducers';

//各ページ
import Menu from './containers/Menu'
import Top from './containers/Top'
import Page from './containers/Page'


const store = createStore(reducer);

//エントリーポイント定義
function App() {

    const ALLAREA = styled.div`

  `
    const MENUAREA = styled.div`

  `
    const MENUBOX = styled.div`

    `

    const MAINAREA = styled.div`

    `


    return (
        <Router>
            <ALLAREA>
            <MENUAREA>
                <MENUBOX>
                <Menu />
                </MENUBOX>
            </MENUAREA>
            <MAINAREA>
                <Switch>
                    <Route path="/top" exact component={Top} />
                </Switch>
                <Switch>
                    <Route path="/page" exact component={Page} />
                </Switch>
            </MAINAREA>
            </ALLAREA>
        </Router>

    )
}

//htmlにレンダリング
if (document.getElementById('app')) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('app'));
}
