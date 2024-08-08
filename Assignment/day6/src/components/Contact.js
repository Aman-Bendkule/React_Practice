import React from 'react'

export const Contact = ({contact}) => {
  return (
    <div style={contactStyle}>
      <h2>{contact.name}</h2>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  )
}

const contactStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    marginBottom: '10px'
  };
