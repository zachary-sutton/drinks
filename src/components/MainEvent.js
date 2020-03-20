import React from "react"

class MainEvent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    //load comments and map the array to return new media for each event that has a comment
    const showComments = this.props.loadComments.map((comment, Index) => 
        <div key={Index} className="media col-xl-6 col-lg-8 col-md-9 col-sm-11 col-10">
            <div className="media-left media-middle my-auto media-img">
                <img src={comment.user.avatarUrl} alt={comment.user.name} title={comment.user.name}  className="media-object"/>
            </div>
            <div className="media-body p-5">
                <h4 className="media-heading">{comment.user.name} <small><i>Posted on {comment.timestamp}</i></small></h4>
                <p>{comment.message}</p>
            </div>
        </div>
    )
    //load guest images and map the array to return img for each guest, Index used as key prop as guests do not have id in API
    const showGuestsImg = this.props.loadGuests.map((guests, Index) => 
            <img key={Index} className="m-2 guest-imgs" src={guests.avatarUrl} alt={guests.name} title={guests.name} />
        )
        const { eventName, hostImg, host, type, time, location, guests } = this.props
        return (
            <section className="animated bounceInDown pt-4" id="main-event">
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-9 col-sm-11 col-10 text-center main-panel">
                            <h1><u>{eventName}</u></h1>
                            <hr className="hr-4" />
                            <p>Hosted by:</p>
                            <img alt={host} title={host} src={hostImg} />
                            <h5>{host}</h5>
                            <hr className="hr-4" />
                            <h2>Drinks: {type}</h2>
                            <hr className="hr-4" />
                            <h3 className="time-h3">{time}</h3>
                            <h3>@ The {location}</h3>
                            <hr className="hr-4" />
                            <h5>{guests}</h5>
                            <div className="col-12">
                                <p className="guests-p">Guests Attending:</p>
                                {showGuestsImg}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                </div>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center">
                        {showComments}
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <button className="col-xl-6 col-lg-8 col-md-9 col-sm-11 col-10 mt-4" onClick={this.props.handleClick}>Close</button>
                </div>
            </section>
        )
    }
}
export default MainEvent