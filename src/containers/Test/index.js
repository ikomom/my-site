/**
 * 新生命周期和react
 * Created by ikonon on 2019/7/11
 */
import React from "react";
// import MouseTracker from "../../components/MouseTracker";
import Hook from "../../components/Hook";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: 0
  };

  static getDerivedStateFromProps(props, state) {
    return true;
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }


  getSnapshotBeforeUpdate(prevProps, prevState) {

  }



  render() {
    return(
      <div style={{ height: 600, width:'100%',}}>
        {/*<MouseTracker/>*/}
        <Hook/>
        <button onClick={() => this.setState({count: this.state.count++})}>点击</button>
        <p>【setState】：You clicked {this.state.count} times</p>
      </div>
    )
  }
}
