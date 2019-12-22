/**
 * Created by ikonon on 2019/7/11
 */
import React, {useState, useEffect, useRef} from "react";
import {Link} from "react-router-dom";

function Hook() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{text: 'Learn Hooks'}]);
  const inputEl = useRef(null);
  console.log('render', setCount);
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setCount(count => count + 1);
  //   }, 1000);
  //   console.log('更新页面标题', count);
  //   return () => {
  //     console.log('清除', count);
  //     clearInterval(timer);
  //   }
  // }, []);
  const onBlur = (e) => {
    const text = e.target.value;
    setTodos([...todos, {text}])
  };

  return (
    <div>
      <p>【Hook】：You clicked {count} times</p>
      <Link to={'/chat'}>聊天</Link><br/>
      <input ref={inputEl} onBlur={onBlur}/>
      <ul>
        {todos ? todos.map((todo, index) => <li key={index}>{todo.text}</li>) : console.log(todos)}
      </ul>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


export default Hook;
