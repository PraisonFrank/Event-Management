import React from 'react'
import EventCard from '../components/EventCard'
import SectionHeading from '../components/SectionHeading'

const Events = () => {
    const events = [
        {
            id: 1,
            title: 'Event 1',
            content:'Lorem ipsum dolor sit amet'
        },
        {
            id: 2,
            title: 'Event 2',
            content:'Lorem ipsum dolor sit amet'
        },
        {
            id: 3,
            title: 'Event 3',
            content:'Lorem ipsum dolor sit amet'
        },
        {
            id: 4,
            title: 'Event 4',
            content:'Lorem ipsum dolor sit amet'
        },
        {
            id: 5,
            title: 'Event 5',
            content:'Lorem ipsum dolor sit amet'
        },
        {
            id: 6,
            title: 'Event 6',
            content:'Lorem ipsum dolor sit amet'
        }

    ]
    return (
        <section className="events section">
         <SectionHeading title='Events'/>
        <div className="cards">
            {events.map(event=>(
                <EventCard key={event.id} 
                title={event.title}
                content={event.content}/>
                ))}
        </div>
    </section>
    )
}

export default Events
