import React from 'react';

export const ContactPicker = ({ contacts, setContact, contact }) => {
  const contactList = contacts.map((contact, index) => {
    return (
      <option key={index} value={contact.name}>
        {contact.name}
      </option>
    );
  });

  return (
    <select
      name='contact'
      id='contact'
      onChange={(e) => setContact(e.target.value)}
      value={contact}
    >
      <option value={contact} key={-1} disabled hidden>
        {contact}
      </option>
      {contactList}
    </select>
  );
};
