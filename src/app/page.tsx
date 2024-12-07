import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Full Stack Developer
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            22-year-old developer passionate about full-stack development, compiler creation, and innovative solutions
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-6 py-3 rounded-lg transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 space-y-6">
            <p>
              I'm a passionate developer with experience in full-stack development, compiler creation, and backend frameworks. 
              My innovative mindset is focused on solving problems efficiently and crafting unique digital solutions.
            </p>
            <p>
              What sets me apart is my dedication to building innovative tools like backend frameworks and compilers, 
              always striving to make software development more efficient and user-friendly.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-white">Background</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A passionate 22-year-old full-stack developer with a unique background in compiler creation.
                  Fluent in both code and Arabic, I bring a multicultural perspective to software development.
                  My journey in tech started at age 13, and I've been building innovative solutions ever since.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
                <h3 className="font-semibold text-xl mb-4 text-gray-900 dark:text-white">Fun Facts</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Arabic language enthusiast and native speaker</li>
                  <li>• Started coding on GitHub in 2015 at age 13</li>
                  <li>• Proud member of the "Java haters" club</li>
                  <li>• Love bridging technology with Arabic culture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SkillCategory 
              title="Frontend Development"
              skills={["JavaScript", "TypeScript", "React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "@nextui-org/react", "Framer Motion"]}
            />
            <SkillCategory 
              title="Backend Development"
              skills={["Node.js", "Python (Flask)", "PHP", "C", "Java", "RESTful APIs"]}
            />
            <SkillCategory 
              title="Databases & Tools"
              skills={["MongoDB", "Supabase", "SQL", "Docker", "Git (Certified)", "NextAuth.js", "JWT"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ProjectCard
              title="Mega-Tel Web Application"
              description="A robust MERN stack application designed for managing telecommunications services. Implemented features for real-time data handling, secure authentication, and a responsive user interface."
              tags={["MERN Stack", "Real-time Data", "Authentication", "Responsive UI", "MongoDB"]}
              githubLink="https://github.com/mohamedx2/Web-Application-for-MegaTel"
              demoLink="https://mega-tel.surge.sh/"
            />
            <ProjectCard
              title="Note-Taking Application"
              description="A modern note-taking web app with drag-and-drop functionality for reordering notes, NextAuth.js authentication, and Supabase SQL backend. Built with Next.js and styled using @nextui-org/react for a clean, intuitive interface."
              tags={["Next.js", "Framer Motion", "NextAuth.js", "Supabase", "@nextui-org/react", "TypeScript"]}
              githubLink="https://github.com/mohamedx2/dnd_notes_with_nextAuth_supabaseSQL"
              demoLink="https://dnd-notes-with-next-auth-supabase-sql.vercel.app/"
            />
            <ProjectCard
              title="AI-Powered Online Compiler"
              description="Created an online compiler with integrated AI to help clients learn programming languages. Deployed using Flask for robust backend support."
              tags={["Flask", "AI Integration", "Compiler Design"]}
              githubLink="https://github.com/mohamedx2/online_compiler_flask"
              demoLink="https://lnkd.in/eXZZ5quR"
            />
            <ProjectCard
              title="Hotel & Coffee Table Reservation System"
              description="Collaborative MERN stack project enabling room and table reservations with a user-friendly interface and secure database operations."
              tags={["MERN Stack", "MongoDB", "Express", "React"]}
              githubLink="https://github.com/mohamedx2/bookingMern"
              demoLink="https://lnkd.in/eZxWvaAM"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <CertificationCard
              title="Git & GitHub"
              issuer="365 Data Science"
              date="2024"
              link="https://learn.365datascience.com/certificates/CC-3D82ADAB87/"
            />
            <CertificationCard
              title="Introduction to Python"
              issuer="365 Data Science"
              date="2024"
              link="https://learn.365datascience.com/certificates/CC-1F47BE6F06/"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="max-w-md mx-auto text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <a
              href="mailto:hamroun1969@gmail.com"
              className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors mb-4"
            >
              Email Me
            </a>
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/mohamedx2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/mohamed-ali-hamroun-486573314/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white flex items-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
      <h3 className="font-bold mb-4 text-gray-900 dark:text-white">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="text-gray-600 dark:text-gray-300 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ 
  title, 
  description, 
  tags,
  githubLink,
  demoLink 
}: { 
  title: string; 
  description: string; 
  tags: string[];
  githubLink?: string;
  demoLink?: string;
}) {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800">
      <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>
        )}
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

function CertificationCard({ 
  title, 
  issuer, 
  date,
  link 
}: { 
  title: string;
  issuer: string;
  date: string;
  link: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800 transition-all hover:shadow-md"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-xl text-gray-900 dark:text-white">{title}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-300">{issuer}</p>
      <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400">
        <span className="text-sm">View Certificate</span>
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </a>
  );
}
