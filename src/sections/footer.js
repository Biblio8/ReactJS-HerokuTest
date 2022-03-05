import React from 'react';

export default function Footer() {
    return (
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href={0}>Training and Workshops</a></li>
                                <li><a href={0}>Research Consultancy</a></li>
                                <li><a href={0}>B8 Research Tools</a></li>
                                <li><a href={0}>Proofreading</a></li>
                            </ul>
                        </div>
                        {/* <div className="col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href={0}>Web design</a></li>
                                <li><a href={0}>Development</a></li>
                                <li><a href={0}>Hosting</a></li>
                            </ul>
                        </div> */}
                        {/* <div className="col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href={0}>Company</a></li>
                                <li><a href={0}>Team</a></li>
                                <li><a href={0}>Careers</a></li>
                            </ul>
                        </div> */}
                        <div className="col-md-3 item text">
                            <h3>www.Biblio8.com</h3>
                            <p>An Online Ecosystem for Researchers and Scholars to help them complete their research work 10x faster.</p>
                        </div>
                        <div className="col item social"><a href="https://www.facebook.com/109942174887543/posts/121655537049540/?app=fbl"><i className="fa fa-facebook"></i></a><a href={0}><i className="fa fa-twitter"></i></a><a href="https://www.linkedin.com/in/biblio-8-4495a1230"><i className="fa fa-linkedin"></i></a><a href="https://www.instagram.com/tv/CZpYjPlKKuD/?utm_medium=copy_link"><i className="fa fa-instagram"></i></a></div>
                    </div>
                    <p className="copyright">Biblio8.com © 2022</p>
                </div>
            </footer>
        </div>
    );
}
