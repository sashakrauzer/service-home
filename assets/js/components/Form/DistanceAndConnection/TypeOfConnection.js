import React from 'react';
import { chooseConnection } from '../../../actions';

class TypeOfConnection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        // 
    };
  }

  render() {
    return (
        <div className="type-of-connection">
            <h3 className="header">Choose <i>type of connection</i></h3>
            <ul className="options-of-connection">
                {this.props.connection.map((option) => {
                    if (option.selected) {
                        return (
                            <li 
                                key={option.id} 
                                className={option.selected ? 'selected' : ''} 
                                onClick={() => {this.props.dispatch(chooseConnection(option.id))} }
                            >
                                <img src={`img/${option.icon_white}`} alt="" />
                            </li>
                        );
                    }
                    return (
                        <li 
                            key={option.id} 
                            className={option.selected ? 'selected' : ''} 
                            onClick={() => {this.props.dispatch(chooseConnection(option.id))} }
                        >
                            <img src={`img/${option.icon}`} alt="" />
                        </li>
                    );
                })}
            </ul>
        </div>
    )
  }
}

export default TypeOfConnection;