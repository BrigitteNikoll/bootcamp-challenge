import React from "react";

class ShowMessageClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: ""
        };
    }
    
    handleChange(event) {
        console.log("event", event);
        const msg = event.target.value
        this.setState({message: msg})
        
    }

  render() {
    return (
      <form>
        <h1>{this.state.message}</h1>
        <input onChange={() => this.handleChange.bing(this)}></input>
        <button>Show Text</button>
      </form>
    );
  }
}

export default ShowMessageClass;
