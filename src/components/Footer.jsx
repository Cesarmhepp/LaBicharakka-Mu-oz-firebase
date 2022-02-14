import { React, Fragment } from 'react'
import { BsFacebook, BsInstagram, BsGoogle, BsTwitter, BsLinkedin } from 'react-icons/bs';
const Footer = () => {

    return <Fragment>
        <footer className="page-footer font-small blue pt-4 text-dark border-top bg-details">
            <div className="container-fluid text-center text-md-left">
                <section className="mb-4">

                    <a className="btn btn-floating m-1" href="/#" role="button"><BsFacebook /></a>

                    <a className="btn  btn-floating m-1" href="/#" role="button"><BsInstagram /></a>


                    <a className="btn  btn-floating m-1" href="/#" role="button"><BsGoogle /></a>


                    <a className="btn  btn-floating m-1" href="/#" role="button" ><BsTwitter /></a>


                    <a className="btn  btn-floating m-1" href="/#" role="button"><BsLinkedin /></a>

                </section>

            </div>

            <div className="footer-copyright text-center py-3">© 2022 Copyright:
                <a href="/#" style={{ textDecoration: "none" }}> La Bicharraka</a>
            </div>

        </footer>
    </Fragment >

}




export default Footer;

