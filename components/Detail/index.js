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

  static async getInitialProps () {
    const id = this.props.id;
    const res = await fetch(`/api/getDetail?id=${id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          status: 1,
          id: id,
          title: res.data.title,
          content: res.data.content
        })
      })
      .catch(err => {
        console.error(err)
      })
    return res
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
