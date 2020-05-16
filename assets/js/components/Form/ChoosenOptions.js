import React from 'react'

class ChosenOptions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        // 
    };

    this.selectedOptions = [];
  }

  render() {
        let options = this.props.options.filter((option) => {
            if (option.selected) {
                return true;
            }
            for (let i = 0; i < this.selectedOptions.length; i++) {
                if (option.id === this.selectedOptions[i].id) {
                    this.selectedOptions.splice(i, 1);
                }
            }
            return false;
        });

        this.selectedOptions = this.selectedOptions.concat(options).reverse().filter((elem, i, arr) => {

            for (let k = i + 1; k < arr.length; k++) {
                if (arr[k].id === elem.id) {
                    return false;
                }
            }

            return true;
        }).reverse();

        this.selectedOptions = this.selectedOptions.slice().reverse().slice(0,8).reverse();
        
    return (
        <div className="form__left-side">
            <div className="chosen-options">
                <p>Choosen<br/><span>options:</span></p>
                <ul>
                    {this.selectedOptions.map((option) => {
                        return (
                            <li key={option.id} title={option.name}><img src={`img/${option.icon}`} alt=""/></li>
                        );
                    })}
                </ul>
            </div>
            <div className="device-description">
                    <h3>White label<br/>W-394900 XP</h3>
                    <button>Order now</button>
                    <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris&nbsp;vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per i</p>
                    <p>nceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut</p>
                    <span><i>Live</i><br/>view</span>
            </div>
        </div>
    )
  }
}

export default ChosenOptions;