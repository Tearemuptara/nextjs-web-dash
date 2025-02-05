'use client'

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
  pdf?: string
}

const projects: Project[] = [
  {
    title: 'Langchain & Streamlit Chatbot',
    description: 'Built a chatbot with Ollama, Langchain and Streamlit',
    technologies: ['Python', 'Web Apps', 'LangChain', 'Streamlit', 'LLMs'],
    github: 'https://github.com/Tearemuptara/llama2'
  },
  {
    title: 'Weather Data API',
    description: 'Make calls to Weather.gov API to retrieve required data based on geolocation.',
    technologies: ['Python', 'JavaScript', 'API', 'Geolocation'],
    github: 'https://github.com/Tearemuptara/open-weather-api'
  },
  {
    title: 'Thermal Analysis and Testing of Oregon’s First Satellite',
    description: 'NASA grant awarded to analyze and test thermal limits of OreSat',
    technologies: ['Mechanical Design', 'Mathematical Modeling', 'FEA', 'Capstone', 'Open Source'],
    github: 'https://github.com/oresat',
    link: 'https://spacegrant.oregonstate.edu/posters/thermal-analysis-and-testing-oregon%E2%80%99s-first-satellite'
  },
  {
    title: 'Concept Development of a Magnetically Damped Check Valve',
    description: '1st Place in Engineering Division, Propulsion & Flight Programs, 2016 Intern Research Symposium',
    technologies: ['Creo Parametric', 'MATLab', 'Windchill', 'Data Analysis', 'Mathematical Modeling', 'Mechanical Testing'],
    pdf: 'app\images\ER33_Prevo_Tara_Poster - Copy.pdf',
    link: 'https://patents.google.com/patent/US11098817B1/en'
  },
  {
    title: 'Liquid Fuel Rocket Engine Test Stand',
    description: 'NASA grant to create a test stand for a LOX/ethanol rocket engine capable of reaching the Karman Line.',
    technologies: ['Jupyter', 'Python', 'P&ID', 'Inventory', 'Aerospace Specification', 'Cryogenics', 'Budget Management'],
    github: 'https://github.com/psas/liquid-engine-test-stand',
    link: 'https://spacegrant.oregonstate.edu/sites/spacegrant.oregonstate.edu/files/lfets_osgc_nov_2017.pdf'
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
            T. M. Prevo
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Aerospace Systems Engineer
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/TearEmUpTara" 
               className="text-gray-600 hover:text-gray-900"
               target="_blank"
               rel="noopener noreferrer">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/tmprevo"
               className="text-gray-600 hover:text-gray-900"
               target="_blank"
               rel="noopener noreferrer">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:tmprevo@gmail.com"
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
                I'm a versatile engineer with 3 years of experience in embedded software and almost 7 years of research & development at NASA. 
                Prior to college, I had a thriving career at giants like Netflix and AT&T. I'm passionate about solving complex problems through elegant solutions.
              </p>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Embedded Software Engineer II</h3>
                <p className="text-gray-600">Daimler Truck • 2021 - 2024</p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>Led development of Central Gateway ECU in custom semi-trucks</li>
                  <li>Reduced Custom Work Orders by 80%</li>
                  <li>Mentored junior engineers globally in enterprise and test automation methods</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Engineering Intern</h3>
                <p className="text-gray-600">NASA, Various Projects • 2015 - 2020</p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li><b>2015-2016 UTEAP Grant:</b> Secured funding to design a rocket engine test stand</li>
                  <li><b>2016 Internship:</b> Produced 1st Place award-winning propulsion valve prototype</li>
                  <li><b>2017 Internship:</b> Invited back to MSFC to expand on previous research</li>
                  <li><b>2018-2019 Lab Assistant:</b> Designed flow test experiment for the International Space Station/SpaceX-18 mission at Dryden Drop Tower</li>
                  <li><b>2019-2020 UTEAP Grant:</b> Secured funding for 2U cubesat thermal analysis</li>
                  <li><b>2020 IRPI Internship:</b> Designed 3D capillary fluid manifolds in Solidworks for commercial print and microgravity testing</li>
                  <li><b>2020 MSFC Internship:</b> Modeled and demonstrated fluid mass coupling technology for clients in the offshore wind energy industry</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Technical Support Representative</h3>
                <p className="text-gray-600">Netflix • 2011 - 2014</p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                <li>Ranked in the top 10 of 1,000 employees according to rigorous performance metrics</li>
                <li>Presented a training that cut dissatisfaction rates by 40% over 1 month center-wide</li>
                <li>Assisted with fraud prevention projects in collaboration with the USPS</li>
                <li>Assisted approximately 120 customers per day on various networks and platforms, totaling 20,000 lifetime contacts and a 96.5% satisfaction rate</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Languages</h3>
                <p className="text-gray-700">Python, VBA, XML, TypeScript, HTML<br></br>English, Spanish, ASL</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-gray-700">React, Next.js, Tailwind CSS, Streamlit, Jupyter</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-gray-700">Node.js, PostgreSQL, Neo4J, MATLab</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools</h3>
                <p className="text-gray-700">Git, Docker, GCP, AWS, CI/CD, Solidworks</p>
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