
/**
 * Created by ikonon on 2019/7/11
 */
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

function Hook() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;

  });
  return (
    <div>
      <p>【Hook】：You clicked {count} times</p>
      <Link to={'/chat'}>聊天</Link><br/>
      <input onBlur={(e) => {
        todos.push({text: e.target.value});
        setTodos(todos)
      }}/>
      <ul>
        {todos ? todos.map((todo, index) => <li key={index}>{todo.text}</li>): console.log(todos)}
      </ul>
      <button onClick={() => setCount(count + 2)}>
        Click me
      </button>
    </div>
  );
}



export default Hook;
