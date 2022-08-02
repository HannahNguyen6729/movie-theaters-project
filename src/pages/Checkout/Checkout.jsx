import React from 'react'
import {useSelector} from 'react-redux'

export default function Checkout(props) {
  const userLogin = useSelector(state => state.LoginReducer.userInfo);
  //props.match.params.id
  return (
    <div>Checkout</div>
  )
}
