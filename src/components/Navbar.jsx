const Navbar = ()=>{
    const logoStyle = {height:"8vh",maxWidth:'50vw'}
   return(
    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
    <img src="/img/logo.png" alt="logo" style={logoStyle} />
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse py-4" id="navbarNav">
      <ul id="navbarUL" className="navbar-nav d-flex justify-content-between">
        <li className="nav-item active">
          <a className="nav-link mx-3" href='/'>Home<span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-light" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3 text-light" href="/">Check our designs</a>
        </li>
        <li className="nav-item">
          <a id='contactNavLink ml-3 me-5' className="nav-link text-light" href='/'>Contact us</a>
        </li>
        <div className="loginDiv ml-5"><button id="loginBtn" className="btn btn-lg text-light">LOGIN/SIGNUP</button></div>
      </ul>
    </div>
  </nav>
   )
}
export default Navbar