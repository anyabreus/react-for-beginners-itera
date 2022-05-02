import info from './info.json';

export const ShortInfo = () => (
  <section className="Section">
    <h2>Info about me</h2>
    <p><b>Date of birth: </b>{info.shortBio.dateOfBirth}</p>
    <p><b>City of living: </b>{info.shortBio.city}</p>
    <p><b>About me: </b>{info.shortBio.aboutMe}</p>
  </section>
);
