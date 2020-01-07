import React from 'react';
import { withRouter } from 'react-router-dom';

export default class Home extends React.Component {
  jump() {
    // this.props.history.push('detail')}
  }
  render() {
    return (
      <div>
        <div onClick={() => this.jump()}>回到home</div>
      </div>
    );
  }
  // constructor(props:any) {
  //     super(props)
  //   }
}
