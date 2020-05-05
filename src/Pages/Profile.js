import React from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav"
import { StateMachineProvider, createStore, DevTool } from "little-state-machine"
import { useLocation } from "react-router"
import UserPreferencesForm from "../components/Forms/UserForm/UserPreferencesForm"
import UserPhysicalForm from "../components/Forms/UserForm/UserPhysicalForm"

createStore({
  profileInformation: {
    firstName: "",
    lastName : "",
    age: "",
    yearsOfExp: ""
  }
});

const Profile = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <StateMachineProvider>
        {process.env.NODE_ENV !== 'production' && <DevTool />}
        { location.pathname === "/profile/preferences" && <UserPreferencesForm/> }
        { location.pathname === "/profile/physical" && <UserPhysicalForm/> }                
      </StateMachineProvider>
      <div className="h-16"></div>
      <BottomNav/>
    </>
  );
};

export default Profile;
