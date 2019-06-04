import React from 'react';
import {actions as chatActions, getNumber} from "../../redux/modules/chat";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Button} from "antd";
import {Link} from "react-router-dom";

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatNumber: 0,
    }
  }

  render() {
    return (
      <div>
        <Link to={'/'}>首页</Link><br/>
        {this.props.chatNumber}
        <Button onClick={() => {
          this.props.addNumber()
        }}>点击</Button>
        <Button onClick={() => {
          this.props.resetNumber()
        }}>重置</Button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log('mapStateToProps', getNumber(state), 'props', props)
  return {
    chatNumber: getNumber(state)
  };
};

const mapDispatchToProps = dispatch => {
  console.log('dispatch')
  return {
    ...bindActionCreators(chatActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);

