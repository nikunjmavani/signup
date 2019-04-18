import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Switch from 'react-bootstrap-switch';

class RegisterPage extends React.Component {
  state = {
    squares1to6: "",
    squares7and8: "",

    driver: true,
  };
  componentDidMount() {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", this.followCursor);
  }
  componentWillUnmount() {
    document.body.classList.toggle("register-page");
    document.documentElement.removeEventListener(
      "mousemove",
      this.followCursor
    );
  }
  followCursor = event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    this.setState({
      squares1to6:
        "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)",
      squares7and8:
        "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    });
  };

  handleChange = name => {
    this.setState({ driver: !this.state.driver });
  };

  render() {

    const { driver } = this.state;

    return (
      <>
        {/* <ExamplesNavbar /> */}
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <div
                      className="square square-7"
                      id="square7"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <div
                      className="square square-8"
                      id="square8"
                      style={{ transform: this.state.squares7and8 }}
                    />
                    <Card className="card-register">
                      <CardHeader>
                        <CardImg
                          alt="..."
                          src={require("assets/img/square-purple-1.png")}
                        />
                        <CardTitle tag="h4">Sign Up</CardTitle>
                      </CardHeader>
                      <CardBody style={{ minHeight: '362px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', fontSize: '16px', margin: '6px 2px' }}>
                          {
                            !driver ?
                              <strong> Client </strong>
                              : <div style={{ opacity: .8 }}> Client </div>
                          }
                          <Switch value={driver} offColor="" offText="" onColor="" onText=""  onChange={() => this.handleChange('driver')} style={{ marginBottom: 'unset', margin: '0 8px' }} />
                          {
                            driver ?
                              <strong> Driver </strong>
                              : <div style={{ opacity: .8 }}> Driver </div>
                          }
                        </div>
                        
                        <Form className="form">
                        {
                            driver
                              ? (
                                <React.Fragment>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.fullNameFocus
                                    })}
                                  >
                                    <Input
                                      placeholder="Name"
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ fullNameFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ fullNameFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.emailFocus
                                    })}
                                  >
                                    <Input
                                      placeholder="Phone No"
                                      type="text"
                                      onFocus={e => this.setState({ emailFocus: true })}
                                      onBlur={e => this.setState({ emailFocus: false })}
                                    />
                                  </InputGroup>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.passwordFocus
                                    })}
                                  >
                                    <Input
                                      placeholder="Address"
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ passwordFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ passwordFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.passwordFocus
                                    })}
                                  >
                                    <Input
                                      placeholder="Aadhar card number"
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ passwordFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ passwordFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.passwordFocus
                                    })}
                                  >
                                    <Input
                                      placeholder="PAN Card Number"
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ passwordFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ passwordFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.passwordFocus
                                    })}
                                  >
                                    <Input
                                      placeholder="Email"
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ passwordFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ passwordFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                  </React.Fragment>
                              ) : (
                                  <React.Fragment>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.fullNameFocus
                                    })}
                                  >
                                    <Input
                                      placeholder="Name"
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ fullNameFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ fullNameFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.emailFocus
                                    })}
                                  >
                                    <Input
                                      placeholder="Company Name"
                                      type="text"
                                      onFocus={e => this.setState({ emailFocus: true })}
                                      onBlur={e => this.setState({ emailFocus: false })}
                                    />
                                  </InputGroup>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.passwordFocus
                                    })}
                                  >
                                    <Input
                                      placeholder="Email"
                                      type="email"
                                      onFocus={e =>
                                        this.setState({ passwordFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ passwordFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.passwordFocus
                                    })}
                                  >
                                    <Input
                                      placeholder="Phone No"
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ passwordFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ passwordFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                  <InputGroup
                                    className={classnames({
                                      "input-group-focus": this.state.passwordFocus
                                    })}
                                  >
                                    <Input
                                      placeholder="Address"
                                      type="text"
                                      onFocus={e =>
                                        this.setState({ passwordFocus: true })
                                      }
                                      onBlur={e =>
                                        this.setState({ passwordFocus: false })
                                      }
                                    />
                                  </InputGroup>
                                  </React.Fragment>
                                
                              )
                        }

                        </Form>
                        
                      </CardBody>
                      <CardFooter>
                        <Button className="btn-round" color="primary" size="lg">
                          Get Started
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
                <div className="register-bg" />
                {/* <div
                  className="square square-1"
                  id="square1"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-2"
                  id="square2"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-3"
                  id="square3"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-4"
                  id="square4"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-5"
                  id="square5"
                  style={{ transform: this.state.squares1to6 }}
                />
                <div
                  className="square square-6"
                  id="square6"
                  style={{ transform: this.state.squares1to6 }}
                /> */}
              </Container>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </>
    );
  }
}

export default RegisterPage;
