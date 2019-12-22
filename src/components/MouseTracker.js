/**
 * Created by ikonon on 2019/7/11
 */
import React from "react";

class MouseTracker extends React.Component {
  render() {
    return (
      <div style={{height: '100%', width: '100%', backgroundColor: 'yellow'}}>
        <h1>移动鼠标!</h1>
        {/*<Mouse render={mouse => (*/}
        {/*  <Cat mouse={mouse} />*/}
        {/*)}/>*/}

      </div>
    );
  }
}


class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {x: 0, y: 0};
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{height: '100%', width: '100%', backgroundColor: 'pink'}} onMouseMove={this.handleMouseMove}>
        <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src={require('./cat.jpg')} style={{position: 'absolute', left: mouse.x, top: mouse.y}}/>
    );
  }
}

function withMouse(Component) {
  return class extends React.Component {
    render() {
      return (
        <Mouse render={mouse => {
          return <Component {...this.props} mouse={mouse}/>
        }}/>
      );
    }
  }
}

export default withMouse(Cat);
