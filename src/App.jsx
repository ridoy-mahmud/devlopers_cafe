import './App.css'
import Blogs from './Components/Blogs/Blogs';
import Header from './Components/Header/Header';
import SelectedBlogs from './Components/SelectedBlogs/SelectedBlogs';
function App() {


  return (
    <>
      <Header></Header>
      <div>
        <Blogs></Blogs>
        <SelectedBlogs></SelectedBlogs>
      </div>
    </>
  )
}

export default App;

// import PropTypes from 'prop-types'; // ES6
// var PropTypes = require('prop-types'); // ES5 with npm