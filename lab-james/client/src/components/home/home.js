import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component {

  constructor(props){
    super(props);

    console.log(this.props.users);

    this.state = {
      user: this.props.users[0].username
    } || {};
  }

  render(){
    return(
      <React.Fragment>
        <h1>Welcome {this.state.user}</h1>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Home);
