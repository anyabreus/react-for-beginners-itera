import { PureComponent } from 'react';

type FootProps = {tel: string, email: string}

export class Footer extends PureComponent<FootProps> {
  render () {
    return <footer>
      <p>You can call me: {this.props.tel} <br /> or email me: {this.props.email}</p>
    </footer>
  }
}