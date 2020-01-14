import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import api from 'api';

const { postCategoryList } = api;
// type Ts=RouteComponentProps
export default class Child extends React.Component<RouteComponentProps> {
  // @SerializedName('aaaa')
  async jumps() {
    const {
      history: { push },
    } = this.props;
    console.log(process.env.REACT_APP_BASE_URL);
    const data = await postCategoryList({ name: '', page: 1, size: 10 });
    console.log(data);
    push('/detail', { type: 'sex' });
  }

  render() {
    return (
      <div>
        <div onClick={() => this.jumps()}>我是child</div>
      </div>
    );
  }
}
