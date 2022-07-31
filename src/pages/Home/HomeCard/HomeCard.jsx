import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {MultipleRowSlick} from '../../../components/ReactSlick/MultipleRowSlick';


export default function HomeCard() {  
  return (
    <div className="container mx-auto">
        <section className="text-gray-600 body-font">
            <div className="container px-10 py-24 mx-auto">
                <MultipleRowSlick/>
            </div>
        </section>
    </div>
  )
}
