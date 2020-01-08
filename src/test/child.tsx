import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
// type Ts=RouteComponentProps
export default class Child extends React.Component<RouteComponentProps> {
  // @SerializedName('aaaa')
  jumps() {
    this.props.history.push('/detail', { type: 'sex' });
  }
  render() {
    return (
      <div>
        <div onClick={() => this.jumps()}>我是child</div>
      </div>
    );
  }
}
