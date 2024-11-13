import React from 'react'

const page = () => {
  const isUserLoggedIn = false;
  if (!isUserLoggedIn) {
    return <div>Please sign in to ask a question.</div>
  }
  return (
    <div>
      Askquestion
    </div>
  )
}

export default page

