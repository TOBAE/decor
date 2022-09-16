import React from 'react'
import { card } from '../data'

export default function Cards() {
    // destructuring function
    const { items, heading } = card;
    return(
        <section>
            <h1>{ heading}</h1>
            <div className='card1'>
                {items.map((item, index) => {
                    // destructuring
                    const { title, subtitle, icon, image } = item;
                    return (
                        <div key={index} className='card'>
                            <div>
                                <img src={image.type} alt='images' />
                                <div>
                                    <div>{icon}</div>
                                    <div>
                                        <h4>{title}</h4>
                                        <p>{subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })};
            </div>
        </section>
    )
}