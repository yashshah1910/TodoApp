import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

export const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <p className="footer-heart">
                    Made with <g-emoji className="g-emoji" alias="heart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png">
                        <img className="emoji" alt="heart" height="20" width="20" src="https://github.githubassets.com/images/icons/emoji/unicode/2764.png" /></g-emoji> by <a href="https://www.linkedin.com/in/yash2001/" target="_blank" rel="noopener">Yash Shah</a>
                </p>
            </div>
        </MDBFooter>
    );
}
