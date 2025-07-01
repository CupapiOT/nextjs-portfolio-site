import React from "react";

interface NavbarProps {
  // Example: <Navbar links={[["#home", "Home"], ["#projects", "Projects"]]}></Navbar>
  links: Array<Array<string>>;
  children?: React.ReactNode;
}

export default function Navbar(props: NavbarProps) {
}
