import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './components/styles/Theme'
import GlobalStyles from './components/styles/GlobalStyle'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from './components/styles/Container.styled'
import { content } from './domain/data/Content'
import Card from './components/Card'


function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (<Card key={index} item={item}/>))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  )
}

export default App
