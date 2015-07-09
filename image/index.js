'use strict';

import refuse from '../refuse';
import React from 'react';

export default class extends React.Component {
  static propTypes = {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    src: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  }

  render() {
    let props = this.props;

    if (!props.children) return (
      <img
        title={props.description}
        alt={props.description}
        height={props.height}
        width={props.width}
        src={props.src}
      />
    );

    //
    // If there are children, assume that the image needs to be applied as
    // background image.
    //
    let background = {
      backgroundImage: 'url('+ props.src +')'
      height: props.height,
      width: props.width
    }

    return (
      <div style={refuse.assign(props.style, background)} title={props.description} />
        {props.children}
      </div>
    )
  }
};
