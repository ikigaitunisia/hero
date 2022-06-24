import React, { PropTypes, Component } from 'react';
import { withRouter } from "react-router-dom";



class RedirectToTransaction extends Component {
    onUnload = e => { // the method that will be used for both add and remove event
       e.preventDefault();
       window.open("https://hegemony.donftify.digital:3001/cardtransaction", '_blank', 'noopener,noreferrer');
      }

    componentDidMount() {
       window.addEventListener("beforeunload", this.onUnload);
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.onUnload);
    }

    render() {
        return (
            <div>
                Some content
            </div>
        );
    }

}

export default MyComponent