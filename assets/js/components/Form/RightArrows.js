import React from 'react'

class RightArrows extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // 
        };
    }

    render() {
        return (
        <div className="form__right-arrows">
            <button>
                <img src="img/button-arrow.svg" alt="" />
            </button>
            <button>
                <img src="img/button-arrow.svg" alt="" />
            </button>
        </div>
        )
    }
}

export default RightArrows;