'use strict';

import refuse from '../refuse';
import React from 'react';

export default class extends React.Component {
  static propTypes = {
    href: React.propTypes.string,
    style: React.propTypes.object
  }

  render() {
    let props = this.props;

    return (
      <a {...props} />
        {props.children}
      </a>
    )
  }
};
