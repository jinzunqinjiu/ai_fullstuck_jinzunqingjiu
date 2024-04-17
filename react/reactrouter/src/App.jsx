import React from 'react';
import { BrowserRouter, Link, Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'

const Home = () => {
  const nave = useNavigate()
  return (
    <div>
      this is home page
      <button onClick={() => nave('/about', { replace: true })}>跳去关于页面</button >
    </div>
  )
}
const About = () => {
  let [params] = useSearchParams()
  console.log(params.get('id'));
  return (
    <div>this is a about</div>
  )
}
const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Link to='/'>首页</Link>
        <Link to='/about?123'>关于</Link>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;