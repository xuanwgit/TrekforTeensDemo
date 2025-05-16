'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Gradient Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform scale-105 animate-subtle-zoom" />
        <div className="container mx-auto px-4 z-20 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
            Making a Difference
          </h1>
          <p className="text-2xl md:text-3xl mb-12 font-light animate-fade-in-delay">
            Supporting homeless youth across Canada
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-in-delay-2">
            <Link 
              href="/donate" 
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg"
            >
              Donate Now
            </Link>
            <Link 
              href="/volunteer" 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency Help Section - New */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-center mb-6">Need Help?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-red-600">Emergency Support</h3>
                <p className="text-gray-600">If you're a youth in crisis, we're here to help.</p>
                <div className="space-y-2">
                  <a href="tel:1-800-668-6868" className="flex items-center text-lg font-medium text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Crisis Hotline: 1-800-668-6868
                  </a>
                  <Link href="/shelter-finder" className="flex items-center text-lg font-medium text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Find Nearest Shelter
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-blue-600">Support Programs</h3>
                <p className="text-gray-600">Access our youth support services and resources.</p>
                <div className="space-y-2">
                  <Link href="/programs" className="flex items-center text-lg font-medium text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    View Support Programs
                  </Link>
                  <Link href="/resources" className="flex items-center text-lg font-medium text-blue-600 hover:text-blue-800">
                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Resource Directory
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '1000+', label: 'Youth Helped' },
              { number: '15+', label: 'Cities' },
              { number: '500+', label: 'Volunteers' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-5xl font-bold text-blue-900 mb-4">{stat.number}</div>
                <div className="text-xl text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundraising Section - New */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Support Our Mission</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Your contribution makes a real difference</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">One-Time Donation</h3>
              <p className="text-gray-600 mb-6">Make an immediate impact with a single donation</p>
              <Link href="/donate" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Donate Now
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Fundraising Events</h3>
              <p className="text-gray-600 mb-6">Join or organize events to support our cause</p>
              <Link href="/events" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                View Events
              </Link>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Corporate Partnership</h3>
              <p className="text-gray-600 mb-6">Partner with us to create lasting change</p>
              <Link href="/partner" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Regions Section with Hover Effects */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Our Regions</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Making an impact across Canada</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Toronto', gradient: 'from-blue-500 to-blue-700' },
              { name: 'Kingston', gradient: 'from-purple-500 to-purple-700' },
              { name: 'Ottawa', gradient: 'from-indigo-500 to-indigo-700' }
            ].map((region) => (
              <div key={region.name} className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="h-64 relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${region.gradient} transform group-hover:scale-110 transition-transform duration-300`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">{region.name}</h3>
                  <Link 
                    href={`/regions/${region.name.toLowerCase()}`}
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 group-hover:translate-x-2 transition-transform"
                  >
                    Learn More 
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section with Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Latest News</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Stay updated with our latest initiatives</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  {/* Placeholder for news image */}
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">March 19, 2024</div>
                  <h3 className="text-xl font-semibold mb-3">Latest Initiative Update</h3>
                  <p className="text-gray-600 mb-4">Learn about our recent efforts to support homeless youth in our communities.</p>
                  <Link href="#" className="text-blue-600 font-medium hover:text-blue-800">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section with Gradient */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Up to Date</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community and be the first to know about our initiatives, events, and impact stories.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors transform hover:scale-105"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
} 