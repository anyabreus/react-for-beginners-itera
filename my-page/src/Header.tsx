import { FC } from "react";

type H1Props = {firstName: string};

export const Header: FC<H1Props> = (props) => (
  <header className="App-header">
    <h1>
      {props.firstName}
    </h1>
  </header>
);
