/**
 * Created by ikonon on 2019/6/5
 */
import React from "react";
import {Button} from "antd";
import axios from 'axios';
import Barrage from 'barrage-ui';
import './style.css'

// //b 站弹幕列表
// fetch("https://api.live.bilibili.com/ajax/msg", {
//   "credentials": "omit",
//   "headers": {"accept": "application/json, text/plain, */*", "content-type": "application/x-www-form-urlencoded"},
//   "referrer": "https://live.bilibili.com/1150",
//   "referrerPolicy": "no-referrer-when-downgrade",
//   "body": "roomid=35399&csrf_token=9014409fd2366f0ffaf98fa4d8f8d35d&csrf=9014409fd2366f0ffaf98fa4d8f8d35d&visit_id=",
//   "method": "POST",
//   "mode": "cors"
// }).then(res => res.json())
//   .then(res => {
//     console.log(res)
//   });

class BarrageUI extends React.Component{
  componentDidMount() {
    this.getDanMU();
    this.getDanMuinfo = setInterval(this.getDanMU, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.getDanMuinfo)
  }

  getDanMU = () => {
    axios.get('/danmu').then(res => {
      console.log(res);
      // 加载弹幕
      this.barrage = new Barrage({
        container: document.getElementById('container'), // 父级容器
        data: res.data, // 弹幕数据
        avoidOverlap: false,
        // config: {
        //   // 全局配置项
        //   duration: 20000, // 弹幕循环周期(单位：毫秒)
        //   defaultColor: '#fff', // 弹幕默认颜色
        // },
      });
      this.handlePlay();
    });
  };

  handlePlay = (e) => {
    this.barrage.play();
  };

  addDanMU = () => {
    // 新增一条弹幕
    let isSuccess = this.barrage.add({
      key: 'fctc651a9pm2j20bia8j', // 弹幕的唯一标识
      time: 1200, // 弹幕出现的时间(单位：毫秒)
      text: '这是新增的一条弹幕', // 弹幕文本内容
      fontSize: 24, // 该条弹幕的字号大小(单位：像素)，会覆盖全局设置
      color: '#0ff', // 该条弹幕的颜色，会覆盖全局设置
    });
    console.log(isSuccess)

  };

  render() {
    return (
      <>
        <div id="container">
          <video id="video" src="/video/mv.mp4"  controls onPlay={event => {
            console.log(event)
          }}>

          </video>

        </div>
        <Button onClick={this.handlePlay}>播放弹幕</Button>
        <Button onClick={this.addDanMU}>增加弹幕</Button>
      </>


    );
  }
}

export default BarrageUI;
