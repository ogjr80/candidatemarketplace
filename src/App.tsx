
// import './App.css'
// import CandidateCard from './components/CandidateCard'; 

// function App() {
//   const candidate = {
//     fullName: "Jane Doe",
//     professionalTitle: "Software Developer",
//     photoUrl: "https://via.placeholder.com/150",
//     skills: ["React", "Node.js", "GraphQL"],
//     experience: "5 years",
//     location: "San Francisco, CA"
//   };

//   return (
//     <div className="App">
//       <div className="flex justify-center">
//         <CandidateCard candidate={candidate} />
//         <CandidateCard candidate={candidate} />
//         <CandidateCard candidate={candidate} />
//         <CandidateCard candidate={candidate} />
        
//       </div>
//     </div>
//   );
// }

// export default App

import './App.css'; 

import CandidateDetail from './components/CandidateDetail';

function App() {
   
    const candidate = {
      fullName: "Jane Doe",
      professionalTitle: "Software Developer",
      // photoUrl: "https://via.placeholder.com/150",
      photoUrl: "https://www.itthynk.co.za/team/gedion.jpeg", 
      email: "jane.doe@example.com",
      location: "San Francisco, CA",
      shortBio: "A passionate software developer with 5 years of experience...",
      education: [
          {
              degree: "Bachelor of Science",
              field: "Computer Science",
              institution: "University of Technology",
              startDate: "2014",
              endDate: "2018"
          },
          {
            degree: "Masters Degree in AI",
              field: "Computer Science",
              institution: "University of Technology",
              startDate: "2019",
              endDate: "2020"
          }
          // Add more education entries if needed
      ],
      experience: [
          {
              role: "Software Developer",
              company: "Tech Innovations Inc.",
              startDate: "2018",
              endDate: "Present",
              description: "Developed and maintained several high-profile software projects..."
          }, 
          {
            role: "UI/UX Bootcamp",
            company: "OpherLabs R&D Inc.",
            startDate: "2021",
            endDate: "Present",
            description: "Developed and maintained 3 high-performance application projects..."
        }
          // Add more experience entries if needed
      ],
      projects: [
          {
              name: "Project Management Tool",
              duration: "Jan 2020 - Dec 2020",
              description: "Led the development of a project management tool..."
          }, 
          {
            name: "Opher AI-Driven Marketplace",
            duration: "Jan 2021 - Dec 2022",
            description: "AI Driven Job Marketplace..."
        }

          // Add more project entries if needed
      ]
      // Add calls to action data if needed
  };
  
    return (
        <div className="App">
            <CandidateDetail candidate={candidate} />
        </div>
    );
}

export default App;

