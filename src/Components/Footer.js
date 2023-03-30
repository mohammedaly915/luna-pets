import React from "react"
import {Link} from "react-router-dom"
function Footer() {
    const links=["About US","blogs","gallery","Home","contat"]
    const latest=["About US","blogs","gallery","Home","contat"]
    return(
        <>
<footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Logo</h5>
                    <p>shopping Rabidly</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0"/>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Support</h5>
                    {
                        links.map((link,i)=>(
                        <ul key={i} className="list-unstyled" >
                            <li><a href="#!">{link}</a></li>
                        </ul>
                    ))
                    }
                </div>

                <div className="col-md-3 mb-md-0 mb-3">
                    <h5 className="text-uppercase">Socials</h5>
                    {
                        latest.map((le,i)=>(
                            <ul className="list-unstyled">
                                <li><Link to="https://twitter.com">{le}</Link></li>
                            </ul>
                        ))
                        
                    }
                    
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2022 Copyright:
            <a href="https://mdbootstrap.com/"> EDKO.com</a>
        </div>

    </footer>
        </>
    )
}  

export default Footer