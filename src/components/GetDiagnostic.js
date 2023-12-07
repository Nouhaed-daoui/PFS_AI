import  '../styles/tailwind.css';
import axios from 'axios';
import {React, useRef, useState, useEffect} from 'react';

// const axios = require("axios").default;




export default function GetDiagnostic() {

    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [data, setData] = useState();
    const [image, setImage] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    let confidence = 0;
      
    const sendFile = async () => {
      console.log("START sendfile ...", process.env.REACT_APP_API_URL)

      if (image && process.env.REACT_APP_API_URL) {
        let formData = new FormData();
        formData.append("file", selectedFile);
        // Call API
        console.log("START REQUEST ...", formData)
        let res = await axios({
          method: "post",
          url: process.env.REACT_APP_API_URL,
          data: formData,
        });
        console.log("END REQUEST ...")

        if (res.status === 200) {
          setData(res.data);
          console.log("response: ", res.data)

        }
        setIsloading(false);
      }
    }

    const clearData = () => {
      setData(null);
      setImage(false);
      setSelectedFile(null);
      setPreview(null);
    };

    useEffect(() => {
      if (!selectedFile) {
        setPreview(undefined);
        return;
      }
      const objectUrl = URL.createObjectURL(selectedFile);
      console.log("object url:", objectUrl)
      setPreview(objectUrl);
    }, [selectedFile]);
  
    useEffect(() => {
      if (!preview) {
        return;
      }
      setIsloading(true);
      sendFile();
    }, [preview]);

    // Whene we click the upload button
    const handleImageChange = (event) => {
      if (!event || event.length === 0) {
        console.log("The Selected file:");
        setSelectedFile(undefined);
        setImage(false);
        setData(undefined);
        return;
      }
      setSelectedFile(event.target.files[0]);
      setData(undefined);
      setImage(true);
      console.log("The Selected file:", selectedFile);
    };

    if (data) {
      confidence = (parseFloat(data.confidence) * 100).toFixed(2);
    }
      
    const handleUploadButtonClick = () => {
          fileInputRef.current.click();
    };
    
  return (
    <div className='bg-green-100'>  
      <h1 className='text-green-900 mt-4 mb-4 mx-auto text-center'>Plant Disease Detection</h1>
      <h6 className='text-green-600 mt-4 mb-6 mx-auto text-center'> Identifies your plant diseases and improve productivity and get farming knowledge for free.</h6>
      <div className='flex justify-center'>
        <img  src='https://petapixel.com/assets/uploads/2019/06/identifynaturefeattt.jpg' className="h-full me-2 rounded-lg"  width={800} height={750}></img>
      </div>
      <h3 className='text-green-900 mx-auto text-center mt-6 '>Get a Diagnostic</h3>
      <div className="flex items-center justify-center h-24 mx-20 ">
          <div className='py-2 px-20 mx-20 '>
              <button  className="bg-green-700 text-white font-bold rounded hover:bg-green-800  py-2 px-4 mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
                Take a picture
              </button>
          </div>
          <div className="py-2 px-20 mx-20">
                  <button className="bg-green-700 text-white font-bold rounded hover:bg-green-800 py-2 px-4 mt-2" onClick={handleUploadButtonClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 mx-auto">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"/>
                    </svg>
                    Upload a picture
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
          </div>
    </div>
    </div>
  )
}
