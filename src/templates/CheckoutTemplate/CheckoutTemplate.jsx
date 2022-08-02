import React, { Fragment } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { USER_LOGIN } from '../../util/settings/config';

export default function CheckoutTemplate(props) {//props: exact, path, Component
    const {Component, ...restProps} = props;

    if(!localStorage.getItem(USER_LOGIN)){
        return <Redirect to='/login'/>
    }

  return (
    <Route {...restProps} render={(routeProps) => { //routeProps: location, history, match
        return (
            <Fragment>
                
                <Component {...routeProps} />
               
            </Fragment>
    )}} />
  )
}
