import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div>去detail {this.props.children}</div>
      </div>
    );
  }
}
