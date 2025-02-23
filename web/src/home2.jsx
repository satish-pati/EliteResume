import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "./login/usercontext";
import { useRef } from "react";
const Navbar = () => {
    const navigate = useNavigate();
    const { logout } = useUser(); // Access logout function
        const featuresRef = useRef(null);


    const handleLogout = () => {
        logout(); // Clear user state
        localStorage.removeItem("token"); // Remove stored token
        navigate("/"); // Redirect to login page
    };
const handleScrollToFeatures = (event) => {
        event.preventDefault();
        document.getElementById("features-section").scrollIntoView({ behavior: "smooth" });
    };
    return (
        <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 w-full z-50">
            <h1 className="text-2xl font-bold">Job Search Hub</h1>
            <div className="flex justify-end items-center space-x-8 ml-auto mr-6">
                <a href="/home2" onClick={(e) => { e.preventDefault(); navigate("/home2"); }}  className="text-lg font-semibold hover:text-gray-400">Home</a>
                <a href="/features" onClick={handleScrollToFeatures} className="text-lg font-semibold hover:text-gray-400">Features</a>
                <a href="/about" className="text-lg font-semibold hover:text-gray-400">About Us</a>
                <a href="/contact" className="text-lg font-semibold hover:text-gray-400">Contact</a>
                <a href="/profile" className="text-lg font-semibold hover:text-gray-400">Profile</a>

                <button className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center hover:bg-red-600" title="Logout"
                    onClick={handleLogout} // Handle logout on click
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 10a1 1 0 011-1h8a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M11 3a1 1 0 011-1h4a1 1 0 011 1v14a1 1 0 01-1 1h-4a1 1 0 01-1-1V3z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

  
const JobSearchFeatures = () => {
     const navigate = useNavigate();
      const handleATSClick = () => {
        navigate("/uploadresumeATS");
      };
      const handleBotClick = () => {
        navigate("/uploadresumebot");
      };
      const handleIClick = () => {
        navigate("/uploadresumeinterview");
      };
    const handleAIClick = () => {
        navigate("/uploadresume");
      };
      const handleCLClick = () => {
        navigate("/uploadresumecl");
      };
      const handleRGClick = () => {
        navigate("/temphome");
      };
      const handlePClick = () => {
        navigate("/res");
      };
      const handleCHClick = () => {
        navigate("/coverletterhis");
      };
      const handleAhClick = () => {
        navigate("/atshis");
      };
      const handleiqClick = () => {
        navigate("/history");
      };
      const handleAIHClick = () => {
        navigate("/aihist");
      };
    return (
      <div className="text-white bg-gray-800 min-h-screen w-full px-4 py-12 sm:px-6 lg:px-8">
        <Navbar />
        
        <div className="pt-20 text-center mb-8 mt-0">
          <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Boost Your Job Search Productivity
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Utilize AI-powered tools to enhance your job search, from resume building to interview preparation.
          </p>
        </div>
  
        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    );
  };
  
const FeatureCard = ({ feature }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-lg bg-gradient-to-br ${feature.bgColor} p-6 flex flex-col justify-between h-full`}>  
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
        <p className="text-white/80 mb-6">{feature.description}</p>
      </div>
      <div className="flex flex-col items-start space-y-2">
        <a className="inline-flex items-center rounded-md bg-white/80 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100" href={feature.link}> 
          {feature.buttonText}
        </a>
        <a className="text-sm font-semibold text-white flex items-center" href={feature.historyLink}>
          View History
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-4 w-4">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const features = [
  { 
    title: "AI Interview Assistant", 
    description: "Simulate interviews with AI, get feedback, and refine your responses to excel in job interviews.", 
    link: "/uploadresume", 
    buttonText: "Start Practicing", 
    historyLink: "/aihist", 
    bgColor: "from-purple-600 to-blue-600" 
  },
  { 
    title: "AI Cover Letter Generator", 
    description: "Generate personalized cover letters that align with job descriptions, making your application stand out.", 
    link: "/uploadresumecl", 
    buttonText: "Generate Cover Letter", 
    historyLink: "/coverletterhis", 
    bgColor: "from-green-600 to-teal-600" 
  },
  { 
    title: "Resume Scorer & Recommendations", 
    description: "Get instant AI-powered resume analysis and suggestions to optimize your job application.", 
    link: "/uploadresumeATS", 
    buttonText: "Score My Resume", 
    historyLink: "/atshis", 
    bgColor: "from-orange-600 to-red-600" 
  },
  { 
    title: "AI Career Coach", 
    description: "Receive expert career guidance based on your skills, industry trends, and job aspirations.", 
    link: "/uploadresumebot", 
    buttonText: "Get Career Advice", 
    historyLink: "/career-coach/history", 
    bgColor: "from-indigo-600 to-cyan-600" 
  },
  { 
    title: "Interview Questions Generator", 
    description: "Generate job-specific interview questions tailored to your field, experience level, and industry.", 
    link: "/uploadresumeinterview", 
    buttonText: "Generate Questions", 
    historyLink: "/history", 
    bgColor: "from-pink-600 to-purple-600" 
  },
  { 
    title: "Resume Builder", 
    description: "Create a professional resume effortlessly with AI-powered templates and customization options.", 
    link: "/temphome", 
    buttonText: "Build My Resume", 
    historyLink: "/res", 
    bgColor: "from-blue-600 to-green-600" 
  }
];

export default JobSearchFeatures;
