import React from 'react';
import './Home.css';

export default function Body() {
  return (
    <div className='About'>
    <div className='Image'>
    <img src='https://images.unsplash.com/photo-1538333581680-29dd4752ddf2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhZmUlMjBpbnRlcmlvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&h=500'/>

    </div>
    <div className='Description'>
        <h1>WHO WE ARE</h1>
        <p className='text-muted'>Bistara Cafe is a restaurant and bar located in thamel, kathmandu, close to yellow pagoda hotel and easily reachable. The building was built during the Rana Era. Most of the bricks have inscriptions showing that they were made around 1903. Great pains have been taken to ensure that the renovations in no way destroyed the building’s warm and welcoming character. And that's what you will find here—genuine warmth and hospitality to make you feel comfortable and relaxed.</p>
        <button className='Read-more'>
            <a>Read More</a>
        </button>
    </div>
    
    </div>
  )
}
