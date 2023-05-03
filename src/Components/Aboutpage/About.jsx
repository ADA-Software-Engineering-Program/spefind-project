import React, { useState } from "react";
import AppLayout from "../../layout/AppLayout";
import "./About.css";
import aboutpageimage from "../../images/aboutpageimg.png";
import udoka from "../../images/udoka.png";
import Aisha from "../../images/Aisha.png";
import Coletta from "../../images/Coletta.png";
import Nengi from "../../images/Nengi.png";
import teamprofile from "../../images/teamprofile.png";
import Ourvalue from "./Ourvalue";
// import data from "./Valuedata"
// import rectangle from '../../images/Rectangle.png';

export default function About() {
  const [data] = useState([
    {
      id: 1,
      number: "01",
      title: "Diversity",
      subtitle:
        "All speakers of different ethnicity, culture, country are welcomed here. No form of bias or stigmatization.",
    },
    {
      id: 2,
      number: "02",
      title: "Authenticity",
      subtitle:
        "Speakers go through rigorous process and qualifications to join our platform, this measure is taken to ensure adequacy and quality in the speakers we provide.",
    },
    {
      id: 3,
      number: "03",
      title: "Availability",
      subtitle:
        "We have a very good system put in place whereby speakers will always be ready and available for events except for dire circumstances. ",
    },
    {
      id: 4,
      number: "04",
      title: "Accuracy",
      subtitle:
        "We take pride in being free from mistakes. We are very careful in selecting speakers as the speakers we provide also represent our company’s image.",
    },
    {
      id: 5,
      number: "05",
      title: "Trust",
      subtitle:
        "Event organizers can always put their trust in us to provide speakers that match and fits what they are looking for in a speaker",
    },
    {
      id: 6,
      number: "06",
      title: "Convenience ",
      subtitle:
        "Our platform is easy to navigate and user friendly. Our goal is to make the “search for a speaker” process seamless and easy for event organizers and te world at large.",
    },
  ]);

  return (
    <AppLayout>
      <div>
        {/* Hero section */}
        <div className="herosection px-3 px-md-4">
          <h1 className="aboutheading">
            Spe<span className="heroColor">find</span>
          </h1>
          <p className="aboutsubheading mx-auto">
            We are a booking platform that allows event organizers to find and
            book communicators for their events seamlessly. We believe that
            every communicator that knows their craft can be discovered, which
            is why we created Spefind. We are Nigeria's first community of
            professional, independent, or non-professional communicators who
            would like to be found by companies and event organizers. Anyone
            with expertise in any field who is open to speaking or performing at
            conferences or events as a paid or unpaid communicator is welcome.
          </p>

          <div className="aboutimg">
            <img
              src={aboutpageimage}
              alt="img"
              className="aboutimg img-fluid"
            />
          </div>
        </div>

        {/* Our Values */}

        <div className="values">
          <h2 className="valueheading p-5 ">Our Values</h2>
          <div className="row">
            {data.map((item) => (
              <div key={item.id} className="col-lg-6 mx-auto">
                <Ourvalue
                  number={item.number}
                  title={item.title}
                  subtitle={item.subtitle}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Vision and Mission */}

        <div className="visionandmission">
          <div className="vision mx-auto">
            <h3 className="visiontitle mb-3">Our Vision</h3>
            <p className="visionsubtitle">
              To be the premier platform for event and conference organizers to
              find and book the best speakers, making the process seamless and
              stress-free.
            </p>
            <div className="visionbox"></div>
          </div>

          <div className="vision mx-auto">
            <h3 className="visiontitle mb-3">Our Mission</h3>
            <p className="visionsubtitle">
              To provide a comprehensive and user-friendly platform for event
              and conference organizers to discover, book, and manage their
              speaker line-up. We aim to simplify the process of finding and
              booking speakers while ensuring the highest level of quality and
              customer satisfaction.
            </p>
            <div className="visionbox"></div>
          </div>
        </div>

        {/* Meet the team */}

        <div className="team px-3 px-md-4">
          <div>
            <h2 className="teamtitle mb-3">Meet The Team</h2>
            {/* <p className="teamsubtitle mb-3">
              We are a small group of techies based in Nigeria, trying to bring
              about ease for event organizers. We have been working on this
              project for a while and we are really excited we get to share our
              work with the world. We are proudly products of The Ada Project
              and we believe in building a brand from the ground up with
              persistence and passion. So therefore you should be rest assured
              that we have got you covered!
            </p> */}
          </div>

          <div className="teammembers row">
            <div className="col-md-6 text-center mt-5">
              <img src={udoka} alt="teamimg" className="teamimg" />
              <p className="teamname mt-4">Udoka Success Etus</p>
              <p className="teamrole">Founder/Team Lead</p>
              <p className="teamdetail">
                Udoka is an electrical electronics engineer transitioned into a
                product manager. She is passionate about technology, with the
                intention to leverage technology to solve problems and deliver
                value to individuals and organizations.
              </p>
              <a
                href="https://www.linkedin.com/in/udoka-etus-product-manager/"
                className="teamlink"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="col-md-6 text-center mt-5">
              <img src={Aisha} alt="teamimg" className="teamimg" />
              <p className="teamname mt-4">Rabiu Aisha Kemi</p>
              <p className="teamrole">Product Designer</p>
              <p className="teamdetail">
                Aisha is a Psychology student who transitioned into tech as a
                product designer. She is very well interested in giving
                solutions to problems with the aid of user centered designs. She
                has a free & open minded approach to design. Aisha is also one
                of SPEFIND’s co-founders.
              </p>
              <a
                href="https://www.linkedin.com/in/aisha-rabiu-42462118b/"
                className="teamlink"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="col-md-6 text-center mt-5">
              <img src={Coletta} alt="teamimg" className="teamimg" />
              <p className="teamname mt-4">Coletta Ezeagba</p>
              <p className="teamrole">Product Designer</p>
              <p className="teamdetail">
                Coletta Ezeagba is a Tech. Enthusiast. She's an Author, Product
                Designer, Software Engineer and Cofounder of SPEFIND . She's
                very passionate about designing and developing digital products
                that makes people's life easy.
              </p>
              <a
                href="https://www.linkedin.com/in/coletta-ezeagba-a86a63147/"
                className="teamlink"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="col-md-6 text-center mt-5">
              <img src={Nengi} alt="teamimg" className="teamimg" />
              <p className="teamname mt-4">Nengi Aberenika</p>
              <p className="teamrole">Data Analyst</p>
              <p className="teamdetail">
                Nengi is a creative data analyst with expertise in Excel, Power
                BI, SQL and Python. I enjoy extracting hidden insights from data
                and building dynamic analytics solutions that help businesses
                grow.
              </p>
              <a
                href="https://www.linkedin.com/in/nengi-aberenika/"
                className="teamlink"
              >
                LinkedIn Profile
              </a>
            </div>

            {/* <div className="col-lg-4 text-center mt-5">
              <img src={teamprofile} alt="teamimg" className="teamimg" />
              <p className="teamname mt-4">Assyah Ibraheem</p>
              <p className="teamrole">Product Designer</p>
            </div>

            <div className="col-lg-4 text-center mt-5">
              <img src={teamprofile} alt="teamimg" className="teamimg" />
              <p className="teamname mt-4">Nnenna Lucy</p>
              <p className="teamrole">Data Analyst</p>
            </div>

            <div className="col-lg-4 text-center mt-5">
              <img src={teamprofile} alt="teamimg" className="teamimg" />
              <p className="teamname mt-4">Zainah Saheed</p>
              <p className="teamrole">Frontend developer</p>
            </div>

            <div className="col-lg-4 text-center mt-5">
              <img src={teamprofile} alt="teamimg" className="teamimg" />
              <p className="teamname mt-4">Nnoli Armstrong</p>
              <p className="teamrole">Data Analyst</p>
            </div> */}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
