'use strict';

import React, { Component, PropTypes } from 'react';
import DragSource from 'react-dnd/lib/DragSource';
import DragPreview from './DragPreview.jsx';

const dragSource = {
    beginDrag (props) {
        return props;
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    };
}

class Source extends Component {
    render () {
        const {
            connectDragSource
        } = this.props;

        return connectDragSource(
            <div className="source">
                <DragPreview {...this.props} />
                Drag me!
            </div>
        );
    }
}

Source.PropTypes = {
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired
};

export default DragSource('draggable-item', dragSource, collect)(Source);
