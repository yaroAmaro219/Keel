import React, { Component } from 'react';
import insta from '../images/instagram1.svg'

class Footer extends Component {
  render() {
    return (
      <div class='footer'>
      <div class='inner-footer'>
        <div class='footer-copyright'>
          <h5>Allie Keel © </h5>
        </div>
        <div class='footer-options'>
          <a class='footer-choice' href='/about'>About</a>
          <a class='footer-choice' href='/contact'>Contact</a>
        </div>
          <div class='social-container'>
          <a class='social' href='https://www.instagram.com/allie.keel/' target="_blank" rel="noopener noreferrer" ><img src={insta} /></a>
          <a class='social' target="_blank" rel="noopener noreferrer" href='https://www.tiktok.com/@allie.keel?lang=en'>
          <svg height="35" viewBox="0 0 250 250" width="35" xmlns="http://www.w3.org/2000/svg"><g clip-rule="evenodd" fill-rule="evenodd"><path d="M25 0h200c13.808 0 25 11.192 25 25v200c0 13.808-11.192 25-25 25H25c-13.808 0-25-11.192-25-25V25C0 11.192 11.192 0 25 0z" fill="#010101"/><path d="M156.98 230c7.607 0 13.774-6.117 13.774-13.662s-6.167-13.663-13.774-13.663h-2.075c7.607 0 13.774 6.118 13.774 13.663S162.512 230 154.905 230z" fill="#ee1d51"/><path d="M154.717 202.675h-2.075c-7.607 0-13.775 6.118-13.775 13.663S145.035 230 152.642 230h2.075c-7.608 0-13.775-6.117-13.775-13.662s6.167-13.663 13.775-13.663z" fill="#66c8cf"/><ellipse cx="154.811" cy="216.338" fill="#010101" rx="6.699" ry="6.643"/><path d="M50 196.5v6.925h8.112v26.388h8.115v-26.201h6.603l2.264-7.112zm66.415 0v6.925h8.112v26.388h8.115v-26.201h6.603l2.264-7.112zm-39.81 3.93c0-2.17 1.771-3.93 3.959-3.93 2.19 0 3.963 1.76 3.963 3.93s-1.772 3.93-3.963 3.93c-2.188-.001-3.959-1.76-3.959-3.93zm0 6.738h7.922v22.645h-7.922zM87.924 196.5v33.313h7.925v-8.608l2.453-2.248L106.037 230h8.49l-11.133-16.095 10-9.733h-9.622l-7.923 7.86V196.5zm85.47 0v33.313h7.926v-8.608l2.452-2.248L191.509 230H200l-11.133-16.095 10-9.733h-9.622l-7.925 7.86V196.5z" fill="#fff"/><path d="M161.167 81.186c10.944 7.819 24.352 12.42 38.832 12.42V65.755a39.26 39.26 0 0 1-8.155-.853v21.923c-14.479 0-27.885-4.601-38.832-12.42v56.835c0 28.432-23.06 51.479-51.505 51.479-10.613 0-20.478-3.207-28.673-8.707C82.187 183.57 95.23 189.5 109.66 189.5c28.447 0 51.508-23.047 51.508-51.48V81.186zm10.06-28.098c-5.593-6.107-9.265-14-10.06-22.726V26.78h-7.728c1.945 11.09 8.58 20.565 17.788 26.308zm-80.402 99.107a23.445 23.445 0 0 1-4.806-14.256c0-13.004 10.548-23.547 23.561-23.547a23.6 23.6 0 0 1 7.147 1.103V87.022a51.97 51.97 0 0 0-8.152-.469v22.162a23.619 23.619 0 0 0-7.15-1.103c-13.013 0-23.56 10.543-23.56 23.548 0 9.195 5.272 17.157 12.96 21.035z" fill="#ee1d52"/><path d="M153.012 74.405c10.947 7.819 24.353 12.42 38.832 12.42V64.902c-8.082-1.72-15.237-5.942-20.617-11.814-9.208-5.743-15.843-15.218-17.788-26.308H133.14v111.239c-.046 12.968-10.576 23.468-23.561 23.468-7.652 0-14.45-3.645-18.755-9.292-7.688-3.878-12.96-11.84-12.96-21.035 0-13.005 10.547-23.548 23.56-23.548 2.493 0 4.896.388 7.15 1.103V86.553c-27.945.577-50.42 23.399-50.42 51.467 0 14.011 5.597 26.713 14.68 35.993 8.195 5.5 18.06 8.707 28.673 8.707 28.445 0 51.505-23.048 51.505-51.479z" fill="#fff"/><path d="M191.844 64.902v-5.928a38.84 38.84 0 0 1-20.617-5.887 38.948 38.948 0 0 0 20.617 11.815zM153.439 26.78a39.524 39.524 0 0 1-.427-3.198V20h-28.028v111.24c-.045 12.967-10.574 23.467-23.56 23.467-3.813 0-7.412-.904-10.6-2.512 4.305 5.647 11.103 9.292 18.755 9.292 12.984 0 23.515-10.5 23.561-23.468V26.78zm-44.864 59.773v-6.311a51.97 51.97 0 0 0-7.067-.479C73.06 79.763 50 102.811 50 131.24c0 17.824 9.063 33.532 22.835 42.772-9.083-9.28-14.68-21.982-14.68-35.993 0-28.067 22.474-50.889 50.42-51.466z" fill="#69c9d0"/><path d="M154.904 230c7.607 0 13.775-6.117 13.775-13.662s-6.168-13.663-13.775-13.663h-.188c-7.607 0-13.774 6.118-13.774 13.663S147.109 230 154.716 230zm-6.792-13.662c0-3.67 3-6.643 6.7-6.643 3.697 0 6.697 2.973 6.697 6.643s-3 6.645-6.697 6.645c-3.7-.001-6.7-2.975-6.7-6.645z" fill="#fff"/></g></svg>
          </a>
          <a class='social' target="_blank" rel="noopener noreferrer" href='https://www.backstage.com/u/allie-keel'>
          <svg height="35" viewBox="0 0 250 250" width="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337.46 428.5"><path d="M303 166.05a80.69 80.69 0 0013.45-10.37c.79-.77 1.55-1.53 2.3-2.3a83.12 83.12 0 007.93-9.38 63.69 63.69 0 006.32-10.77 48.58 48.58 0 004.35-16.4c1.49-19.39-10-38.67-35.62-54.22L198.56 0 78.3 115.23 0 190.25l108.6 65.91a111.59 111.59 0 0057.76 16.41c24.92 0 48.8-8.8 66.42-25.69 19.16-18.36 25.52-42.12 13.7-61.87a49.22 49.22 0 00-6.8-8.87 89.17 89.17 0 0019.32 2.15h.15a85.08 85.08 0 0031-5.79 80.88 80.88 0 0012.85-6.45zm-100.55 59.81c-19.32 18.51-50.4 21.23-75.7 5.9l-75.14-45.61 67.45-64.64 76.41 46.38c27.53 16.69 26.02 39.72 6.98 57.97zm8.93-82.22l-70.65-42.89L205.14 39l69.37 42.1c25.94 15.72 29.31 37 10.55 55a60.69 60.69 0 01-73.68 7.54zm29.86 190c-19.57 18.75-46.17 29.09-74.88 29.09a123.73 123.73 0 01-64.1-18.2L0 282.52v24.67l108.6 65.91a111.6 111.6 0 0057.76 16.42c24.92 0 48.8-8.81 66.42-25.69 12.88-12.34 20-27.13 19.68-41.49v-1.79a87.27 87.27 0 01-11.22 13.13zm0-39c-19.57 18.75-46.17 29.08-74.88 29.08a123.81 123.81 0 01-64.1-18.19L0 243.53v24.68l108.6 65.91a111.6 111.6 0 0057.76 16.42c24.92 0 48.8-8.81 66.42-25.69 12.88-12.34 20-27.13 19.68-41.5v-1.78a87.27 87.27 0 01-11.22 13.13zm0-39c-19.57 18.76-46.17 29.09-74.88 29.09a123.81 123.81 0 01-64.1-18.19L0 204.55v24.68l108.6 65.91a111.59 111.59 0 0057.76 16.41c24.92 0 48.8-8.8 66.42-25.68 12.88-12.35 20-27.13 19.68-41.5v-1.82a86.09 86.09 0 01-11.22 13.16zm83.7 25.74a94.15 94.15 0 01-60.2 25.86V334a81.6 81.6 0 0051.74-22.37c14-13.38 21.14-28.11 21-42.64v-2.19a94.92 94.92 0 01-12.54 14.65zm-83.7 91.21c-19.57 18.76-46.17 29.09-74.88 29.09a123.73 123.73 0 01-64.1-18.2L0 321.5v24.68l108.6 65.9a111.6 111.6 0 0057.76 16.42c24.92 0 48.8-8.8 66.42-25.69 12.88-12.34 20-27.13 19.68-41.49v-1.79a86.29 86.29 0 01-11.22 13.13zM327 162.45c-.68.69-1.35 1.38-2.05 2.06a94.37 94.37 0 01-10.64 8.65 91.35 91.35 0 01-11.6 7 94.53 94.53 0 01-26.24 8.71 97.69 97.69 0 01-14.16 1.57c.5 1.61.9 3.25 1.25 4.9a53.27 53.27 0 011.14 12V217h.05a84.41 84.41 0 0025.35-5.55 81 81 0 0026.39-16.82c.8-.77 1.5-1.56 2.26-2.34a82.08 82.08 0 007.93-9.38 63.76 63.76 0 006.32-10.74 48.55 48.55 0 004.32-16.45c.09-1.23.2-2.47.19-3.7V150q-1.08 1.54-2.25 3.09a96.73 96.73 0 01-8.26 9.36zm0 77.92c-.69.7-1.31 1.41-2 2.1a94.2 94.2 0 01-60.2 25.86V295a81.6 81.6 0 0051.74-22.37 73.51 73.51 0 0016.46-22.5 48.56 48.56 0 004.32-16.44c.09-1.24.2-2.47.19-3.71v-2.19c-.74 1.07-1.46 2.15-2.27 3.21a95.68 95.68 0 01-8.24 9.37zm0-39c-.69.7-1.31 1.41-2 2.1a93.18 93.18 0 01-10.63 8.65 91.63 91.63 0 01-11.63 7 95.47 95.47 0 01-37.94 10.18V256a81.65 81.65 0 0051.74-22.37c.8-.77 1.5-1.56 2.26-2.34a82.08 82.08 0 007.93-9.38 63.76 63.76 0 006.27-10.76 48.56 48.56 0 004.32-16.44c.09-1.24.2-2.48.19-3.71v-2.2c-.74 1.08-1.46 2.16-2.27 3.22a95.68 95.68 0 01-8.24 9.37z" fill="#121212"/></svg>
          </a>
        </div>
        <div class='footer-glasstop'>
          <h7>Made with ♡ by <a class='web-a' href='https://www.artemieamari.com/'>Artemie Amari</a></h7>
        </div>
      </div>
    </div>
    );
  }
}

export default Footer;