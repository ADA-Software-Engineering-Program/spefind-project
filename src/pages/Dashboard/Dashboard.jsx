import React from "react";
import AppLayout from "../../layout/AppLayout";
import "./Dashboard.css";

import { Button, Form, Input, Radio } from "antd";

import userImg from "./assets/userImg.png";

const Dashboard = () => {
  const MyFormItemContext = React.createContext([]);

  function toArr(str) {
    return Array.isArray(str) ? str : [str];
  }

  const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(
      () => [...prefixPath, ...toArr(prefix)],
      [prefixPath, prefix]
    );
    return (
      <MyFormItemContext.Provider value={concatPath}>
        {children}
      </MyFormItemContext.Provider>
    );
  };
  const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
  };

  const onFinish = (value) => {
    console.log(value);
  };

  const { TextArea } = Input;

  return (
    <AppLayout>
      <div className="dashboard">
        <h3>Your Dashboard</h3>
        <div className="dashboardContainer">
          <div className="sidebar">
            <div className="userProfile">
              <img src={userImg} alt="user profile" />
              <p className="username">Titilayo</p>
              <p className="userCareer">Career Speaker</p>
            </div>
            <ul className="userMenu">
              <li>
                <a href="#Part1">Personal Details</a>
              </li>
              <li>
                <a href="#Part1">Niche</a>
              </li>
              <li>
                <a href="#Part1">Availability & Fees</a>
              </li>
              <li>
                <a href="#Part1">Account Preferences</a>
              </li>
              <li>
                <a href="#Part1">Publications</a>
              </li>
              <li>
                <a href="#Part1">Passwords</a>
              </li>
              <li>
                <a href="#Part1">Email</a>
              </li>
              <li>
                <a href="#Part1">Signature</a>
              </li>
              <li>
                <a href="#Part1">Media</a>
              </li>
            </ul>
          </div>
          <div className="dahsboardBody">
            <div className="formContainer">
              <p className="dashboardDetail">
                Spefind automatically saves your dashboard changes
              </p>
              <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                <MyFormItemGroup prefix={["user"]}>
                  <MyFormItemGroup prefix={["name"]}>
                    <MyFormItem name="firstName" label="First Name">
                      <Input aria-label="firstname" placeholder="Type here" />
                    </MyFormItem>
                    <MyFormItem name="lastName" label="Last Name">
                      <Input aria-label="lastname" placeholder="Type here" />
                    </MyFormItem>
                  </MyFormItemGroup>

                  <MyFormItem name="age" label="Age">
                    <Input aria-label="age" placeholder="Type here" />
                  </MyFormItem>

                  <MyFormItem
                    name="professional_credentials"
                    label="Professional Credentials"
                  >
                    <Input
                      aria-label="professional_credentials"
                      placeholder="Type here"
                    />
                  </MyFormItem>

                  <MyFormItem
                    name="prefered_pronouns"
                    label="Prefered pronouns"
                  >
                    <Input
                      aria-label="prefered_pronouns"
                      placeholder="Type here"
                    />
                  </MyFormItem>

                  <MyFormItem name="gender" label="Gender">
                    <Radio>Male</Radio>
                    <Radio>Female</Radio>
                    <Radio>Other</Radio>
                  </MyFormItem>
                  <MyFormItem name="coverBanner" label="Cover Banner">
                    <Button className="selectFile">Select File</Button>
                  </MyFormItem>

                  <MyFormItem
                    name="editProfilePicture"
                    label="Edit Profile Picture"
                  >
                    <div className="editProfilePicture">
                      <img src={userImg} alt="edit your profile avatar" />
                      <div>
                        <Button>Remove</Button>
                        <Button>Change Picture</Button>
                        <Button>Crop Picture</Button>
                      </div>
                    </div>
                  </MyFormItem>

                  <MyFormItem
                    name="country_or_state"
                    label="Country or State & City"
                  >
                    <Input
                      aria-label="country_or_state"
                      placeholder="Type here"
                    />
                  </MyFormItem>

                  <MyFormItem name="timeZone" label="Time Zone">
                    <Input aria-label="timeZone" placeholder="Type here" />
                  </MyFormItem>

                  <MyFormItem name="biography" label="Biography">
                    <TextArea placeholder="Type here" />
                  </MyFormItem>

                  <MyFormItem name="whyChooseMe" label="Why Choose Me?">
                    <TextArea placeholder="Type here" />
                  </MyFormItem>
                </MyFormItemGroup>
              </Form>
            </div>
          </div>
        </div>
        {/* <Row>
          <Col span={8}>
            <div className="userProfile">
              <img src={userImg} alt="user profile" />
              <p className="username">Titilayo</p>
              <p className="userCareer">Career Speaker</p>
            </div>
            <div className="userMenu">
              <Anchor
                items={[
                  {
                    key: "part-1",
                    href: "#part-1",
                    title: "Personal Details",
                  },
                  {
                    key: "part-2",
                    href: "#part-2",
                    title: "Niche",
                  },
                  {
                    key: "part-3",
                    href: "#part-3",
                    title: "Availability & Fees",
                  },
                  {
                    key: "part-4",
                    href: "#part-4",
                    title: "Account Preferences",
                  },
                  {
                    key: "part-5",
                    href: "#part-5",
                    title: "Publications",
                  },
                  {
                    key: "part-6",
                    href: "#part-6",
                    title: "Passwords",
                  },
                  {
                    key: "part-7",
                    href: "#part-7",
                    title: "Email",
                  },
                  {
                    key: "part-8",
                    href: "#part-8",
                    title: "Signature",
                  },
                  {
                    key: "part-9",
                    href: "#part-9",
                    title: "Media",
                  },
                ]}
              />
            </div>
          </Col>

          <Col span={16}>
            <p className="dashboardDetail">
              Spefind automatically saves your dashboard changes
            </p>
            <div
              id="part-1"
              style={{
                height: "100vh",
                background: "rgba(255,0,0,0.02)",
              }}
            >
              <div className="formContainer">
                <Form
                  name="form_item_path"
                  layout="vertical"
                  onFinish={onFinish}
                >
                  <MyFormItemGroup prefix={["user"]}>
                    <MyFormItemGroup prefix={["name"]}>
                      <MyFormItem name="firstName" label="First Name">
                        <Input aria-label="firstname" placeholder="Type here" />
                      </MyFormItem>
                      <MyFormItem name="lastName" label="Last Name">
                        <Input aria-label="lastname" placeholder="Type here" />
                      </MyFormItem>
                    </MyFormItemGroup>

                    <MyFormItem name="age" label="Age">
                      <Input aria-label="age" placeholder="Type here" />
                    </MyFormItem>

                    <MyFormItem
                      name="professional_credentials"
                      label="Professional Credentials"
                    >
                      <Input
                        aria-label="professional_credentials"
                        placeholder="Type here"
                      />
                    </MyFormItem>

                    <MyFormItem
                      name="prefered_pronouns"
                      label="Prefered pronouns"
                    >
                      <Input
                        aria-label="prefered_pronouns"
                        placeholder="Type here"
                      />
                    </MyFormItem>

                    <MyFormItem name="gender" label="Gender">
                      <Radio>Male</Radio>
                      <Radio>Female</Radio>
                      <Radio>Other</Radio>
                    </MyFormItem>
                    <MyFormItem
                      name="coverBanner"
                      label="Cover Banner"
                    ></MyFormItem>
                    <Button htmlType="file">Select File</Button>
                  </MyFormItemGroup>

                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>

    

            <div
              id="part-2"
              style={{
                height: "100vh",
                background: "rgba(0,255,0,0.02)",
              }}
            />
            <div
              id="part-3"
              style={{
                height: "100vh",
                background: "rgba(0,0,255,0.02)",
              }}
            />
          </Col>
        </Row> */}
      </div>
    </AppLayout>
  );
};

export default Dashboard;
