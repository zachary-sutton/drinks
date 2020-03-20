import React from "react"

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <section id="header">
                <div className="container-fluid">
                    <div className="row col-12 d-flex justify-content-center">
                        <img alt="drinks-logo" src="https://i.ibb.co/0qfCRyL/logo.png" />
                    </div>
                <hr />
                    <div className="row d-flex justify-content-center">
                        <h5 className="pt-2">Sort Events:</h5>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <button className="col-md-2 col-10" onClick={this.props.handleABC}>Alphabetically</button>
                        <button className="col-md-2 col-10" onClick={this.props.handleDate}>Date</button>
                    </div>
                    <hr />
                </div>
            </section>
        )
    }
}

export default Header