import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Login} from './Pages/Login'
import {Home} from './Pages/Home'



export function Routes(){
  return (
    <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/home" component={Home}/>
          </Switch>
    </BrowserRouter>
  )
}