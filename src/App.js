import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchData} from "./redux/actions";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.handlefetchData = this.handlefetchData.bind(this);
  }
  handlefetchData() {
    this.props.fetchData();
  }
  render() {
    return (
      <div>
        <button onClick={this.handlefetchData}
        >
          fetch news
        </button>
        <div>
          {this.props.user}
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state) => {
  return {
    user:state.fetchDataReducer.user,
    error:state.fetchDataReducer.error,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData:() => {
      dispatch(fetchData());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
