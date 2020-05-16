import React from 'react'
import ChoosenOptions from './ChoosenOptions';
import DistanceAndConnection from './DistanceAndConnection';
import RightArrows from './RightArrows';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        // 
    };
    this.stepIsComplete = false;
  }

  render() {
    if (this.props.distance >= 0 && this.props.distance <= 50) {
        let flag = this.props.options.some((option) => {
            return option.selected === true; 
        });
        if (flag) {
            this.stepIsComplete = this.props.connection.some((option) => {
                return option.selected === true; 
        });
        } else {
            this.stepIsComplete = false;
        }
    } else {
        this.stepIsComplete = false;
    }

    return (
        <div className="row form">
            <ChoosenOptions options={this.props.options}/>
            <DistanceAndConnection 
                stepIsComplete={this.stepIsComplete} 
                dispatch={this.props.dispatch} 
                distance={this.props.distance}
                connection={this.props.connection}
            />
            <RightArrows />
        </div>
    )
  }
}

export default Form;