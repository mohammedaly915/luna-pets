import React from "react"
import {Link} from "react-router-dom"
import image from '../Images/Dog nose.svg'
function Footer() {
    const links=["About US","blogs","gallery","Home","contat"]
    const latest=["About US","blogs","gallery","Home","contat"]
    return(
        <>
<footer className="page-footer font-small blue pt-4 footer">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <div>
                        <img src={image} alt='logo'/>
                        <h5 className="text-uppercase">Luna pets</h5>
                    </div>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3 helps">
                    <h5 className="text-uppercase">Support</h5>
                    {
                        links.map((link,i)=>(
                        <ul key={i} className="list-unstyled" >
                            <li><a href="#!">{link}</a></li>
                        </ul>
                    ))
                    }
                </div>

                <div className="col-md-3 mb-md-0 mb-3 helps">
                    <h5 className="text-uppercase">Have A Question ?</h5>
                    
                            <ul className="list-unstyled">
                                <li><Link to="https://twitter.com">
                                    info@lunapets.com
                                </Link></li>
                            </ul>
                        
                        
                    
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3 rights">© 2022 Copyright:
            <a href="https://mdbootstrap.com/"> Luna Pets</a>
        </div>

    </footer>
        </>
    )
}  

export default Footer