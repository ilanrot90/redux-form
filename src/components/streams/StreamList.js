import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStreams } from '../../store/actions/streams.action';

class StreamList extends Component {

  
  componentDidMount() {
    this.props.getStreams()
  }

  showStreams = () => {
    const { streamsList } = this.props;
    const streams = streamsList.map( stream => <li key={stream.id}>{stream.title}</li> );

    // return (streamsList) ? streams : 'Loading...';
    return streams
  }
  
  render() {
    const show = this.showStreams();

    return(
      <ul>
        {show}
      </ul>
    );
  }
}

const mapStateToProps = ({ streams }) => ({ streamsList: streams.streamsList });

export default connect(mapStateToProps,  { getStreams })(StreamList);