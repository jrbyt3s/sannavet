import React, { Component, useState } from "react";
import { SketchPicker } from "react-color";
import ColorLensIcon from "@mui/icons-material/ColorLens";

export class SketchExample extends Component {
  state = {
    displayColorPicker: false,
    color: {
      r: 241,
      g: 112,
      b: 19,
      a: 1,
    },
  };
  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };
  render() {

    return (
      <div>
        <div className="theme-container1 active ti-btn ti-btn-primary-full" onClick={this.handleClick}>
          <ColorLensIcon />

        </div>
        {this.state.displayColorPicker ? <div >
          <div onClick={this.handleClose} />
          <SketchPicker className='mt-3' color={this.state.color} onChange={this.handleChange} />
        </div> : null}

      </div>

    );
  }
}

