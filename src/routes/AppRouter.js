import React from 'react'
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom'
import Home from '../components/Home'
import Users from '../components/Users'
import Create from '../components/Create'
import NotFoundPage from '../components/NotFoundPage'
import View from '../components/View'
import '../index.css'

const Header = () => (
    <header>
        <NavLink to = '/' exact activeClassName='is-active'>Home</NavLink>
        <NavLink to = '/users' exact activeClassName='is-active'>Users</NavLink>
        <NavLink to = '/create' exact activeClassName='is-active'>Create</NavLink> 
    </header>
)

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/users' exact component={Users} />
            <Route path='/create' exact component={Create} />
            <Route path='/users/view/:id' exact component={View} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

export default AppRouter