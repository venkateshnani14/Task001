import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXTwitter, faInstagram, faAndroid } from '@fortawesome/free-brands-svg-icons'

const Footer = ()=>{
    const divStyle = {height:"40vh"}
    return(
        <>
        <div id='footerParent'>
       <div className="row px-4">
        <div className="col-4">
          <div className='d-flex justify-content-start p-4'>
            <img id='footerLogo' src='/img/logo.png' alt='img' height='90%' width="90%" />
          </div>
        </div>
        <div className="col-2 d-flex align-items-end" style={divStyle}>
          <p id='copyright' className='text-light font-weight-bold'>copyright ©2024 stylesterai</p>
        </div>
        <div className="col-2 d-flex align-items-center " style={divStyle}>
          <ul id='footerList'>
          <li className='py-1 text-left'><a href="/">About</a></li>
          <li className='py-1 text-left' ><a href="/">Check our designs</a></li>
          <li className='py-1 text-left'><a href="/">Privacy policy</a></li>
          <li className='py-1 text-left'><a href="/">Returns & Refunds</a></li>
          </ul>
        </div>
        <div className="col-4 d-flex justify-content-end" style={divStyle}>
          <ul id='footerList' className='pt-4 pr-4'>
          <FontAwesomeIcon id='icon' icon={faInstagram} />
          <FontAwesomeIcon id='icon2' icon={faXTwitter} />
          </ul>
        </div>
       </div>
       </div>
    

     <div id='mobFooter' className='bg-black text-light mb-0 pb-0'>
        <ul className='mb-0 pb-0'>
        <li className='py-1'><a href="/">About</a></li>
          <li className='py-1'><a href="/">Check our designs</a></li>
          <li className='py-1'><a href="/">Privacy policy</a></li>
          <li className='py-1'><a href="/">Returns & Refunds</a></li>
          <img className='py-1' src='/img/logo.png' alt='img' height='50vw' width="40%" />
            <li className='pt-1 mb-0 pb-0'><p className='text-light pb-0' style={{fontSize:"10px"}}>copyright ©2024 stylesterai</p>
            </li>
        </ul>
    </div> 
    </>
    )
}
export default Footer