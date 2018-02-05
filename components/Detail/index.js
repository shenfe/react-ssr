import React from "react";

import Loading from '../GLoading';

class Detail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{padding: '0 32px'}}>
        {this.props.status === 0 && <Loading />}
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Detail;
