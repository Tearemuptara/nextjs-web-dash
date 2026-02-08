'use client'

import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink, FileText, Calendar } from 'lucide-react'
import Image from 'next/image';
import ResumeDropdown from './ui/ResumeDropdown';

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
    title: 'This website, taramichelle.info',
    description: 'Built a Next.js (React) website to host online portfolio of engineering work and demonstrate technical skills in web development and deployment.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Web Development'],
    github: 'https://github.com/Tearemuptara/nextjs-web-dash'
  },
  {
    title: 'Langchain & Streamlit Chatbot',
    description: 'Built a chatbot with Ollama, Langchain and Streamlit',
    technologies: ['Python', 'Web Apps', 'LangChain', 'Streamlit', 'LLMs'],
    github: 'https://github.com/Tearemuptara/llama2'
  },
  {
    title: 'Weather Data API',
    description: 'Make calls to Weather.gov API to retrieve required data based on geolocation. Useful for tracking ideal windsurfing conditions.',
    technologies: ['Python', 'JavaScript', 'API', 'Geolocation'],
    github: 'https://github.com/Tearemuptara/open-weather-api'
  },
  {
    title: 'Thermal Analysis and Testing of Oregon’s First Satellite',
    description: 'NASA grant awarded to analyze and test thermal limits of OreSat',
    technologies: ['Design', 'Mathematical Modeling', 'FEA', 'Capstone', 'Open Source'],
    github: 'https://github.com/oresat',
    link: 'https://spacegrant.oregonstate.edu/posters/thermal-analysis-and-testing-oregon%E2%80%99s-first-satellite'
  },
  {
    title: 'Concept Development of a Magnetically Damped Check Valve',
    description: '1st Place in Engineering Division, Propulsion & Flight Programs, 2016 Intern Research Symposium',
    technologies: ['Creo Parametric', 'MATLab', 'Windchill', 'Data Analysis', 'Mathematical Modeling', 'Mechanical Testing'],
    pdf: '/project_files/ER33_Prevo_Tara_Poster - Copy.pdf',
    link: 'https://patents.google.com/patent/US11098817B1/en'
  },
  {
    title: 'Liquid Fuel Rocket Engine Test Stand',
    description: 'NASA grant to create a test stand for a LOX/ethanol rocket engine capable of reaching the Karman Line.',
    technologies: ['Jupyter', 'Python', 'P&ID', 'Aerospace Specification', 'Cryogenics', 'Project Management'],
    github: 'https://github.com/psas/liquid-engine-test-stand',
    link: 'https://spacegrant.oregonstate.edu/sites/spacegrant.oregonstate.edu/files/lfets_osgc_nov_2017.pdf'
  }
]

