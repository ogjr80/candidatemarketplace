// src/components/CandidateDetail.js

import Collapsible from './Collapsible';
import EntryCard from './EntryCard';



function CandidateDetail({ candidate }) {
    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{candidate.fullName}</h3>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{candidate.professionalTitle}</p>
                </div>
                <img className="h-20 w-20 rounded-full" src={candidate.photoUrl} alt={candidate.fullName} />
            </div>
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Email</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{candidate.email}</dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Location</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{candidate.location}</dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <dt className="text-sm font-medium text-gray-500">Biography</dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{candidate.shortBio}</dd>
                    </div>
                    
                   
                </dl>

                  {/* Education Section */}
                    <Collapsible title="Education">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {candidate.education.map((edu, index) => (
                        <EntryCard
                            key={index}
                            title={`${edu.degree} in ${edu.field}`}
                            subtitle={edu.institution}
                            dateRange={`${edu.startDate} - ${edu.endDate}`}
                        />
                        ))}
                    </div>
                    </Collapsible>
                {/* Experience Section */}
                <Collapsible title="Experience">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {candidate.experience.map((exp, index) => (
                    <EntryCard
                    key={index}
                    title={exp.role}
                    subtitle={`${exp.company}`}
                    dateRange={`${exp.startDate} - ${exp.endDate}`}
                    description={exp.description}
                    />
                ))}
                </div>
                </Collapsible>

                {/* Projects Section */}
                <Collapsible title="Projects">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {candidate.projects.map((project, index) => (
                    <EntryCard
                    key={index}
                    title={project.name}
                    subtitle={project.duration}
                    dateRange="" // Project might not always have a simple date range
                    description={project.description}
                    />
                ))}
                </div> 
                </Collapsible>

            {/* Calls to Action */}
            <div className="px-4 py-5 sm:px-6 flex justify-end space-x-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Download Resume
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Request an Interview
                </button>
            </div>
            </div>
        </div>
    );
}

export default CandidateDetail;
