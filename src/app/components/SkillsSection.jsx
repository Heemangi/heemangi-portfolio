// SkillsSection.js

const SkillsSection = () => {
    return (
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Experience</h2>
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Tata Consultancy Services</h3>
            <p className="text-gray-300 mb-2">Aug 2021 - Nov 2023</p>
            <p className="text-gray-300 mb-4">System Engineer | Bengaluru, India</p>
            <ul className="list-disc list-inside mb-4">
              <li className="text-gray-300 mb-2">Developed and managed responsive Telephony application and their CRM Integration using React, Redux and JavaScript, delivering performant user interfaces.</li>
              <li className="text-gray-300 mb-2">Achieved a 45% decrease in SLA breaches through advanced caching strategies and asynchronous operations handling with Redux Thunk for efficient state management.</li>
              <li className="text-gray-300 mb-2">Employed best frontend practices like lazy loading and code splitting techniques to achieve significant improvements in page load times, enhancing performance metrics by 40%</li>
              <li className="text-gray-300">Developed a real-time dashboard application using React, Redux, and RESTful APIs to fetch and display live call data, enhancing operational efficiency and decision-making processes.</li>
              <li className="text-gray-300">Collaborated closely with cross-functional teams including designers and backend developers to iterate on features, conduct code reviews, and implement improvements based on user feedback and analytics.</li>
            </ul>
          </div>
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-4">AlgoUniversity</h3>
            <p className="text-gray-300 mb-2">Dec 2023 - Jun 2024</p>
            <p className="text-gray-300 mb-4">Software Development Externship</p>
            <ul className="list-disc list-inside mb-4">
              <li className="text-gray-300 mb-2">Developed a secure online judge platform using MongoDB, NodeJs, Express and RESTful APIs for backend, and React for frontend. Designed and implemented scalable architecture for efficient code judgement.</li>
              <li className="text-gray-300 mb-2">Integrated code compilation mechanisms and comprehensive test cases for submission and evaluation processes, enhancing platform reliability and code assessment.</li>
              <li className="text-gray-300 mb-2">Implemented Docker for secure isolation and execution of user-submitted code, ensuring platform stability and managing dependencies effectively.</li>
              <li className="text-gray-300 mb-2">Implemented a robust user authentication system using JSON Web Tokens (JWT) to authenticate and authorize users securely. Utilized Redux for the State Management</li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default SkillsSection;
  