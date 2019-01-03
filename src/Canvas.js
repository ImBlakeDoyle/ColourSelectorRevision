import React, { Component } from "react";
import ColourSelector from "./ColourSelector";

const styles = {
    border: "6px solid black"
}

class Canvas extends Component {
    state = { 
        hex: "#f4424b",
        coords: null,
        height: 400,
        width: 400
    };

    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.context = null;
    }

    componentDidUpdate() {
        this.setContext();
    }

    componentDidMount() {
        console.log(this.canvasRef);
    }

    onColourSelectorChange = (hex) => {
        this.setState({ hex });
    }

    render() {
        const { hex } = this.state;

        return (
            <div>
                <div>
                    <ColourSelector
                    onColourSelectorChange={this.onColourSelectorChange}
                    hex={hex}
                    />
                </div>
                <canvas
                    ref={this.canvasRef}
                    width="400"
                    height="400"
                    style={styles}
                />
            </div>
        );
    }
}

export default Canvas;