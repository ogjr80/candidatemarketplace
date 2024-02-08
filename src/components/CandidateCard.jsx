// src/components/CandidateCard.js
import React from 'react'; 


function CandidateCard({ candidate }) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        <img className="w-full h-48 object-cover" src={candidate.photoUrl} alt={candidate.fullName} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{candidate.fullName}</div>
          <p className="text-gray-700 text-base">
            {candidate.professionalTitle}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {candidate.skills.slice(0, 3).map(skill => (
            <span key={skill} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {skill}
            </span>
          ))}
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-600 text-xs">Experience: {candidate.experience}</p>
          <p className="text-gray-600 text-xs">Location: {candidate.location}</p>
        </div>
      </div>
    );
  }
  
  export default CandidateCard;
  