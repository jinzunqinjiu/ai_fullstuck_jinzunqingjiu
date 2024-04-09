import React from 'react';
import State from './components/State.jsx'
import Effect from './components/Effect.jsx';
const App = props => {//来判断自建接受的值的类型
  return (
    <div>
      hellow world
      {/* <State></State> */}
      <Effect></Effect>
    </div>
  );
};

App.propTypes = {

};

export default App;