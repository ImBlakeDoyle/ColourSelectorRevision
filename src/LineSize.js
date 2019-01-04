import React, { Component } from "react";

class LineSize extends Component {
    onInputChange = (event) => {
        const { onBrushSizeChange } = this.props;
        onBrushSizeChange(event.target.value);
    }

    render() {
        const { brushSize } = this.props;
        return (
            <input
                type="number"
                value={ brushSize }
                min="1"
                onChange={this.onInputChange}
            />
        );
    }
}

export default LineSize;