import { Dispatch } from 'redux';

// 这是action
// const increase = {
//     type: '涨工资'
// };
// const decrease = {
//     type: '扣工资'
// };
interface MapStateRetuen {
  tiger: number;
}
interface MapState {
  (state: number): MapStateRetuen;
}

// 需要渲染什么数据
export const mapStateToProps: MapState = (state = 1111): MapStateRetuen => {
  return {
    tiger: state,
  };
};
// 需要触发什么行为
export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    PayIncrease: () => dispatch({ type: '涨工资' }),
    PayDecrease: () => dispatch({ type: '扣工资' }),
  };
}
