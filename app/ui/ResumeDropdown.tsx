'use client';

import { useState, useRef, useEffect } from 'react';
import { FileText, ChevronDown } from 'lucide-react';

interface ResumeOption {
    label: string;
    path: string
}

const resumeOptions: ResumeOption[] = [
    {label: 'CV', path: '/project_files/prevo-cv.pdf'},
    {label: 'Software Resume', path: '/project_files/prevo-software-resume.pdf'},
    {label: 'Mechanical Resume', path: '/project_files/prevo-mechanical-resume.pdf'},
];

export default function ResumeDropdown() {
    // Hook setup: variable and setter method to update
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking away
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="absolute z-10 inline-block text-left" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center px-7 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
                <FileText className="w-4 h-4 mr-2" />
                View Resume
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <div className="absolute-right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    {resumeOptions.map((option) => (
                        <a
                            key={option.label}
                            href={option.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 first:rounded-t-lg last:rounded-b-lg"
                        >
                            <FileText className="w-4 h-4 mr-2" />
                            {option.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}