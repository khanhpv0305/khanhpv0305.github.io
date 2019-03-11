import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Helmet } from 'react-helmet'
import { PersistGate } from 'redux-persist/es/integration/react'

// Layout
import Layout from 'containers/Layout'

// Pages
import Home from 'pages/Home'
import Edit from 'pages/Edit'

// Components
import TopLevelOverlayWithSpinner from 'containers/TopLevelOverlayWithSpinner'

// Global Styles
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyle from 'style/GlobalStyle'

// Store
import { store, persistor } from 'store'

export default props => <Provider store={store}>
  <PersistGate
    loading={<span>Loading...</span>}
    persistor={persistor}
  >
    <ThemeProvider theme={{
      breakpoints: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px'
      }
    }}>
      <>
        <Helmet defaultTitle="NASA Images" />

        <GlobalStyle />
        
        <Router>
          <Route render={props => <Layout {...props}>
            <Switch>
              <Route exact path="/" component={Home} />

              <Route exact path="/edit/:imageId" component={Edit} />
            </Switch>
          </Layout>} />
        </Router>

        <TopLevelOverlayWithSpinner />
      </>
    </ThemeProvider>
  </PersistGate>
</Provider>