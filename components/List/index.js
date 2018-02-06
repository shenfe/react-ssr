import React from 'react';

import Link from 'next/link';

import Loading from '../GLoading';

import { changeFilter } from '../../store/actions';

import { connect } from 'react-redux';

// Only for testing
function lifecycleLogger(name) {
  return target => {
    [
      'componentWillMount',
      'componentDidMount',
      'componentWillReceiveProps',
      'componentWillUpdate',
      'componentDidUpdate',
      'componentWillUnmount'
    ].forEach(m => {
      let fn = target.prototype[m];
      target.prototype[m] = function() {
        console.log(`[${name}] [lifecycle] ${m}`);
        return fn && fn.call(this);
      };
    });
    return target;
  };
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      status: 0
    };

    this.updateFilterText = this.updateFilterText.bind(this);
  }

  componentDidMount() {
    fetch('/api/getList')
      .then(res => res.json())
      .then(res => {
        this.setState({
          status: 1,
          list: res.data
        });
      })
      .catch(err => {
        console.error(err);
      });
  }

  updateFilterText(event) {
    this.props.dispatch(changeFilter(event.target.value));
  }

  render() {
    const listFilterText = this.props.filterText;
    const list = this.state.list.filter(item => String(item.id).includes(listFilterText) || item.title.includes(listFilterText))
      .map(item =>
      <li key={item.id}>
        <a href={'/list/' + item.id}>{item.id}: {item.title}</a>
      </li>
    );
    return (
      <div>
        <input type="text" value={this.props.filterText} onChange={this.updateFilterText} />
        {this.state.status === 0
        ? (<Loading/>)
        : (<ul className="list">{list}</ul>)}

        <style jsx>{`
          ul.list {
            padding: 0 32px;
            list-style: none;
          }
          ul.list :global(li) {
            text-align: left;
            line-height: 32px;
          }
          ul.list :global(li a) {
            display: block;
            text-align: left;
          }
          ul.list :global(li.active a) {
            color: lightseagreen;
          }
          input {
            width: 80%;
            height: 32px;
            margin: 8px;
            font-size: 16px;
            line-height: 32px;
            text-indent: 1em;
          }
        `}</style>
      </div>
    );
  }
}

function select(state) {
  return {
    filterText: state.listFilterText
  }
}

export default connect(select)(lifecycleLogger('List')(List));
