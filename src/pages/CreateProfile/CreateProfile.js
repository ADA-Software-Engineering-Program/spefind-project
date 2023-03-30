import React, { useEffect, useState } from 'react'
import "./CreateProfile.css"
import {ImArrowUp, ImArrowDown} from 'react-icons/im'
import {BsTrashFill} from 'react-icons/bs'
import AppLayout from '../../layout/AppLayout'
import { useNavigate, useNavigation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { useAuth } from "../../contexts/AuthContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from '../../firebase/firebase';
import { doc, serverTimestamp, setDoc } from "firebase/firestore";



const CreateProfile = () => {

  //getting the firstName and lastName passed from the registration page
  const {currentUser} = useAuth()
  // console.log(currentUser)

  

  const navigate = useNavigate();

  if ( !currentUser ) {
    navigate('register')
  }

  const [files, setFiles] = useState([])
  const [unprocessProfilePic, setUnprocessProfilePic] = useState('')
  const [pastEventsImgs, setPastEventsImgs] = useState([])
  const [profilePics, setProfilePics] = useState('')
  const [progressTime, setProgressTime] = useState(0)
  const [progressTime2, setProgressTime2] = useState(0)
  const [genders, setGenders] = useState('')
  // console.log(files)


  //saving an array of pastImgs to firebase
  useEffect( () => {
    if ( files.length > 0 ) {
      const urls = [];
  // Loop through the images and upload each one to Firebase Storage
  for ( const file of files ) {
    // Generate a unique filename for the image
    const name = new Date().getTime() + file.name;
    // Create a reference to the file in Firebase Storage
    const storageRef = ref( storage, name );
    const uploadTask = uploadBytesResumable( storageRef, file );

    uploadTask.on( 'state_changed',
      ( snapshot ) => {
        const progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
        setProgressTime(progress)
      },
      ( error ) => {
        console.log( error );
      },
      () => {
        getDownloadURL( uploadTask.snapshot.ref ).then( ( downloadURL ) => {
          urls.push( downloadURL )
          setPastEventsImgs(urls)
        } );
      }
    );
  
  }
  
    }
    
    // console.log(pastEventsImgs)
    
  }, [files])

  //saving profile picture to firebase

  useEffect( () => {
    if ( unprocessProfilePic ) {

    const name = new Date().getTime() + unprocessProfilePic.name;
    // Create a reference to the file in Firebase Storage
    const storageRef = ref( storage, name );
    const uploadTask = uploadBytesResumable( storageRef, unprocessProfilePic );

    uploadTask.on( 'state_changed',
      ( snapshot ) => {
        const progress = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100;
        setProgressTime2(progress)
      },
      ( error ) => {
        console.log( error );
      },
      () => {
        getDownloadURL( uploadTask.snapshot.ref ).then( ( downloadURL ) => {
          
          setProfilePics(downloadURL )
        } );
      }
    );
    }
    
  }, [unprocessProfilePic])

    //form submit function
    const onSubmit = async (values) => {
      values.pastEventsImages = pastEventsImgs
      values.gender = genders
      values.profilePicture = profilePics
    //  console.log(values)
      
         

          try {
             await setDoc(doc(db, "speakers", currentUser.uid), {
              ...values,
              timeStamp: serverTimestamp()
              });

            toast.success('Profile setup Complete, Thank you!!')
            navigate('/speakerProfile')
              
          } catch (error) {
            toast.error('Ooopps!!! Sorry, An error occurred')
          }

    
      
    };

  
   const formik = useFormik({
    initialValues: {
        lastName:'',
        gender: '',
        firstName:'',
        profilePicture: '',
       country: '',
       timezone: '',
        city: '',
        bio: ''
       },
    // validate,
    onSubmit
   } );



  return (
    <AppLayout>
      <div className='createprofile'>

        <div className="header">
            <h1>Create Your Profile</h1>
            <p>All fields are required</p>
        </div>


        <div className="form">
          <form className='profileForms' onSubmit={ formik.handleSubmit }>

            <div className="name"></div>
              <label className='profileLabel'>FIRST NAME* </label>
              <input type="text" name="firstName" className='profileInput' {...formik.getFieldProps('firstName')}/>
              

              <label className='profileLabel'>LAST NAME* </label>
              <input type="text" name="lastName" className='profileInput' {...formik.getFieldProps('lastName')}/>
              


              <label className='profileLabel'>GENDER*</label> 
              <div className="gender">

          
                
                <label className='genderLabel'>
                <input type="radio" name="gender" className='genders' value='Male' onChange={(e) => setGenders(e.target.value)} />
                  Male
                </label>
             
                
                <label className='genderLabel'>
                <input type="radio" name="gender" className='genders' value='Female'  onChange={(e) => setGenders(e.target.value)}/>
                  Female
                </label>
             
                
                <label className='genderLabel'>
                <input type="radio" name="gender" className='genders' value='Others' onChange={ ( e ) => setGenders( e.target.value ) } />
                  Others
                </label>
           

        
            </div>


            <label className='profileLabel'>PROFILE PICTURE*</label>
            <div className="upload">

              <input type='file' className="select" onChange={ (e) => setUnprocessProfilePic(e.target.files[0])} />
              <p>Files must be less than 100 MB. Allowed file types:png, gif, jpg, jpeg.</p>
              <span style={{fontSize: '13px', marginTop: '-18px'}}>Uploading Image - {progressTime2 }%</span>
            </div>


            <label className='profileLabel'>COUNTRY OR STATE*  </label>
            <select {...formik.getFieldProps('country')}>
                <option value="0">-None-</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="South Africa">South Africa</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Uganda">Uganda</option>
            </select>


            <label className='profileLabel'>TIMEZONE*  </label>
            <select {...formik.getFieldProps('timezone')}>
                <option value="0">-None-</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="South Africa">South Africa</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Uganda">Uganda</option>
            </select>


            <label className='profileLabel'>CITY*  </label>
            <select {...formik.getFieldProps('city')}>
                <option value="0">-None-</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Ghana">Ghana</option>
                <option value="South Africa">South Africa</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Uganda">Uganda</option>
            </select>


            <label className='profileLabel' style={{margin:20}}>BIOGRAPHICS </label>
            <div className="bio">

              <h2 >Bio* </h2>
              <div className="bio-items">
                <div className='arrow'>
                <ImArrowUp/>
                <ImArrowDown/>
                </div>
                <textarea name="" id="textarea" {...formik.getFieldProps('bio')}></textarea>
                <BsTrashFill />
          
              </div>
            </div>

            <label className='profileLabel' style={{margin:20}}>PAST EVENTS</label>
            <small>Pictures of your past events</small>
            <div className="upload">

              <input type='file' className="select" multiple onChange={ (e) => setFiles(Array.from(e.target.files))} />
              <p>Files must be less than 100 MB. Allowed file types:png, gif, jpg, jpeg.</p>
              <span style={{fontSize: '13px', marginTop: '-18px'}}>Uploading Image - {progressTime }%</span>
            </div>




            

            <button type="submit" className='submitBtn'>Done</button>
          </form>
        </div>

      </div>
    </AppLayout>
  )
}

export default CreateProfile