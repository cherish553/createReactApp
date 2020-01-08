import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { boundMethod } from 'autobind-decorator';
// RouteComponentProps
interface Prop {
  name: string;
}

class Child extends React.Component<Prop & RouteComponentProps> {
  @boundMethod
  jumps() {
    this.props.history.push('/detail', { type: 'sex' });
  }
  render() {
    console.log(withRouter);
    return (
      <div>
        <div onClick={this.jumps}>我是子组件</div>
      </div>
    );
  }
}
export default withRouter(Child);
