import { Button } from "./styles/Buttons.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { Image, Logo, Nav, StyledHeader } from "./styles/Header.styled"

import appLogo from '../assets/logo.svg'
import devImg from '../assets/developer.jpg'

const Header: React.FC = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src={appLogo} alt=""/>
                    <Button>Try it Free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build the Community Your Fans Will Love</h1>
                        <p>
                            Ruper re-imagines the way we build communities. You have a voice,
                            but so does your audience. Create connections with your users as
                            you engage in genuine discussion.
                        </p>
                        <Button bg="#ff0099" color="#fff">
                            Get Started for Free
                        </Button>
                    </div>
                    <Image src={devImg} alt='' />
                </Flex>
            </Container>
        </StyledHeader>
    )
}

export default Header