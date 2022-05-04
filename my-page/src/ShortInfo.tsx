import { Component } from 'react';

type ShortBioProps = {
  dateOfBirth: string,
  city: string,
  aboutMe: string
};

export class ShortInfo extends Component<ShortBioProps> {
  render() {
    return <section className="Section">
      <h2>Info about me</h2>
      <p><b>Date of birth: </b>{this.props.dateOfBirth}</p>
      <p><b>City of living: </b>{this.props.city}</p>
      <p><b>About me: </b>{this.props.aboutMe}</p>
    </section>
  }  
}
