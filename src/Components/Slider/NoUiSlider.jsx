import React from "react";
import Nouislider from "nouislider-react";

import "nouislider/distribute/nouislider.css";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

export default class NoUiSlider extends React.Component {
    state = {
        value: [60, 100],
        range: { min: 60, max: 100 }
    };

    handleClick = () => {
        this.setState({
            value: [50, 55],
            range: { min: 45, max: 60 }
        });
    };

    render() {
        const { value, range } = this.state;

        return (
            <div style={styles}>
                <Nouislider start={value} range={range} tooltips={true} />
            </div>
        );
    }
}