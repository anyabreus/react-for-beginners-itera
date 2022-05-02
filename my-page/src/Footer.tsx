import info from './info.json';

export const Footer = () => (
  <footer>
    <p>You can call me: {info.contacts.tel} <br /> or email me: {info.contacts.email}</p>
  </footer>
);
