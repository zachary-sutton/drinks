import React from "react"

class Splash extends React.Component{
    constructor(props){
        super(props)
    }
    render(){  
        return(
            <section className="animated bounceInUp" id="splash">
                <div className="splash-container text-center">
                    <img className="logo" alt="drinks-logo" src="https://i.ibb.co/0qfCRyL/logo.png" />
                    <h3>Why limit happy to an hour?</h3>
                    <button onClick={this.props.handleClick}>
                        <img className="arrow" alt="button-arrow" src="https://www.pikpng.com/pngl/m/58-582351_free-png-download-arrow-left-to-right-png.png" />
                    </button>
                </div>
            </section>
        )
    }
}

export default Splash