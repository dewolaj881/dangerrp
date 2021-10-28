import Nav from '../components/Nav'
import Showcase from '../components/Showcase'
import About from '../components/About'
import Transport from '../components/Transport'
import Footer from '../components/Footer'
import IndexPage from '../components/IndexPage'

export default function Home() {
  return (
    <body className="bg-gray-900 ">
      <header>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet" />
        <div>
          <IndexPage></IndexPage>
          <Nav></Nav>
          <Showcase></Showcase>
          <About></About>
          <Transport></Transport>
          <Footer></Footer>
        </div>
      </header>
    </body>
  )
}