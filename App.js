import React from 'react';
import './index';
import Timer from './Timer';
import Menu from './Menu';
import UserLogin from './UserLogin';
import Counter from './Counter';
import Dice from './Dice';
import Navigation from './Navigation'
import Slider from './Slider';


class App extends React.Component {
  state = { active: "" };

  finder = (e) => {
    this.setState({ active: e.target.innerText });
  }
  render() {

    let data = {
      Counter: <Counter />,
      Dice: <Dice />,
      Navigation: <Navigation />,
      Slider: <Slider />,
      Timer: <Timer />,
      Menu: <Menu />,
      UserLogin: <UserLogin />
    }

    return (
      <>
        <div onClick={this.finder} className="exercises">
          <div className="exercise">Counter</div>
          <div className="exercise">Dice</div>
          <div className="exercise">Navigation</div>
          <div className="exercise">Slider</div>
          <div className="exercise">Timer</div>
          <div className="exercise">Menu</div>
          <div className="exercise">UserLogin</div>
        </div>

        <div >
          {data[this.state.active]}
        </div>

      </>
    )
  }
}

export default App;
