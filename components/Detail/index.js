import React from "react";

import Loading from '../GLoading';

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
      id: null,
      title: '',
      content: ''
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    fetch(`/api/getDetail?id=${id}`)
      .then(res => {
        this.setState({
          status: 1,
          id: id,
          title: res.data.data.title,
          content: res.data.data.content
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div style={{padding: '0 32px'}}>
        {this.state.status === 0 && <Loading />}
        <h1>{this.state.title}</h1>
        <p>{this.state.content}</p>
      </div>
    );
  }
}

export default Detail;
