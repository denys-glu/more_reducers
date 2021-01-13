import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserHeader extends Component {
  render() {
    return (
      <div className="header">
        { this.props.user ? this.props.user.name : null }
      </div>
    )
  };
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(UserHeader);