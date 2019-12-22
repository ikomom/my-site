import React from "react";
import {Col, Row} from "antd";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
  actions as authActions
} from "../../redux/modules/auth";
import {Link} from "react-router-dom";

const left_span = 6;
const right_span = 24 - left_span;

@connect(() => ({}), (dispacth) => ({
  ...bindActionCreators(authActions, dispacth),
}))
class Home extends React.Component{
  render() {
    return (
      <div className="App">
        <Link to={'/auth'}>登陆</Link><br/>
        <Link to={'/chat'}>聊天</Link><br/>
        <Link to={'/barrage'}>弹幕</Link><br/>
        <Link to={'/test'}>测试</Link><br/>
        <Col span={left_span} className={"App-left"}>
          <Row className={"App-left"} span={left_span}>
            1
          </Row>
        </Col>
        <Col span={right_span} className={"App-right"}>
          <Row className={'App-chat-main'}>
            2
          </Row>
          <Row className={'App-chat-input'}>
            3
          </Row>
        </Col>
      </div>
    );
  }
}

export default Home;
