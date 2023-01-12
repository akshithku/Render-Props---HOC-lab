import ParentCounterHoc from "./ParentcounterHoc"

 function LikePostHoc(props) {

  
    return (
      <div>
        <button onClick={props.handleCounter}>Like Post {props.counter}</button>
      </div>
    )
  }
  
  export default ParentCounterHoc(LikePostHoc)