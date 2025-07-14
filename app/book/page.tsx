import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function BookAppointment() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            href="/"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back to website</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Book an Appointment
          </h1>
          <p className="text-lg text-gray-600">
            Schedule a time to connect with T. M. Prevo
          </p>
        </div>

        {/* Cal.com Embedded Calendar */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="h-[700px]">
            <iframe
              src="https://cal.com/tmprevo"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule an appointment"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  )
} 