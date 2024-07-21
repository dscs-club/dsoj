import { Navbar, Container, Nav, NavItem, NavLink } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { usePathname } from "next/navigation";
import logo from '@/assets/logo_s.png';
import Image from 'next/image';
import { authentication } from "@/lib/auth";
import axios from "axios";
import { useEffect, useState } from "react";


export default function NavLayout() {
    const pathname = usePathname() ?? '';
    const [sessionState, setSessionState] = useState(false);

    useEffect(() => {
        const getSession = async () => {
            await axios.get("http://127.0.0.1:3000/api/auth/session")
                .then((res) => {
                    if (res.data.session) {
                        setSessionState(true);
                    }
                })
                .catch((err) => {
                    console.error(`Error Occurred when Authenticating: ${err}`);
                });
        }
    })

    async function AccountPart() {
        if (sessionState) {
            return <Button variant="primary" href="/logout">Log out</Button>
        } else {
            return <Button variant="primary" href="/login">Log in</Button>
        }
    }

    // TODO: navbar sticky position
    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="/">
                    <Image src={logo.src} width="40" height="40" alt="dsoj-logo" />
                    <strong><span style={{ marginLeft: "0.5rem" }}>DSOJ</span></strong>
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav className="mx-auto" activeKey={pathname}>
                        {/* TODO: Add NavItem color by checking path */}
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
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
                    <AccountPart />
                </Navbar.Collapse>

            </Container>
        </Navbar>

    )
}


