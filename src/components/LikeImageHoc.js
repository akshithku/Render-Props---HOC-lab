import ParentCounterHoc from "./ParentcounterHoc"

 function LikeImageHoc(props) {

  
    return (
      <div>
        <button onClick={props.handleCounter}>Like Post {props.counter} </button>
      </div>
    )
  }

  export default ParentCounterHoc(LikeImageHoc)
  