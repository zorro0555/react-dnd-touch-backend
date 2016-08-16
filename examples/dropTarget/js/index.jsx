'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { default as Touch } from '../../../src/Touch';
import DragDropContext from 'react-dnd/lib/DragDropContext';
import Source from './Source.jsx';
import Target from './Target.jsx';

class App extends React.Component {
    render () {
        return (
            <div>
                <Source />
                <Target />
            </div>
        );
    }
}

App = DragDropContext(Touch({ enableMouseEvents: true }))(App);
ReactDOM.render(<App />, document.getElementById('app'));
