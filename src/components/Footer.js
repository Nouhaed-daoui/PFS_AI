import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import kachfLogo2 from '../images/Kachf_Logo/2.png'




const Footer = () => {
  return (
    <div className="justify-center  items-center flex flex-col px-16 max-md:px-5 bg-lime-50">
      <div className="flex w-[760px] max-w-full flex-col">
        <div className="flex justify-center text-xl font-bold self-stretch max-md:max-w-full mb-4">
            <img src={kachfLogo2} alt="Logo"  className='w-20' />
        </div>
        <div className="text-zinc-900 text-sm self-center whitespace-nowrap"><Link to="#">Our Vision API</Link></div>
        <div className="text-zinc-900 text-sm self-center whitespace-nowrap mt-1"><Link to="/Contact">Contact Us</Link></div>
        <div className="items-stretch self-center flex w-[296px] max-w-full justify-between gap-5 my-3 pt-3">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b74c7877dc385a17115f143d805a992dc73b2b81f7b65a11b57f11d22d881ef?"
            className="aspect-[1.28] object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b0e16a274062767336e74351213e7eaeeaa64747a09c9759838b3493e0ca874?"
            className="aspect-[1.28] object-contain object-center w-full overflow-hidden shrink-0 flex-1"
          />
          <FontAwesomeIcon icon={faFacebookF} className="aspect-[1.28] object-contain object-center w-full overflow-hidden shrink-0 flex-1 rounded-full py-3 border-blue-800 border-2 text-blue-800"/>
          <FontAwesomeIcon icon={faLinkedinIn} className="aspect-[1.28] object-contain object-center w-full overflow-hidden shrink-0 flex-1 rounded-full py-3 border-black border-2 border-blue-800 border-2 text-blue-800"/>
          <FontAwesomeIcon icon={faXTwitter} className="aspect-[1.28] object-contain object-center w-full overflow-hidden shrink-0 flex-1 rounded-full py-3 border-black border-2"/>

        </div>
      </div>
      <div className="mb-4">© 2023 | Kachf 🍃</div>
    </div>
  );
};

export default Footer;


