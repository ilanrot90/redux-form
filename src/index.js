import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { configureStore } from "./store";
import * as serviceWorker from './serviceWorker';
import StreamCreate from './components/streams/StreamCreate';
import { StreamShow } from './components/streams/StreamShow';
import { StreamEdit } from './components/streams/StreamEdit';
import StreamList from './components/streams/StreamList';
import { StreamDelete } from './components/streams/StreamDelete';
import Header from './components/Header';

const store = configureStore();

// // routes
// const pageA = () => <div>Page 1</div>
// const pageB = () => <div>Page 2</div>


const App = () => {
    return (
        <Provider store={store}>   
            <div>  
                <Router>
                    <div>
                        <Header />
     
                        <Route path="/" exact component={StreamList}/>
                        <Route path="/new" exact component={StreamCreate}/>
                        <Route path="/delete" exact component={StreamDelete}/>
                        <Route path="/edit" exact component={StreamEdit}/>
                        <Route path="/show" exact component={StreamShow}/>
                    </div>
                </Router>
            </div>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
