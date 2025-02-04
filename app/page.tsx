'use client'

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col p-6">
//       <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
//         {/* <AcmeLogo /> */}
//       </div>
//       <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
//         <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
//           <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
//             <strong>Welcome to Acme.</strong> This is the example for the{' '}
//             <a href="https://nextjs.org/learn/" className="text-blue-500">
//               Next.js Learn Course
//             </a>
//             , brought to you by Vercel.
//           </p>
//           <Link
//             href="/login"
//             className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
//           >
//             <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
//           </Link>
//         </div>
//         <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
//           {/* Add Hero Images Here */}
//         </div>
//       </div>
//     </main>
//   );
// }

import { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Built a full-stack e-commerce platform with user authentication, product management, and payment integration.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'Stripe'],
    github: 'https://github.com/yourusername/ecommerce'
  },
  {
    title: 'Data Analytics Dashboard',
    description: 'Developed a real-time analytics dashboard for visualizing business metrics and KPIs.',
    technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
    link: 'https://dashboard-demo.com'
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Name
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Software Engineer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/yourusername" 
               className="text-gray-600 hover:text-gray-900"
               target="_blank"
               rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername"
               className="text-gray-600 hover:text-gray-900"
               target="_blank"
               rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com"
               className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-4">
            {['about', 'experience', 'skills', 'projects'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg ${
                  activeTab === tab
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'about' && (
            <div>
              <p className="text-gray-700 leading-relaxed">
                I'm a software engineer with X years of experience specializing in full-stack web development.
                I'm passionate about building scalable applications and solving complex problems through elegant solutions.
                Currently focused on cloud-native applications and distributed systems.
              </p>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Senior Software Engineer</h3>
                <p className="text-gray-600">Company Name • 2020 - Present</p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>Led development of microservices architecture</li>
                  <li>Improved system performance by 40%</li>
                  <li>Mentored junior developers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Software Engineer</h3>
                <p className="text-gray-600">Previous Company • 2018 - 2020</p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>Developed and maintained REST APIs</li>
                  <li>Implemented CI/CD pipelines</li>
                  <li>Collaborated with cross-functional teams</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Languages</h3>
                <p className="text-gray-700">TypeScript, JavaScript, Python, SQL</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-gray-700">React, Next.js, Tailwind CSS</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-gray-700">Node.js, Express, PostgreSQL</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools</h3>
                <p className="text-gray-700">Git, Docker, AWS, CI/CD</p>
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a href={project.github}
                           className="text-gray-600 hover:text-gray-900"
                           target="_blank"
                           rel="noopener noreferrer">
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link}
                           className="text-gray-600 hover:text-gray-900"
                           target="_blank"
                           rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}