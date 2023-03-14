import React, { Component } from 'react';

class NotFound extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="text-center" style={{lineHeight:"400px", height:"400px"}}>
                    <div style={{display:"inline-block", verticalAlign:"middle"}}>
                    <h3>Page not found!</h3>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default NotFound