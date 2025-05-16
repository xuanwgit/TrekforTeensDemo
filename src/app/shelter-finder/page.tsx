'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Mock data for demonstration
const mockShelters = [
  {
    id: 1,
    name: "Youth Haven",
    address: "123 Main St, Toronto, ON",
    phone: "416-555-0101",
    services: ["Emergency Shelter", "Counselling", "Food Bank"],
    availability: "24/7",
    distance: "2.3 km"
  },
  {
    id: 2,
    name: "Safe Space Youth Center",
    address: "456 Queen St, Toronto, ON",
    phone: "416-555-0102",
    services: ["Drop-in Center", "Job Training", "Mental Health Support"],
    availability: "Mon-Fri 9am-9pm",
    distance: "3.1 km"
  },
  // Add more mock shelters as needed
];

export default function ShelterFinder() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const services = ["Emergency Shelter", "Counselling", "Food Bank", "Drop-in Center", "Job Training", "Mental Health Support"];

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Find a Shelter Near You</h1>
          
          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="mb-6">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                Search by Location
              </label>
              <input
                type="text"
                id="search"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Services
              </label>
              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => toggleService(service)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedServices.includes(service)
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {mockShelters.map((shelter) => (
              <div key={shelter.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">{shelter.name}</h2>
                    <p className="text-gray-600 mb-4">{shelter.address}</p>
                    <div className="flex items-center text-gray-600 mb-4">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${shelter.phone}`} className="hover:text-blue-600">{shelter.phone}</a>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                      {shelter.availability}
                    </span>
                    <p className="text-gray-600 mt-2">{shelter.distance}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Available Services:</h3>
                  <div className="flex flex-wrap gap-2">
                    {shelter.services.map((service) => (
                      <span
                        key={service}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Link
                    href={`/shelter-finder/${shelter.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    View Details
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 