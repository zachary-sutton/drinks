import React from 'react'
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Splash from "./components/Splash"
import Header from "./components/Header"
import MainEvent from './components/MainEvent'
import Events from "./components/Events"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      isSplash: true,
      events: [],
      mainEvent: {
        id: 0,
        type: "",
        time: "",
        title: "",
        location: {name: "", latitude: 0, longitude: 0},
        creator: {name: "", avatarUrl: ""},
        guests: [],
        comments: []
      },
      showMainEvent: false,
      showEvents: true,
      indexForMainEvent: 0
    }
    //order properly
    this.getIndexForMainEvent = this.getIndexForMainEvent.bind(this)
    this.sortArrayABC = this.sortArrayABC.bind(this)
    this.sortArrayDate = this.sortArrayDate.bind(this)
    this.closeEvent = this.closeEvent.bind(this)
    this.closeSplash = this.closeSplash.bind(this)
  }
  componentDidMount(){
    fetch("https://mock-api.drinks.test.siliconrhino.io/events/")
    .then(request => request.json())
    .then(json => this.setState({events: json}))
  }
  //rename all accordingly &&  SPLIT UP LOGIC AND DISPLAY ELEMENTS 
  //pass in the Index parameter from eventsArray in Events.js  
  getIndexForMainEvent(eventArrayIndex){
    this.setState({showMainEvent:true/*, showEvents:false*/})
    const getState = this.state.events
    //use Index parameter to set state to element that was clicked 
    this.setState({indexForMainEvent: eventArrayIndex, mainEvent: getState[eventArrayIndex] })
  }
  closeSplash(){
    this.setState({isSplash:false})
  }
  closeEvent(){
    this.setState({showMainEvent: false, showEvents:true})
  }
  sortArrayABC(){
    const eventsArray = this.state.events
    eventsArray.sort((a, b) => {
      if(a.title < b.title) { return -1 }
      if(a.title > b.title) { return 1 }
      return 0
  })
    this.setState({events: eventsArray})
  }
  sortArrayDate(){
    const eventsArray = this.state.events
    eventsArray.sort((a, b) => {
      if(a.time < b.time) { return -1 }
      if(a.time > b.time) { return 1 }
      return 0
  })
    this.setState({events: eventsArray})
  }
  render(){
    const { title, type, time, location, creator, comments, guests } = this.state.mainEvent
    const showMainEvent = this.state.showMainEvent?  
    <MainEvent 
    eventName={title}
    type={type} 
    time={time}
    location={location.name}
    host={creator.name}
    hostImg={creator.avatarUrl}
    guests={guests.name}
    loadComments={comments}
    loadGuests={guests}
    handleClick={this.closeEvent}
    />
    :
    null
    const handleShowEvents = this.state.showEvents ?
    <Events 
    eventsArray={this.state.events} 
    handleClick={this.getIndexForMainEvent} 
    />
    :
    null
    const handleSplash = this.state.isSplash? 
    <Splash handleClick={this.closeSplash} /> 
    : 
    <div className="animated bounceInLeft">  
    <Header handleABC={this.sortArrayABC} handleDate={this.sortArrayDate} />      
    {showMainEvent}
    {handleShowEvents}
    </div>
    return (
      <div className="App">
        {handleSplash}
      </div>
    )
  }
}
export default App;
