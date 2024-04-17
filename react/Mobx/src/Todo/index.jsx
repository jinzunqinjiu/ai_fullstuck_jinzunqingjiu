import React from 'react';
import { useStore, observer } from '../store/index'
import { useRef } from 'react';
import './index.css'

const Todo = () => {
  const myref = useRef()
  const { todoStore } = useStore()
  const pushValue = (e) => {
    if (e.keyCode == 13) {
      todoStore.pushValue(todoStore.list.length + 1, e.target.value)
    }
  }
  const valueDelete = (id) => {
    todoStore.deleteItem(id - 1)
  }

  const checkall = () => {
    todoStore.checkAll()
  }

  const changeDone = (id) => {
    todoStore.checkItem(id)
  }
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
          ref={myref}
          onKeyDown={pushValue}
        />
      </header>

      <section className="main">
        {/* 全选 */}
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"

        />
        <label htmlFor="toggle-all" onClick={checkall}></label>

        <ul className="todo-list">
          {
            todoStore.list.map((item) => {
              return (
                <li className={"todo" + (item.isDone ? " completed" : '')} key={item.id}>
                  <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked={item.isDone} onClick={() => { changeDone(item.id) }} />
                    <label >{item.name}</label>
                    <button className="destroy" onClick={() => { valueDelete(item.id - 1) }}></button>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </section>
    </section>
  );
};

export default observer(Todo);