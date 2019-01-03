import React, { Component } from "react";

class ColourSelector extends Component {
    constructor(props) {
        super(props);
        this.onInputChange = this.onInputChange.bind(this);
    }

    state= { hex: this.props.hex}

    onInputChange(event) {
        this.setState({ hex: event.target.value});
    }

    componentDidUpdate() {
        console.log(this.state.hex);
    }

    render() {
        const { hex } = this.props;
        return (
            <input type="color" 
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