"use client"; // Add this at the top to mark as a Client Component

import React, { useEffect, useState } from "react";
import { CubeIcon } from "@heroicons/react/outline";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/project_list/")
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 text-black dark:text-white p-8 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 border-b pb-2 dark:border-gray-700">Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <div className="flex items-center mb-2" key={index}>
            <CubeIcon className="h-6 w-6 text-blue-500 dark:text-blue-400 mr-2" />
            <li className="text-lg">
              <strong>{project.name}</strong>: {project.description}
            </li>
          </div>
        ))}
      </ul>
      <footer className="mt-8 pt-4 border-t dark:border-gray-700">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Sabri Nasser. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Projects;

