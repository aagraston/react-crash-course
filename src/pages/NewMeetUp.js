import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import { useNavigate } from 'react-router-dom'

function NewMeetUpPage() {
  const navigate = useNavigate()

  function handleAddMeetup(meetupData) {
    fetch(
      'https://react-crash-course-project-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'content-type': 'application/json',
        },
      }
    ).then(() => {
      navigate('/', { replace: true })
    })
  }

  return (
    <section>
      <h1>New Meet Up Page</h1>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </section>
  )
}
export default NewMeetUpPage
