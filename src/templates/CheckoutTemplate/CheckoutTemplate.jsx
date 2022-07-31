import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';

export default function CheckoutTemplate(props) {//props: exact, path, Component
    const {Component, ...restProps} = props;
  return (
    <Route {...restProps} render={(routeProps) => { //routeProps: location, history, match
        return (
            <Fragment>
                
                <Component {...routeProps} />
               
            </Fragment>
    )}} />
  )
}
