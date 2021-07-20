import Nav from './header-nav'
import Link from 'next/link'
import Footer from './footer'
const Layout = ({children}: any) => {
    return (
        <div>
            <header>
                <Nav></Nav>
            </header>
            <section>{children}</section>
            <Footer></Footer>
        </div>
    )
}

export default Layout;