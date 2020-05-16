import React from 'react'

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            marginLeft: 0,
            sumOfOptions: props.options.length
        };

        this.shownItems = 10;
        this.sizeStep = 93;
        
        if (props.options.length - this.shownItems > 0) {
            this.maxMarginLeft = (props.options.length - this.shownItems) * this.sizeStep;
        } else {
            this.maxMarginLeft = 0;
        }
    }

    onClickOption(id) {
        this.props.selectOption(id);
    }

    prev() {
        if(this.state.marginLeft === 0) {
            this.setState({marginLeft: -this.maxMarginLeft});
        } else {
            this.setState({marginLeft: this.state.marginLeft + this.sizeStep});
        }
    }

    next() {
        if (Math.abs(this.state.marginLeft) === this.maxMarginLeft) {
            this.setState({marginLeft: 0});
        } else {
            this.setState({marginLeft: this.state.marginLeft + -this.sizeStep});
        }
    }

    render() {
        return (
        <div className="row carousel">
            <section className="options">
                {this.props.options.map((option, i) => {
                    if (i === 0) {
                    return (
                        <div key={option.id} style={{marginLeft: this.state.marginLeft}} onClick={this.onClickOption.bind(this, option.id)} className={option.selected ? 'selected' : ''}>
                            <div>
                                <img src={`img/${option.icon}`} alt="" />
                            </div>
                            <p>{option.name}</p>
                        </div>
                    )
                    }
                    return (
                    <div key={option.id} onClick={this.onClickOption.bind(this, option.id)} className={option.selected ? 'selected' : ''}>
                        <div>
                            <img src={`img/${option.icon}`} alt="" />
                        </div>
                        <p>{option.name}</p>
                    </div>
                    )
                })}
                <div className="options__add-custom" key="9999">
                    <div>
                    <img src="img/add-custom.png" alt="" />
                    </div>
                    <p>Add custom</p>
                </div>
            </section>
            <button className="options__prev" onClick={this.prev.bind(this)}>
                <img src="img/carousel-arrow.svg" alt="" />
            </button>
            <button className="options__next" onClick={this.next.bind(this)}>
                <img src="img/carousel-arrow.svg" alt="" />
            </button>
        </div>
        )
    }
}

export default Options;