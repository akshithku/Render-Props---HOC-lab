import './App.css';
import LikeImage from './components/LikeImage';
import LikeImageHoc from './components/LikeImageHoc';
import LikePost from './components/LikePost';
import LikePostHoc from './components/LikePostHoc';
import ParentCounter from './components/ParentCounter';

function App() {
  return (
    <div>
    <h1>Some Blog</h1>
    <div className='btn'>
      <h2>Render Props Method:- </h2>
      <ParentCounter render={(counter, handleIncreament)=> <LikeImage likeImageCounter={counter} handleLikeImageCount = {handleIncreament}/>}/>
      <ParentCounter render={(counter, handleIncreament)=><LikePost LikePostCounter={counter} handlePostCount = {handleIncreament}/>}/>
    </div>
    <div className='btn'>
      <h2>Using HOC:-</h2>
      <LikeImageHoc/>
      <LikePostHoc/>
    </div>

  </div>
  );
}

export default App;
