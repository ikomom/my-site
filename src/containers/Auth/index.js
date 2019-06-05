import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {
  actions as authActions
} from "../../redux/modules/auth";
import {Form} from "antd";
import {withRouter} from "react-router-dom";
import './style.css'
// import {actions as chatActions, getNumber} from "../../redux/modules/chat";
import {options as loginOptions, signUpOptions} from './loginModel'

/**
 * 登陆认证页面
 */
@connect(mapStateToProps, mapDispatchToProps)
class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    };
    this.pathname = {
      '/auth': loginOptions,
      '/signup': signUpOptions,
    };
    this.postData = {
      '/auth': this.props.signIn,
      '/signup': this.props.signUp,
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        const {location: {pathname}} = this.props;
        this.postData[pathname](values);
      }
    });
  };

  componentWillReceiveProps(nextProps, nextContext) {
    // if (nextProps.auth) {
    //   this.props.history.push('/chat')
    // }
  }

  renderLine = (itemName, itemValue) => {
    const {getFieldDecorator} = this.props.form;
    return <Form.Item key={itemName}>
      {
        getFieldDecorator(itemName, itemValue.options)(itemValue.render)
      }
      {itemValue.afterRender}
    </Form.Item>
  };

  render() {
    // 判断是登陆还是注册
    const {location: {pathname}} = this.props;
    let options = this.pathname[pathname] || null;
    let formItems = [];
    for (let itemName in options) {
      formItems.push(this.renderLine(itemName, options[itemName]))
    }
    return (
      <div className={'auth-content'}>
        <Form onSubmit={this.handleSubmit} className={'login-form'}>
          {formItems}
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    auth: state.getIn(['auth', 'response'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(authActions, dispatch)
  }

}
// 自动创建表单校验
const WrappedNormalLoginForm = Form.create({name: 'login'})(Auth);

export default withRouter(WrappedNormalLoginForm);
