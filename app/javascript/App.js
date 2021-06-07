import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import {Wishes} from "./components/Pages/Wishes"
import {CompleteReviews} from "./components/Pages/CompleteReviews"
import {Categories} from "./components/Pages/Categories"

function App() {
  return (
    <>
        <Switch>
          <Route exact path="/wishes" component={Wishes} />
          <Route exact path="/wishes/:wish_id/complete_reviews" component={CompleteReviews} />
          <Route exact path="/categories" component={Categories} />
        </Switch>
    </>
  )
}

export default App