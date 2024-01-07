import  '../styles/tailwind.css';
import axios from 'axios';
import {React, useRef, useState, useEffect} from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'




export default function GetDiagnostic() {

    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [data, setData] = useState();
    const [image, setImage] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    let confidence = 0;
    
    let plantClass = "";
    const navigate = useNavigate();
      
    const sendFile = async () => {

      if (image && process.env.REACT_APP_API_URL) {
        console.log("API LINK ...", process.env.REACT_APP_API_URL)


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
      console.log("The Selected file: >>>>>>", selectedFile);
    };

    if (data) {
      confidence = (parseFloat(data.confidence)).toFixed(2);
      plantClass = data.predicted_class;


      navigate(`/result`, { state: { selectedFile, confidence, plantClass } });
    }

    // 
    const handleTakePicture = async () => {

    };
      
    const handleUploadButtonClick = () => {
          fileInputRef.current.click();
    };
    
  return (
    <>
      <div className='bg-gradient-to-t from-lime-400 to-lime-50 flex flex-row py-20'>  
        <div className=' rightComponent '>
        <div className="items-center self-stretch flex flex-col justify-center px-16 py-4 max-md:max-w-full max-md:px-5">
              <div className="flex w-[686px] max-w-full flex-col items-stretch">
                <h2 className="max-w-[684px] text-zinc-900 text-start text-5xl font-semibold leading-[57px] max-md:max-w-full">
                  Plant Disease Detection
                </h2>
                <h4 className="justify-start self-start mt-4 text-zinc-800 text-start text-lg leading-7 max-w-[582px] max-md:max-w-full">
                  We cannot allow your plants to suffer from disorders and various diseases damages. Let’s begin identifies your plant diseases and improve productivity and get
                  farming knowledge for free.
                </h4>
              </div>
        </div>

      {/* <div className='flex justify-center '>
        <img  src='https://petapixel.com/assets/uploads/2019/06/identifynaturefeattt.jpg' className="h-full me-2 rounded-lg shadow-sm overflow-hidden self-center max-w-full"  width={600} height={500}></img>
      </div> */}



      <div className="flex items-start justify-start  mx-16 ">
          {/* <div className='py-2 px-20  '>
              <button onClick={handleTakePicture}  className=" bg-blue-700 text-white font-bold rounded hover:bg-blue-800  py-2 px-4 mt-2">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-6 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                </svg>
                Take a picture
              </button>
          </div> */}



          {!isLoading &&   
            <div className="py-2 px-20 items-start flex justify-between gap-2 max-md:ml-1.5 max-md:mr-1.5">

                    <button className="bg-blue-700 text-white shadow-lg font-bold rounded-full hover:bg-blue-800 py-2 px-8 mt-2 flex flex-row" onClick={handleUploadButtonClick}>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/908909157dc6d06cad801de6f07c9f921aaa611ce109d370afd628473cd40422?apiKey=49a8e08e74bb44d9affdaac81f6699af&"
                        className="aspect-[1.04] object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full my-auto"
                      />
                      <div className="text-white text-center text-lg font-semibold leading-7 self-stretch grow whitespace-nowrap px-2">
                        Diagnose a plant
                      </div>
                    </button>
                    <input
                      className='bg-white hidden'
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
            </div>
          } 
          {isLoading && 
                  <CardContent className='flex flex-col items-center w-16	justify-center ml-16 items-center'>
                      <CircularProgress  className='bg-midnight'/>
                      <Typography variant="h6" noWrap>
                        Processing
                      </Typography>
                  </CardContent>
                }
      </div>


      </div>

      <div className=" left flex flex-col items-stretch w-6/12  max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b0e2edb2e7cf0c0ad339c62113cc3eb17f3341b60166d4b772520720f6d8cf2?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0e2edb2e7cf0c0ad339c62113cc3eb17f3341b60166d4b772520720f6d8cf2?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0e2edb2e7cf0c0ad339c62113cc3eb17f3341b60166d4b772520720f6d8cf2?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0e2edb2e7cf0c0ad339c62113cc3eb17f3341b60166d4b772520720f6d8cf2?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0e2edb2e7cf0c0ad339c62113cc3eb17f3341b60166d4b772520720f6d8cf2?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0e2edb2e7cf0c0ad339c62113cc3eb17f3341b60166d4b772520720f6d8cf2?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0e2edb2e7cf0c0ad339c62113cc3eb17f3341b60166d4b772520720f6d8cf2?apiKey=49a8e08e74bb44d9affdaac81f6699af&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b0e2edb2e7cf0c0ad339c62113cc3eb17f3341b60166d4b772520720f6d8cf2?apiKey=49a8e08e74bb44d9affdaac81f6699af&"
              className="aspect-[2.83] object-contain object-center w-full max-w-[1320px] overflow-hidden grow  max-md:max-w-full max-md:mt-10"
            />
      </div>

    </div>
    </>
    
  )
}
