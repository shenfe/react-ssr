import React from 'react'

import Link from 'next/link'

import Layout from './_layout'

import { initStore } from '../store'

import withRedux from 'next-redux-wrapper'

import List from '../components/List'
import Detail from '../components/Detail'

const ListPage = ({ id, filterText }) =>
  <Layout>
    {id == null ? <List filterText={filterText} /> : <Detail id={id}/>}
  </Layout>

ListPage.getInitialProps = ({ query: { id } }) => ({ id })

function select(state) {
  return {
    filterText: state.listFilterText
  }
}

export default withRedux(initStore, select)(ListPage);
