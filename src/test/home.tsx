import React from 'react';
import Child from './compoents/index';
import { Bar } from 'react-chartjs-2';
import style from './home.module.scss';
import { Button, ButtonGroup } from 'reactstrap';
export default class Home extends React.Component {
  state = {
    name: 'aaa',
    arr: [
      {
        name: 'mazekun',
        id: 1
      },
      {
        name: 'likefan',
        id: 2
      }
    ]
  };
  render() {
    const { name, arr } = this.state;
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    const options = {
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ],
        yAxes: [
          {
            stacked: true
          }
        ]
      }
    };
    return (
      <div>
        {name && <div>{name}</div>}
        <ButtonGroup>
          <Button color="primary">One</Button>
          <Button color="primary">Two</Button>
          <Button color="primary">Three</Button>
        </ButtonGroup>
        <Child name="123" />
        <div className={style.chi}>
          <Bar data={data} options={options} width={600} height={800} />
        </div>
        {arr
          .filter(item => item.id === 1)
          .map(({ id, name }) => (
            <div key={id}>{name}</div>
          ))}
        {this.props.children}
      </div>
    );
  }
}
