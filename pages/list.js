import React from 'react'

import Link from 'next/link'

import Layout from './_layout'

import { initStore } from '../store'

import withRedux from 'next-redux-wrapper'

import List from '../components/List'
import Detail from '../components/Detail'

import 'isomorphic-unfetch'

const ListPage = ({ id, title, content, status, filterText }) =>
  <Layout>
    {id == null ? <List filterText={filterText} /> : <Detail id={id} title={title} content={content} status={status}/>}
  </Layout>

const apiPath = 'http://localhost:3000'

ListPage.getInitialProps = async ({ query: { id } }) => {
  if (id == null) return {}
  const res = await fetch(`${apiPath}/api/getDetail?id=${id}`)
    .then(res => res.json())
    .then(res => {
      return {
        status: 1,
        id,
        title: res.data.title,
        content: res.data.content
      }
    })
  return res
}

function select(state) {
  return {
    filterText: state.listFilterText
  }
}

export default withRedux(initStore, select)(ListPage);
