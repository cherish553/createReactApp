import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import classnames from 'classnames';
import style from './detail.module.scss';

export default class Detail extends React.Component<RouteComponentProps> {
  componentDidMount() {
    // console.log(this.props.location);
  }

  jump() {
    // this.props.history.push('/news/haha');
  }

  render() {
    return (
      <div>
        <div className={classnames(style.chi, 'aaaa')}>我是detail</div>
        {/* <div onClick={() => this.jump()}>回到home</div> */}
      </div>
    );
  }
}
