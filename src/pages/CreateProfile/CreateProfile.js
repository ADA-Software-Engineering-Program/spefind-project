import React, { useEffect, useState, useRef } from "react";
import "./CreateProfile.css";
import AppLayout from "../../layout/AppLayout";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useFormik } from "formik";
// import { useAuth } from "../../contexts/AuthContext";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { storage, db } from "../../firebase/firebase";
// import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import Personal from "./Personal";
import Niche from "./Niche";
import Availabilty from "./Availabilty";
import Visibilty from "./Visibilty";
import Steppers from "./Steppers";

import { API_LINK } from "../../utils/api";

const CreateProfile = () => {
  //getting the firstName and lastName passed from the registration page
  // const { currentUser } = useAuth();
  // console.log(currentUser)

  const navigate = useNavigate();

  // if (!currentUser) {
  //   navigate("/register");
  // }

  // const [files, setFiles] = useState([]);
  // const [unprocessProfilePic, setUnprocessProfilePic] = useState("");
  // const [pastEventsImgs, setPastEventsImgs] = useState([]);
  // const [profilePics, setProfilePics] = useState("");
  // const [progressTime, setProgressTime] = useState(0);
  // const [progressTime2, setProgressTime2] = useState(0);
  // console.log(files)

  //saving an array of pastImgs to firebase
  // useEffect(() => {
  //   if (files.length > 0) {
  //     const urls = [];
  //     // Loop through the images and upload each one to Firebase Storage
  //     for (const file of files) {
  //       // Generate a unique filename for the image
  //       const name = new Date().getTime() + file.name;
  //       // Create a reference to the file in Firebase Storage
  //       const storageRef = ref(storage, name);
  //       const uploadTask = uploadBytesResumable(storageRef, file);

  //       uploadTask.on(
  //         "state_changed",
  //         (snapshot) => {
  //           const progress =
  //             (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //           setProgressTime(progress);
  //         },
  //         (error) => {
  //           console.log(error);
  //         },
  //         () => {
  //           getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //             urls.push(downloadURL);
  //             setPastEventsImgs(urls);
  //           });
  //         }
  //       );
  //     }
  //   }

  //   // console.log(pastEventsImgs)
  // }, [files]);

  //saving profile picture to firebase

  // useEffect(() => {
  //   if (unprocessProfilePic) {
  //     const name = new Date().getTime() + unprocessProfilePic.name;
  //     // Create a reference to the file in Firebase Storage
  //     const storageRef = ref(storage, name);
  //     const uploadTask = uploadBytesResumable(storageRef, unprocessProfilePic);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         setProgressTime2(progress);
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setProfilePics(downloadURL);
  //         });
  //       }
  //     );
  //   }
  // }, [unprocessProfilePic]);

  //form submit function

  // const onSubmit = async (values) => {
  //   // values.pastEventsImages = pastEventsImgs;
  //   // values.profilePicture = profilePics;
  //   //  console.log(values)
  //   try {
  //     await setDoc(doc(db, "speakers", currentUser.uid), {
  //       ...values,
  //       timeStamp: serverTimestamp(),
  //     });

  //     toast.success("Profile setup Complete, Thank you!!", {
  //       duration: 4000,
  //       position: "top-center",

  //       // Styling
  //       style: { fontSize: "13px" },
  //       className: "",
  //     });
  //     navigate("/speaker-profile");
  //   } catch (error) {
  //     toast.error("Ooopps!!! Sorry, An error occurred", {
  //       duration: 4000,
  //       position: "top-center",

  //       // Styling
  //       style: { fontSize: "13px" },
  //       className: "",
  //     });
  //   }
  // };

  const [step, setStep] = useState(0);
  const [error, setError] = useState("");

  const validate = (values) => {
    const errors = {};
    // firstname
    if (!values.firstName) {
      errors.firstName = "Please fill out this field";
    }

    if (!values.lastName) {
      errors.lastName = "Please fill out this field";
    }

    if (!values.country) {
      errors.country = "Please fill out this field";
    }

    if (!values.biographies) {
      errors.biographies = "Please fill out this field";
    }
    if (!values.availableTo || values.availableTo.length === 0) {
      errors.availableTo =
        "Please select at least one place you are available to";
    }

    if (!values.pastEvents) {
      errors.pastEvents = "Please fill out this field";
    }

    if (!values.speakerField) {
      errors.speakerField = "Please fill out this field";
    }

    if (!values.speakerSubField) {
      errors.speakerSubField = "Please fill out this field";
    }

    if (!values.education) {
      errors.education = "Please fill out this field";
    }

    if (!values.currentPosition) {
      errors.currentPosition = "Please fill out this field";
    }

    if (!values.language) {
      errors.language = "Please fill out this field";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      // personal
      // firstName: "",
      // lastName: "",
      gender: "",
      country: "",
      city: "",
      biography: "",
      titleOfEvent: "",
      date: "",
      location: "",
      numberOfAttendees: "",
      field: "",
      // eventPictures: "",

      // niche
      speakerField: "",
      speakerSubField: "",
      education: "",
      jobTitle: "",
      yearsOfPractice: "",
      jobDescription: "",
      position: "",
      language: "",

      // availability
      eventType: [],
      availableTo: [],
      pricing: "",
      isVolunteer: "",

      // isVisibile
      isVisibile: "",
    },
    validate,
  });

  // console.log(formik.values);

  // proceed to next step
  const nextStep = () => {
    // console.log(Object.keys(formik.errors));
    setStep(step + 1);
    ref.current.next();
    window.scrollTo(0, 0);
  };

  // go back to prev step
  const prevStep = () => {
    setStep(step - 1);
    ref.current.prev();
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const isInfoFilled = !!sessionStorage.getItem("userId");
    isInfoFilled && navigate("/dashboard");
  }, [navigate]);

  const submit = async () => {
    formik.handleSubmit();
    try {
      const transformedData = {
        gender: formik.values.gender,
        availableTo: formik.values.availableTo,
        biography: formik.values.biography,
        // phone: "+2348033092399",
        // address: "A3C Crimson Avenue, Denmark",
        pastEvent: {
          titleOfEvent: formik.values.titleOfEvent,
          date: formik.values.date,
          location: formik.values.location,
          numberOfAttendees: formik.values.numberOfAttendees,
          field: formik.values.field,
        },
        field: formik.values.speakerField,
        subField: formik.values.speakerSubField,
        education: formik.values.education,
        job: {
          title: formik.values.jobTitle,
          yearsOfPractice: Number(formik.values.yearsOfPractice),
          jobDescription: formik.values.jobDescription,
          position: formik.values.position,
        },
        city: formik.values.city,
        country: formik.values.country,
        language: formik.values.language,
        pricing: formik.values.pricing,
        eventType: formik.values.eventType,
        isVolunteer: formik.values.isVolunteer,
        isVisible: formik.values.isVisibile,
      };

      const token = sessionStorage.getItem("token");
      const saveUserData = await fetch(`${API_LINK}/api/profile/setup`, {
        method: "PUT",
        body: JSON.stringify(transformedData),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          redirect: "follow",
        },
      });
      const data = await saveUserData.json();
      console.log(data);

      if (saveUserData.ok) {
        toast.success(`${data.message}`, {
          duration: 4000,
          position: "top-center",

          // Styling
          style: { fontSize: "13px", border: "2px solid green" },
          className: "",
        });
        sessionStorage.setItem("userId", data.user._id);
        navigate("/dashboard");
        window.scrollTo(0, 0);
      }

      if (!saveUserData) {
        setError("Please cross check your details and try again");
        throw new Error(error);
      }
      if (!saveUserData.ok) {
        setError(
          "Your session might have expired, please try to log in again!"
        );
        throw new Error(error);
      }
    } catch (error) {
      console.log(error);
      toast.error(`${error}`, {
        duration: 4000,
        position: "top-center",

        // Styling
        style: { fontSize: "13px", border: "2px solid red" },
        className: "",
      });
    }
  };

  const ref = useRef(null);

  return (
    <AppLayout>
      <div className="create-profile">
        <div className="form-header">
          <h1>Create Your Profile</h1>
          <p>
            All data are automatically saved. You can come back later any time.
          </p>
        </div>

        <div className="form-container">
          <form className="profile-form">
            <div className="profile-steppers">
              <Steppers ref={ref} />
            </div>

            {step === 0 && <Personal nextStep={nextStep} formik={formik} />}
            {step === 1 && (
              <Niche nextStep={nextStep} prevStep={prevStep} formik={formik} />
            )}
            {step === 2 && (
              <Availabilty
                nextStep={nextStep}
                prevStep={prevStep}
                formik={formik}
              />
            )}
            {step === 3 && (
              <Visibilty submit={submit} prevStep={prevStep} formik={formik} />
            )}
          </form>
        </div>
      </div>
    </AppLayout>
  );
};

export default CreateProfile;
