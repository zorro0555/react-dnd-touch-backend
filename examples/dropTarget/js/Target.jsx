'use strict';

import React, { Component, PropTypes } from 'react';
import DropTarget from 'react-dnd/lib/DropTarget';

const dragTarget = {
    drop(props, monitor, component) {
        console.log('dropped on target');
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class Target extends Component {
    render () {
        const {
            connectDropTarget
        } = this.props;

        return connectDropTarget(
            <div className="target">
                Drop here!
                <div className="nested-child">Nested Child</div>
            </div>
        );
    }
}

Target.PropTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired
};

export default DropTarget('draggable-item', dragTarget, collect)(Target);
