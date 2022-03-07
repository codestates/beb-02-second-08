import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
 



export default function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#" >
                    <img className="LogoStyle" alt="steemit Logo" src="logosteemit.png" decoding="async" data-nimg="fill" />
                    <b>steemthat</b>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Form className="d-flex ms-auto">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-auto"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav
                        className="me-2 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">로그인</Nav.Link>
                        <Nav.Link href="#action2">회원가입</Nav.Link>
                        <Nav.Link href="#action2">
                            <img className="writinglogo" alt="writing Logo" src="writing_icon.svg" />
                        </Nav.Link>
                        <NavDropdown title="Menu" id="navbarScrollingDropdown" drop="start">
                            <NavDropdown.Item href="#action3">환영합니다!</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action4">자주 묻는 질문</NavDropdown.Item>
                            
                            
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}