import Head from '../components/head'
import Header from '../components/Header'

import globalStyles from '../assets/global.css'

export default ({ children }) => {
  const defaultProps = {
    navs: [
      { alias: '/list', text: 'list' },
      { alias: '/about', text: 'about' }
    ]
  }

  return (
    <div>
      <Head title="Home" />
      <div className="App">
        <Header links={defaultProps.navs} />
        {children}
      </div>

      <style jsx global>{globalStyles}</style>
      <style jsx>{`
        :global(body) {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }
      `}</style>
    </div>
  )
}
