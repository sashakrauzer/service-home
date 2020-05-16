import React from 'react';
import RangeSlider from './RangeSlider';
import Steps from './Steps';
import TypeOfConnection from './TypeOfConnection';

class TransmissionDistance extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // 
        };
    }

    render() {
        return (
            <div className="form__right-side">
                <Steps stepIsComplete={this.props.stepIsComplete}/>
                <RangeSlider dispatch={this.props.dispatch} distance={this.props.distance}/>
                <TypeOfConnection dispatch={this.props.dispatch} connection={this.props.connection}/>
                <button className="next-step" disabled={!this.props.stepIsComplete}>Next step</button>
            </div>
        )
    }
}

export default TransmissionDistance;