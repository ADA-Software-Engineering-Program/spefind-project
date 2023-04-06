import React, { useEffect, useState } from "react";
import "./CreateProfile.css";
import AppLayout from "../../layout/AppLayout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import { useAuth } from "../../contexts/AuthContext";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebase/firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import Personal from "./Personal";
import Niche from "./Niche";
import Availabilty from "./Availabilty";
import Visibilty from "./Visibilty";

const CreateProfile = () => {
  //getting the firstName and lastName passed from the registration page
  const { currentUser } = useAuth();
  // console.log(currentUser)

  const navigate = useNavigate();

  // if (!currentUser) {
  //   navigate("/register");
  // }

  const [files, setFiles] = useState([]);
  const [unprocessProfilePic, setUnprocessProfilePic] = useState("");
  const [pastEventsImgs, setPastEventsImgs] = useState([]);
  const [profilePics, setProfilePics] = useState("");
  const [progressTime, setProgressTime] = useState(0);
  const [progressTime2, setProgressTime2] = useState(0);
  // console.log(files)

  //saving an array of pastImgs to firebase
  useEffect(() => {
    if (files.length > 0) {
      const urls = [];
      // Loop through the images and upload each one to Firebase Storage
      for (const file of files) {
        // Generate a unique filename for the image
        const name = new Date().getTime() + file.name;
        // Create a reference to the file in Firebase Storage
        const storageRef = ref(storage, name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgressTime(progress);
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              urls.push(downloadURL);
              setPastEventsImgs(urls);
            });
          }
        );
      }
    }

    // console.log(pastEventsImgs)
  }, [files]);

  //saving profile picture to firebase

  useEffect(() => {
    if (unprocessProfilePic) {
      const name = new Date().getTime() + unprocessProfilePic.name;
      // Create a reference to the file in Firebase Storage
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, unprocessProfilePic);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgressTime2(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setProfilePics(downloadURL);
          });
        }
      );
    }
  }, [unprocessProfilePic]);

  //form submit function
  const onSubmit = async (values) => {
    values.pastEventsImages = pastEventsImgs;
    values.profilePicture = profilePics;
    //  console.log(values)

    try {
      await setDoc(doc(db, "speakers", currentUser.uid), {
        ...values,
        timeStamp: serverTimestamp(),
      });

      toast.success("Profile setup Complete, Thank you!!", {
        duration: 4000,
        position: "top-center",

        // Styling
        style: { fontSize: "13px" },
        className: "",
      });
      navigate("/speaker-profile");
    } catch (error) {
      toast.error("Ooopps!!! Sorry, An error occurred", {
        duration: 4000,
        position: "top-center",

        // Styling
        style: { fontSize: "13px" },
        className: "",
      });
    }
  };

  const [step, setStep] = useState(0);

  const formik = useFormik({
    onSubmit,
  });

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  const submit = (e) => {
    e.preventDefault();
    formik.handleSubmit();
  };

  // switch (step) {
  //   case 1:
  //     return <Personal nextStep={nextStep} />;
  //   case 2:
  //     return <Niche nextStep={nextStep} prevStep={prevStep} />;
  //   case 3:
  //     return <Availabilty nextStep={nextStep} prevStep={prevStep} />;
  //   case 4:
  //     return <Visibilty nextStep={nextStep} prevStep={prevStep} />;
  //   default:
  //     console.log("This is a multi-step form built with React.");
  // }

  return (
    <AppLayout>
      <div className="createprofile">
        <div className="form-header">
          <h1>Create Your Profile</h1>
          <p>
            All data are automatically saved. You can come back later any time.
          </p>
        </div>

        <div className="form">
          <form className="profileForms" onSubmit={formik.handleSubmit}>
            {step === 0 && <Personal nextStep={nextStep} />}
            {step === 1 && <Niche nextStep={nextStep} prevStep={prevStep} />}
            {step === 2 && (
              <Availabilty nextStep={nextStep} prevStep={prevStep} />
            )}
            {step === 3 && <Visibilty submit={submit} prevStep={prevStep} />}
          </form>
        </div>
      </div>
    </AppLayout>
  );
};

export default CreateProfile;
