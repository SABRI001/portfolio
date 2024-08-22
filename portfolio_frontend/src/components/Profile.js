"use client"; // Add this at the top to mark as a Client Component

import React, { useEffect, useState } from "react";
import {
  UserIcon,
  MailIcon,
  LocationMarkerIcon,
  BriefcaseIcon,
  CubeIcon,
} from "@heroicons/react/outline";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/profile_info/")
      .then((response) => setProfile(response.data))
      .catch((error) => console.error("Error fetching profile:", error));
  }, []);

  return (
  
    <div>
         <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 text-black dark:text-white p-8 shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Profile Info</h1>
      <div className="flex items-center mb-4">
        <UserIcon className="w-6 h-6 mr-2" />
        <p className="text-lg"><strong>Name:</strong> {profile.name}</p>
      </div>
      <div className="flex items-center mb-4">
        <MailIcon className="w-6 h-6 mr-2" />
        <p className="text-lg"><strong>Email:</strong> {profile.email}</p>
      </div>
      <div className="flex items-center mb-4">
        <LocationMarkerIcon className="w-6 h-6 mr-2" />
        <p className="text-lg"><strong>Location:</strong> {profile.location}</p>
      </div>
      <div className="flex items-center">
        <BriefcaseIcon className="w-6 h-6 mr-2" />
        <p className="text-lg"><strong>Profession:</strong> {profile.profession}</p>
      </div>
    </div>
    </div>
  );
};

export default Profile;
