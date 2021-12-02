import React, { Component } from "react";
import { Input } from "vtex.styleguide";

class preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      car: "",
      vin: "",
      error: null,
    };
  }

  onChange = (e) => {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  render() {
    const { error, car, vin } = this.state;
    return (
      <div className="mb8">
        <p>Preferences :</p>
        <Input
          name="car"
          label="Modal of Car"
          value={car}
          errorMessage={error}
          onChange={this.onChange}
        />
        <Input
          name="vin"
          label="VIN"
          value={vin}
          errorMessage={error}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default preferences;
