
import Profile from "../components/Profile";
import Projects from "../components/Projects";

import Navbar from '@/components/Navbar';
export default function Home() {
  return (
   
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10">
     
      <div className="flex justify-end p-4">
      <Navbar />
      
      </div>
      <br/>
      <div className="container mx-auto px-6">
        <Profile />
         <br/>
        <Projects />
      </div>
    </div>
  );
}
