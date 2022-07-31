import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import HomeCarousel from './Layout/HomeCarousel/HomeCarousel';

export default function HomeTemplate(props) {//props: exact, path, Component
    const {Component, ...restProps} = props;
  return (
    <Route {...restProps} render={(routeProps) => { //routeProps: location, history, match
        return (
            <Fragment>
                <Header {...routeProps} />
                <HomeCarousel {...routeProps} />
                <Component {...routeProps} />
                <Footer/>
            </Fragment>
    )}} />
  )
}
