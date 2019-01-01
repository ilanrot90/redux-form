import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../store/actions/user.actions'

class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', async () => {
            await window.gapi.client.init({
                clientId: '715081534760-3btkd772s63n1nuiqk9n2ssfb8085d5m.apps.googleusercontent.com',
                scope: 'email'
            });
            this.auth = window.gapi.auth2.getAuthInstance();

            this.setAuth( this.auth.isSignedIn.get() );
            this.auth.isSignedIn.listen(this.setAuth);
        })
    }

    signIn = () => {
        this.auth.signIn()
    }

    signOut = () => {
        this.auth.signOut()
    }

    setAuth = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn( this.auth.currentUser.get().getId() )
        } else {
            this.props.signOut()
        }
    }

    setAuthBtn = () => {
        return ( this.props.isSignedIn === null ) ? 
                    <div></div>

                    : ( this.props.isSignedIn ) ?
                    <button className="ui red google button" onClick={this.signOut}>
                        <i className="google icon" />
                        Log Out
                    </button> 

                    :<button className="ui green google button" onClick={this.signIn}>
                        <i className="google icon" />
                        Log In
                    </button>
    }
    
    render() { 
        const LogButton = this.setAuthBtn();

        return (  
            <div className="item">{LogButton}</div>
        );
    }
}
 
const mapStateToProps = ({ auth }) => {
    return { isSignedIn: auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth)