import { Navbar, Container, Nav, NavItem, NavLink } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useRouter } from "next/router";
import logo from '@/assets/logo_s.png';
import Image from 'next/image';



export default function NavLayout() {
    const router = useRouter();
    console.log(router.pathname);  // TODO: remove this line
    // TODO: Add NavItem color by checking path
    // TODO: navbar sticky top
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={logo.src} width="40" height="40" alt="dsoj-logo" />
                    <strong><span style={{ marginLeft: "0.5rem" }}>DSOJ</span></strong>
                </Navbar.Brand>

                <Navbar.Toggle />
                
                <Navbar.Collapse>
                    <Nav className="mx-auto">
                        {/* TODO: Add NavItem color by checking path */}
                        <NavItem>
                            <NavLink href="/">Overview</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/problem">Problems</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">My Submissions</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Support</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">About</NavLink>
                        </NavItem>
                    </Nav>
                    <Button variant="primary" href="/login">Login</Button> 
                </Navbar.Collapse>

            </Container>
        </Navbar>

    )
}