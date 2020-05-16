import React from 'react'

class Steps extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        // 
    };
  }

  render() {
    return (
        <div className="steps">
            <ul>
                <li className="complete"></li>
                <li className="complete"></li>
                <li className={`current ${this.props.stepIsComplete ? 'complete' : ''}`}></li>
                <li></li>
            </ul>
            <span>Complete {this.props.stepIsComplete ? '3' : '2'} steps of 4</span>
        </div>
    )
  }
}

export default Steps;