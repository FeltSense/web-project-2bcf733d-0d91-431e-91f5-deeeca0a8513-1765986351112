import Image from 'next/image';

export default function Services() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section header */}
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-6">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
        Powerful Features
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
        Unlock Stories Hidden in
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-600">
          Every Building
        </span>
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
        Our AI-powered platform transforms how you experience architecture, revealing centuries of history with just a scan
      </p>
    </div>

    {/* Services grid with unique layouts */}
    <div className="space-y-8 lg:space-y-12">
      
      {/* Feature 1 - Large featured card */}
      <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200">
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="relative h-80 lg:h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 z-10"></div>
            <Image 
              src="https://images.unsplash.com/photo-1555861496-0666c8981751?w=800&h=600&fit=crop" 
              width={800} 
              height={600} 
              alt="AI scanning historical building architecture"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-6 left-6 z-20">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-slate-900">AI Active</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              AI-Powered Building Recognition
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Point your camera at any building and watch as our advanced AI instantly identifies architectural styles, construction periods, and historical significance. Machine learning trained on millions of structures worldwide delivers accurate results in seconds.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-semibold">99.2% Accuracy</span>
              <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold">Real-time Analysis</span>
              <span className="px-4 py-2 bg-amber-50 text-amber-700 rounded-full text-sm font-semibold">Global Database</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features 2 & 3 - Side by side cards */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Feature 2 */}
        <div className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 p-8 lg:p-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Instant Historical Facts
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Get immediate access to fascinating stories, key dates, famous events, and notable figures associated with each structure. Our AI curates the most compelling narratives from verified historical sources.
            </p>
            <div className="relative h-48 rounded-2xl overflow-hidden mb-6 border-2 border-amber-500/30">
              <Image 
                src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop" 
                width={800} 
                height={600} 
                alt="Historical documents and facts displayed on mobile device"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-300">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Timeline visualization of major events</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Audio narrations by professional historians</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Save and share your favorite discoveries</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200">
          <div className="relative h-64 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
            <Image 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop" 
              width={800} 
              height={600} 
              alt="Augmented reality overlay showing historical building visualization"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20">
              <div className="bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 border-2 border-white"></div>
                  </div>
                  <span className="text-xs font-semibold text-slate-700">AR Mode Active</span>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 lg:p-10">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Augmented Reality Time Travel
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Experience buildings as they appeared throughout history. Our AR technology overlays historical reconstructions onto the present-day view, letting you witness architectural evolution through different eras.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🏛️</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Original Construction</div>
                  <div className="text-sm text-slate-600">See the building when it was first built</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⏳</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Key Moments</div>
                  <div className="text-sm text-slate-600">Visualize major renovations and changes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature 4 - Full width bottom card */}
      <div className="group relative bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-amber-200">
        <div className="grid lg:grid-cols-5 gap-0">
          <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Expert-Curated Historical Database
            </h3>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              Access a meticulously researched database compiled by professional historians, archaeologists, and architectural experts. Every fact is verified, every story authenticated, ensuring you get the most accurate historical information available.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Verified Sources</div>
                  <div className="text-sm text-slate-600">Cross-referenced with archives</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Regular Updates</div>
                  <div className="text-sm text-slate-600">New discoveries added weekly</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Expert Contributors</div>
                  <div className="text-sm text-slate-600">150+ historians worldwide</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Rich Media</div>
                  <div className="text-sm text-slate-600">Photos, maps, documents</div>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-amber-700 font-semibold group-hover:gap-3 transition-all">
              <span>5M+ buildings documented</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
          <div className="lg:col-span-2 relative h-80 lg:h-full overflow-hidden order-1 lg:order-2">
            <Image 
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=800&fit=crop" 
              width={800} 
              height={800} 
              alt="Historical research and archive documents being digitized"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-amber-500/10 to-amber-50"></div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA section */}
    <div className="mt-20 text-center">
      <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-xl border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 border-2 border-white"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-white"></div>
          </div>
          <div className="text-left">
            <div className="font-bold text-slate-900">Join 50,000+ explorers</div>
            <div className="text-sm text-slate-600">Discovering history every day</div>
          </div>
        </div>
        <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
          Start Exploring Free
        </button>
      </div>
    </div>
  </div>
</section>
  );
}