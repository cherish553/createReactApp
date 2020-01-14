import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import style from './detail.module.scss';

// interface IProps {
//   tiger: number;
//   PayIncrease: () => void;
//   PayDecrease: () => void;
// }
export default class Detail extends React.Component<RouteComponentProps> {
  componentDidMount(): void {
    // const a = 1;
    console.log(this.props);
  }

  jump() {
    const {
      history: { push },
    } = this.props;
    push('/news/haha');
  }

  render() {
    // const { PayIncrease, PayDecrease } = this.props;
    return (
      <div>
        <div>这里是index页面</div>
        {/* <h2>当月工资为{this.props.tiger}</h2> */}
        {/* <button onClick={PayIncrease}>升职加薪</button>
    <button onClick={PayDecrease}>迟到罚款</button> */}
      </div>
    );
  }
}
