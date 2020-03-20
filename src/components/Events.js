import React from "react"

class Events extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    const eventsArray = this.props.eventsArray.map((eventsCard, Index) =>
            //run handleclick and pass the index of each array item to the method ran on handleclick
            <div onClick={() => this.props.handleClick(Index)} key={eventsCard.id} className="col-xl-3 col-md-5 text-center event-tile m-4">
                {/* Change to img matching events type */}
                {/*<h3>Event img</h3>*/}
                <h2><u>{eventsCard.title}</u></h2>
                <h3>{eventsCard.type}</h3>
                <h5>Location: {eventsCard.location.name}</h5>
                {/* SPLIT DATE AND TIME*/}
                <p>Time/Date: {eventsCard.time}</p>
                <p>Attending: {eventsCard.guests.length}</p>
                {/* add event listener for mouseover that changes css
                <div className="overlay">
                    <h1>see more</h1>
                </div>*/}
            </div>
    )
        return(
            <section id="events">
            <div className="container-fluid">
                <div className="row d-flex justify-content-around">
                    {eventsArray}      
                </div>
            </div>
        </section>
        )
    }
}

export default Events