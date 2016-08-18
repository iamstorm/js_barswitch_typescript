import * as React from "react";
import * as ReactDOM from "react-dom";

import { App } from "./components/App";
import barSwitch from './reducers/barswitch';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as fetch from 'isomorphic-fetch'

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'
import { data_refresh } from './actions/barswitch'


fetch("./demo.json")
    .then(response => response.json())
    .then((json) => {
        const DevTools = createDevTools(
            <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
                <LogMonitor theme="tomorrow" preserveScrollTop={false} />
            </DockMonitor>
        )
        const store = createStore(
            barSwitch,
            DevTools.instrument())

        store.dispatch(data_refresh(json))

        ReactDOM.render(
            (
                <Provider store={store}>
                    <div>
                        <App />
                        <DevTools />
                    </div>
                </Provider>
            ),
            document.getElementById("app")
        )
     }

)

