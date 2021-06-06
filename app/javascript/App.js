import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import {Wishes} from "./components/Pages/Wishes"

function App() {
  return (
    <>
        <Switch>
          <Route exact path="/wishes" component={Wishes} />
        </Switch>
    </>
  )
}

export default App