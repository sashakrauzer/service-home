import React from 'react';
import Slider from 'react-rangeslider';
import { changeDistance } from '../../../actions';

class RangeSlider extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            value: props.distance
        }
    }

    handleChangeStart () {
        // 
    };

    handleChange (value) {
        this.setState({
            value: value
        });
    };

    handleChangeComplete () {
        this.props.dispatch(changeDistance(this.state.value));
    };

    render() {
        let { value } = this.state
        return (
            <div className='slider'>
                <h3 className="header">Transmission<br/><i>Distance</i></h3>
                <div className="slider__value">
                    <h3 className="header">choose <i>distance</i></h3>
                    <span className="current-distance">current<br/>distance</span>
                    <span className="value">{value}<i>m</i></span>
                </div>
                <div className="rangeslider-wrap">
                    <Slider
                        min={0}
                        max={50}
                        value={value}
                        tooltip={false}
                        onChangeStart={this.handleChangeStart.bind(this)}
                        onChange={this.handleChange.bind(this)}
                        onChangeComplete={this.handleChangeComplete.bind(this)}
                    />
                    <span>0m</span>
                    <span>50m</span>
                </div>
            </div>
        )
    }
}

export default RangeSlider;