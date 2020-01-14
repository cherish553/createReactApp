import React, { useState, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { boundMethod } from 'autobind-decorator';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';
// RouteComponentProps
interface Prop {
  name: string;
}

export default function Child(name: Prop) {
  const [count, setCount] = useState(0);
  const [person, changeAge] = useState({ age: 12 });
  useEffect(() => {
    // Update the document title using the browser API
    console.log(person);
  });
  return (
    <div>
      <div>
        You clicked
        {count}
        <div />
        {name.name}
        <div />
        {person.age}
        times
      </div>
      <div onClick={() => setCount(count + 1)}>Click me</div>
      <div onClick={() => changeAge({ age: person.age + 1 })}>im person</div>
    </div>
  );
}
// class Child extends React.Component<Prop & RouteComponentProps> {
//   m = {};

//   componentDidMount() {
//     console.log('这里是子组件');
//     console.log(this.props);
//   }

//   @boundMethod
//   jumps() {
//     const {
//       history: { push },
//     } = this.props;
//     push('/detail', { type: 'sex' });
//   }

//   render() {
//     console.log(withRouter);
//     return (
//       <div>
//         <div onClick={this.jumps}>我是子组件</div>
//       </div>
//     );
//   }
// }
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Child));
