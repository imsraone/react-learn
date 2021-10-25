import React from 'react'
import './card-list.css'
import {Card} from '../card/card'

export const CardList = props => (
    <div className='card-list'>
          {
            props.users.map(item => (
                <Card key={item.id} user={item} />
            ))
          }
    </div>
);