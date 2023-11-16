import React, { useState } from 'react';
import styles from '../styles/About.module.css'
import QRCode from 'react-qr-code';

const About = () => {
    const [qrvalue, setqrvalue] = useState("https://walrus-app-yve6b.ondigitalocean.app/");
    const[showqr,setshowqr]=useState(false);
    return <>
    <div className='h-[90vh] flex justify-center items-center flex-col'>
    <button onClick={()=>{
            setshowqr(!showqr);
        }} className='px-4 py-2 rounded-full font-semibold border-2 border-gray-300 bg-purple-600 text-white hover:bg-purple-800'>
       Show the qr code
        </button>
        {showqr&&<QRCode value={qrvalue} className='my-10'/>}
    </div>
        
    </>;
};

export default About;
