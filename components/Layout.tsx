import Head from "next/head";
import NavBar from "./NavBar/NavBar";
import React from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";

interface Props {}

interface State {
  config: IConfig[];
}
interface IConfig {
  menu: IMenu[];
}
interface IMenu {
  value: string;
  href: string;
}
class Layout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      config: [
        {
          menu: [
            {
              value: "Home",
              href: "#MainSlide",
            },
            {
              value: "About",
              href: "about",
            },
            {
              value: "Facebook page",
              href: "https://www.facebook.com",
            },
            {
              value: "Profile",
              href: "#Profile",
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fixed="top" expand="md" className="menu-bar">
          <Container>
            {/* <Head>
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              <script
                src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossOrigin="anonymous"
              ></script>
              <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                crossOrigin="anonymous"
              />
              <script
                src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"
                integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k"
                crossOrigin="anonymous"
              ></script>
            </Head>

            <NavBar /> */}
            {/* <Navbar.Toggle aria-aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"> */}
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav
                className="justify-content-center text-center"
                style={{ width: "85%" }}
              >
                {this.state.config.map((b) =>
                  b.menu.map((c) => (
                    <Nav.Link
                      href={c.href}
                      className="menu-bar-link"
                      style={{
                        paddingRight: "20rem; !important",
                        paddingLeft: "20rem; !important",
                      }}
                    >
                      {c.value}
                    </Nav.Link>
                  ))
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="container">
          <div className="layout-Kotai">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Layout;
