import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useEffect, useState } from 'react'
import { FaBars, FaClipboard, FaSignOutAlt, FaUniversity } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import {db,storage} from "../component/config/firebase"
import './additem.css'

const Addinfo = ({children})=>{
    const [formData, setFormData] = useState({
       Institution:"",
       Faculties:"",
       website:"",
       Applicationfee:"",
       Application:"",
       openDate:"",
       closeDate:"",
       Contact:"",
       email:"",
       location:"",
       image:"",

    });


  const [Institution,setInstitution]=useState("");
  const[Faculties,setFaculties]=useState("");
  const[website,setWebsite]=useState("");
  const[Applicationfee,setapplicationFee]=useState("");
  const[Application,setApplication]=useState("")
  const[openDate,setopenDate]=useState("");
  const[closeDate,setCloseDate]=useState("");
  const[Contact, setContact]=useState("");
  const[email,setEmail]=useState("");
  const[location, setLocation]=useState("");
  const[isOpen ,setIsOpen] = useState();

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

 const handleUpload =()=>{

    const storageRef = ref(
        storage,`/images/${Date.now()}${formData.image.name}`
    );
    const uploadImage = uploadBytesResumable(storageRef, formData.image);
    uploadImage.on(
        "state_changed",
        (snapshot) => {
            const progressPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
        },
        (err) => {
            console.log(err);
        },
        () => {
            setFormData({
                Institution:"",
                Faculties:"",
                website:"",
                Applicationfee:"",
                Application:"",
                openDate:"",
                closeDate:"",
                Contact:"",
                email:"",
                location:"",
                image:"",
            });
            getDownloadURL(uploadImage.snapshot.ref).then((url) => {
                const collectionRef = collection(db, "uniData");
                addDoc(collectionRef, {
                    Institution:Institution,
                    Faculties:Faculties,
                    website:website,
                    Applicationfee:Applicationfee,
                    Application:Application,
                    openDate:openDate,
                    closeDate:closeDate,
                    Contact:Contact,
                    email:email,
                    location:location,
                    image:URL,


                })
                    .then(() => {
                        alert("Hotel added successfully", { type: "success" });

                    })
                    .catch((err) => {
                        alert("Error adding hotel", { type: "error" });
                    });
            });
        }
    );
  const toggle = () => setIsOpen (!isOpen);
  const menuItem=[
      {
          path:"/Dashboard",
          name:"Dashboard",
          icon:<FaUniversity/>
      },
      {
          path:"/View",
          name:"View",
          icon:<FaClipboard/>
      }
    
  ]
  return  (
    <div className='wrapper'>
    <div className='navbar'>
    {
            menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="links" activeclassName="active">
                    <div className="icon">{item.icon}</div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
    </div>
     <div className='card'>
      
                <h1 className="label">Add Institution</h1>
                <div className="form">
                    <input className="inputs" required placeholder="Name of Institution"  /><br></br>
                    <input className="inputs" required placeholder="Faculties"/><br></br>
                    <input className="inputs" required placeholder="Website" /><br></br>
                    <input className="inputs" required placeholder="Application Fee" /><br></br>
                    <input className="inputs" required placeholder="Application" /><br></br>
                    <input className="inputs" required placeholder="Open/Closing Date" /><br></br>
                    <input className="inputs" required placeholder="Contact" /><br></br>
                    <input className="inputs" required placeholder="Email" /><br></br>
                    <input className="inputs" required placeholder="Location" /><br></br>
                    <div className="selectDiv">
                        <input className="inputs" type="file"
                            id="file"
                            accept="image/*"
                             />
                    </div> 
            
                    <button className="button2">Upload</button>
                </div>
            </div>
      </div>
  )
}
}
export default Addinfo