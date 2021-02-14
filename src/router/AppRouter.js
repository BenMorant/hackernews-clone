import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Header from '../components/Header'
import PageNotFound from '../components/PageNotFound'
import React from 'react'
import ShowStories from '../components/ShowStories'

const AppRouter = () => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" render={() => <Redirect to="/top" />} exact />
        <Route
          path="/:type"
          render={({ match }) => {
            const { type } = match.params
            if (!['top', 'new', 'best'].includes(type)) {
              return <Redirect to="/" />
            }
            return <ShowStories type={type} />
          }}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
