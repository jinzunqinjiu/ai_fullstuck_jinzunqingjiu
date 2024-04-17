import React from 'react';
import TotoItem from './TotoItem'
import { Button } from 'antd';
import { useRef, useState } from 'react';

// 父组件
const TodoList = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];//第一步获取input里面的值
  const inputRef = useRef(null)
  const [value, setValue] = useState(data)


  const dataPush = () => {
    const newData = [...value, inputRef.current.value]
    setValue(newData)
    inputRef.current.value = ''
  }


  return (
    <div style={{ width: '400px' }}>

      <header style={{ display: 'flex' }}>
        <input ref={inputRef} placeholder="Basic usage" />
        <Button onClick={dataPush}>提交</Button>
      </header>

      <section>
        <TotoItem data={value}></TotoItem>
        {/* 将值传给子组件 */}
      </section>

    </div>
  );
};

export default TodoList;