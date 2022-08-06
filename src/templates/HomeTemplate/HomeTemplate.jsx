import React, { Fragment, useEffect } from 'react'
import { Route } from 'react-router-dom'
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import HomeCarousel from './Layout/HomeCarousel/HomeCarousel';

export default function HomeTemplate(props) {//props: exact, path, Component
    const {Component, ...restProps} = props;
    useEffect(()=> {window.scrollTo(0,0)})
  return (
    <Route {...restProps} render={(routeProps) => { //routeProps: location, history, match
        return (
            <Fragment>
                <Header {...routeProps} />
                <Component {...routeProps} />
                <Footer/>
            </Fragment>
    )}} />
  )
}
