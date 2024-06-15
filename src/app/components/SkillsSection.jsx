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
              <li className="text-gray-300 mb-2">Developed and managed Computer Telephony Integration (CTI) connector for PwC contact center, using React and Redux for State Management and Jest for the testing process.</li>
              <li className="text-gray-300 mb-2">Achieved a remarkable 40% reduction in SLA breaches by leveraging caching mechanisms and handling asynchronous operations.</li>
              <li className="text-gray-300 mb-2">Implemented RESTful APIs and React to seamlessly integrate with Voice over IP services, automating call screen pop-ups and reducing call handling time by 30%.</li>
              <li className="text-gray-300">Developed a real-time dashboard application using React, Redux, and RESTful APIs to fetch and display live call data, enhancing operational efficiency and decision-making processes.</li>
            </ul>
          </div>
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-4">AlgoUniversity</h3>
            <p className="text-gray-300 mb-2">Dec 2023 - May 2024</p>
            <p className="text-gray-300 mb-4">Software Development Externship</p>
            <ul className="list-disc list-inside mb-4">
              <li className="text-gray-300 mb-2">Developed a secure online judge platform using MongoDB, NodeJS, and Express for the backend.</li>
              <li className="text-gray-300 mb-2">Implemented React for the frontend and utilized Redux for efficient state management.</li>
              <li className="text-gray-300 mb-2">Integrated code compilation mechanisms for seamless submission, compilation, and judging of code submissions, resulting in improved execution efficiency.</li>
              <li className="text-gray-300 mb-2">Implemented stringent user authentication protocols using JSON Web Tokens (JWT) for secure access.</li>
              <li className="text-gray-300">Leveraged Docker for containerization to ensure isolated code execution, resulting in improved platform stability and performance.</li>
            </ul>
          </div>
          
        </div>
      </section>
    );
  };
  
  export default SkillsSection;
  