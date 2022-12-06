import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// condition ? true code here : false code here

// let num=10;

// num > 10? console.log("Greater than 10") :
// console.log("less than or equal to 10")

// const isNumGreaterThan10 = num > 10 ? num - 10
// : num;

function ConditionalComponent(props){
  return (
    <div>
      {props.showComponent1 ?
      <div>Component 1</div>
      :
      <div>Component 2</div>
      }
      </div>
  )
}

function YoutubeComponent(props){
  console.log(props)
  return (
    <div className="container">
    <img src={props.thumbnailImg} />
    <div className="content">
      <p> {props.videoTitle}</p>
      <p>{props.uploader}</p>
      <p>{props.videoUploaded}</p>
      <div> {props.views}</div>
      </div>
      </div>
  )
}

function App() {
  const listOfPokemon=[
    "Pikachu",
    "Dragonite",
    "Gyrados"
  ];
  let sampleData = [
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "He did WHAT?!?! (My intial reaction)",
      videoUploader: "MaxTongster",
      dateVideoUploaded: "10-31-2022",
      videoViews: 10
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "I bought my best friend a Tesla (EMOTIONAL)",
      videoUploader: "Dave Doughbrick",
      dateVideoUploaded: "11-02-2022",
      videoViews: 300000
    },
    {
      thumbnailImg: "https://via.placeholder.com/600x400",
      videoTitle: "React in 100 seconds",
      videoUploader: "Fireship",
      dateVideoUploaded: "2022-09-08",
      videoViews: 255
    }
  ];
 return (
   <div className="app-container">
    <YoutubeComponent thumbnailImg="https://via.placeholder.com/600x400"
    views={1000}
    videoTitle="Why a cheeseburger?"
    uploader="Mark"
    videoUploaded="11/30/2022"
    />
  {sampleData.map(video => (
    <YoutubeComponent views={video.videoViews}
    key={video.videoTitle}
    thumbnailImg={video.thumbnailImg}
    videoUploaded={video.dateVideoUploaded}
    uploader={video.videoUploader}
    videoTitle={video.videoTitle}
    />
  ))}
    <ul>
     <li> 
      {listOfPokemon.find(pokemon =>
      pokemon === "Pikachu")}
      </li>
      {listOfPokemon.map(pokemon => (
        <li key={pokemon}>{pokemon}</li>
        ))}
      </ul>
        <ConditionalComponent showComponent1={true} />
</div>
  )
}

function isOdd(i){
  return i % 2 == 0 ? true : false;
}

//Old school
class WelcomeComponent extends React.Component {
  constructor(){
    // State here
    this.state = {

    }
  }

  componentDidMount(){
    //Api call
  }

  componentDidUpdate(){
    //when props or state changes
  }

  componentWillUnmount(){
    //What to do when removed
  }

  render(){
    return (
      <div>{this.props.whqjwhedlk}</div>
    )
  }
}
// New school
function WelcomeComponent(props){
  return (
    <div>{props.wjhqkljhwjskhd}</div>
  )
}

function WelcomeComponent(props){ //name
  console.log(props.name) //What is printed here
  // if(props.name){
  //   return (
  //     <div>Welcome, {props.name}</div>
  //   )
  // } else {
  //   return (
  //     <div>There is no name available</div>
  //   )
  // }
  return (
    <div>
      {props.name ? `Welcome, ${props.name}` : "There is no name available"}
    </div>
  )
}

function WelcomeComponent(props){ //name
  console.log(props.name) //What is printed here
  // if(props.name){
  //   return (
  //     <div>Welcome, {props.name}</div>
  //   )
  // } else {
  //   return (
  //     <div>There is no name available</div>
  //   )
  // }
  return (
    <div>
      {props.name ? `Welcome, ${props.name}` : "There is no name available"}
    </div>
  )
}

let sampleData = [
  {
    title: "The Great Something",
    description: ""
  },
  {
    title: "",
    description: "eqwhljwhedklqjh"
  }
]

return (
    <div>
      {
        sampleData.map(data => (
          <div>
            {
//Nested Ternary Operator
              data.title ? <div>{data.title}</div> : data.description ? <div>{data.description}</div> : <div></div>
            }
          </div>
        ))
      }
    </div>
  )

  //Fragments
  return (
    <Fragment>
      {/* <div>Div one</div>
      <div>Div two</div> */}
      {
        sampleData.map(data => (
          <div>{data.title}</div>
        ))
      }
    </Fragment>
  )

  //Shorthand
  return (
    <>
      {/* <div>Div one</div>
      <div>Div two</div> */}
      {
        sampleData.map(data => (
          <div>{data.title}</div>
        ))
      }
    </>
  )


export default App
