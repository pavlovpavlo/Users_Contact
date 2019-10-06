import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import store from "../redux/redux-store";
import UsersContactContainer from "./UsersContactContainer/UsersContactContainer";

const App = (props)=>{
    return (
        <div className="app-wrapper">
            <Provider store={store}>
                <UsersContactContainer/>
            </Provider>
        </div>

    );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
