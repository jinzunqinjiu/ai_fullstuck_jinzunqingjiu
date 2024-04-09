import React from 'react';
// import List from './components/List.jsx'
// import Page from './components/Page.jsx';
// import Life from './components/life.jsx';
import Todolist from './todoList/Todolist.jsx';
const App = props => {
  const colors = [{ id: 1, name: ' red' }, { id: 2, name: 'yellow' }, { id: 3, name: 'blue ' }]
  const fn = function () {
    console.log('q');
  }
  return (
    <div>

      {/* <Life></Life> */}
      {/* <h2>hellow React</h2>
      <ul>   <List colors={colors} fn={() => { }} obj={{ name: 'Tom', age: 18 }} /></ul>
      <Page Page={100} /> */}
      <Todolist></Todolist>
    </div>
  );
};//函数式组件

App.propTypes = {

};

export default App;