export default function Home() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            T. M. Prevo
          </h1>
          <p className="text-xl text-gray-600 mb-3">
            Explorer. Bootstrapper. Engineer.
            <br />
            <i>If we can dream it, we can build it.</i>
          </p>
          <div className="flex justify-center items-center mb-4">
            <Image src="/project_files/mountain-theme.png"
              alt="Minimalist illustration of a snow-capped mountain peak with evergreen forests and a winding dirt path in the foreground."
              width={200} // width in pixels
              height={0} // height in pixels
              priority
              className="shadow-lg rounded-lg"
            />
          </div>
          <div className="flex justify-center space-x-4 mb-6">
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
          
          {/* Book Appointment Button */}
          <div className="flex justify-center mb-6">
            <Link 
              href="/book"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              <span>Book an appointment</span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center mb-6">
          <nav className="flex space-x-2">
            {['about', 'experience', 'skills', 'projects'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg ${activeTab === tab
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
              I'm a bootstrapper from Flint, Michigan: I grew up around engines and grit, left for Oregon with nothing but my truck, and put myself through mechanical engineering school while chronically homeless, earning cum laude honors with both hands tied behind my back. I've worked in massive enterprise operations at AT&T, Netflix, Daimler Truck, and NASA, in progressively responsible roles from sales to customer service to safety-critical component engineering. At NASA, I compressed a 16-week project into a single day and took on 4x the typical workload across multiple departments. At Daimler, I managed embedded software for the Central Gateway on Freightliner trucks, coordinated with global dev teams across four continents, oversaw production of 500+ vehicles daily, and reduced daily Custom Work Orders by 80% through automation and root cause analysis. With 20 years of hands-on mechatronics experience, I've been building cars, websites, software, and bootstrapping complex solutions for decades. Need a hand? I'm your man.
              </p>
            </div>
          )}

          {activeTab === 'experience' && (
            <div>
              <div className="flex justify-center mb-2">
                <ResumeDropdown />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Independent Builder & Consultant</h3>
                  <p className="text-gray-600">Self-Employed • 2024 - Present</p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>Managed complex FHA 203k renovation: roofing, plumbing, electrical, structural re-support, and interior design—completed 3 months early and $16k under budget</li>
                    <li>Built wheelchair ramps for disabled community members</li>
                    <li>Advised brother's Michigan startup to profitability within year 1</li>
                    <li>Developed containerized applications, launched websites, and built chatbots</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Embedded Software Engineer II</h3>
                  <p className="text-gray-600">Daimler Truck • 2021 - 2024</p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>Led development of Central Gateway ECU in custom semi-trucks</li>
                    <li>Reduced Custom Work Orders by 80%</li>
                    <li>Trained offshore teams for 1.5 years before role was outsourced</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">BSME Graduate, Class of 2020</h3>
                  <p className="text-gray-600">Maseeh College of Engineering and Computer Science • Cum Laude</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Engineering Intern</h3>
                  <p className="text-gray-600">NASA, Various Projects • 2015 - 2020</p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li><b>2015-2016 UTEAP Grant:</b> Secured funding to design a cryogenic rocket engine test stand</li>
                    <li><b>2016 Internship:</b> Produced 1st Place award-winning propulsion valve prototype</li>
                    <li><b>2017 Internship:</b> Invited back to MSFC to expand on previous research</li>
                    <li><b>2018-2019 Lab Assistant:</b> Designed flow test experiment for the ISS/SpaceX-18 mission at Dryden Drop Tower</li>
                    <li><b>2019-2020 UTEAP Grant:</b> Secured funding for 2U cubesat thermal analysis</li>
                    <li><b>2020 IRPI Internship:</b> Designed capillary fluid manifolds in Solidworks for commercial print and microgravity testing</li>
                    <li><b>2020 MSFC Internship:</b> Adopted fluid mass coupling technology to clients' needs in the offshore wind energy industry</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Technical Support Representative</h3>
                  <p className="text-gray-600">Netflix • 2011 - 2014</p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>Ranked in the top 10 of 1,000 technical support employees according to rigorous performance metrics</li>
                    <li>Presented a training that cut dissatisfaction rates by 40% over 1 month center-wide</li>
                    <li>Trained alongside the Netflix Research Department on fraud prevention projects</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">What I Actually Do</h3>
                <p className="text-gray-700">
                  Jump into broken systems, diagnose root causes, and ship working solutions under vague requirements and tight deadlines. I'm a technical generalist—more software mechanic than software engineer. If it's on the side of the road, I can get it running again.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Core Strengths</h3>
                  <p className="text-gray-700">
                    Rapid system diagnosis<br/>
                    Cross-functional coordination<br/>
                    Legacy system integration<br/>
                    0-to-1 problem solving<br/>
                    Working with ambiguity
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Technical Range</h3>
                  <p className="text-gray-700">
                    Embedded systems (4 years automotive)<br/>
                    Full-stack development<br/>
                    Database architecture & migration<br/>
                    Enterprise systems (COBOL to cloud)<br/>
                    Mechanical systems & diagnostics
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Languages & Tools</h3>
                  <p className="text-gray-700">
                    Python, TypeScript, SQL, VBA, XML<br/>
                    React, Next.js, Docker, GCP, AWS<br/>
                    CAD, Vector CANalyzer, Git<br/>
                    English, Spanish, ASL
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Domain Experience</h3>
                  <p className="text-gray-700">
                    Aerospace testing & analysis<br/>
                    Automotive embedded software<br/>
                    Enterprise operations (AT&T, Netflix)<br/>
                    Manufacturing systems<br/>
                    Technical documentation
                  </p>
                </div>
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
                      {project.pdf && (
                        <a href={project.pdf}
                          className="text-gray-600 hover:text-gray-900"
                          target="_blank"
                          rel="noopener noreferrer">
                          <FileText className="w-5 h-5" />
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