import React from "react";
import Header from "../components/Header/Header";
import BottomNav from "../components/BottomNav/BottomNav"
import UserInfoForm from "../components/Forms/UserForm/UserInfoForm"

const Profile = () => {	
	return (
		<>
			<Header />
			<UserInfoForm />
			<div className="h-16"></div>
			<BottomNav/>
		</>
	);
};

export default Profile;
