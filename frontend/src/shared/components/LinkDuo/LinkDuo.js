import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import isExternal from 'is-url-external';
import PropTypes from 'prop-types';

const propTypes = {
  to: PropTypes.string.isRequired,
};

/**
 * Link that also works for external URL's
 */
export default class LinkDuo extends Component {
  render() {
    return isExternal(this.props.to) ?
      <a
        href={this.props.to}
        {...this.props}
      />
      :
      <a
        href={this.props.to}
        {...this.props}
      />;
  }
}

LinkDuo.propTypes = propTypes;