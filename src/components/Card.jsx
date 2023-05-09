
import QRCode from 'react-qr-code';

export default function () {
    return (
        <div className='card-container'>
            <div className='card-qrcode'>
                <QRCode
                    value="https://www.frontendmentor.io/"
                    bgColor="#3685FE"
                    fgColor="white"
                    size={160}
                >
                </QRCode>
            </div>
           <h2>Improve your front-end skills by building projects</h2>
           <p className='card-description'>
                Scan the QR code to visit Frontend Mentor and take your coding skills to te next level
           </p>
        </div>
    );
};