import React from 'react'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'Nepal Railway',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/1/1b/Abandoned_Train_at_Janakpur_station%2C_Nepal_Railways--IMG_7925.jpg',
    address: 'Railway place, 5672 Nepal',
    description: 'This is a meeting spot for drug deals, plain and simple.',
  },
  {
    id: 'm2',
    title: 'The Posh Park',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/c/cf/Posh_picnic_at_Wentworth_Castle_-_geograph.org.uk_-_3066941.jpg',
    address: 'Posh way, 1234 Fan City',
    description: 'This is most certainly not a meeting place for drug deals.',
  },
]

function AllMeetUpsPage() {
  return (
    <section>
      <h1>All Meet Ups Page</h1>
      {DUMMY_DATA.map((meetup) => {
        return <li key={meetup.id}>{meetup.title}</li>
      })}
    </section>
  )
}
export default AllMeetUpsPage
