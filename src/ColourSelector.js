import React, { Component } from "react";

class ColourSelector extends Component {
    onInputChange = (event) => {
        const { onColourSelectorChange } = this.props;
        const hex = event.target.value;
        onColourSelectorChange(hex);
    }

    render() {
        const { hex } = this.props;

        return (
            <input 
            type="color" 
            value={hex} 
            onChange={this.onInputChange} 
            />
        );
    }

    static defaultProps = {
        hex: "#f4424b"
    }
}

export default ColourSelector;