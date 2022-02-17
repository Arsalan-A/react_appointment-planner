import React from 'react';

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Name'
        />
        <input
          type='text'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder='Phone'
          pattern='((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}'
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};
