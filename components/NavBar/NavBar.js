import Link from 'next/link'

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <form className="form-inline">
      <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="button">Search</button>
      <Link href="/"><a>home</a></Link>
      <Link href="/about"><a>about</a></Link>
      <Link href="https://www.facebook.com/Taiareerob/"><a>Facebook page</a></Link>
      <Link href="/profile"><a>profile</a></Link>
      <style jsx>
      {`
        a {
          padding: 0 5px;
        }
      `}
      </style>
    </form>
  </nav>
)

export default NavBar