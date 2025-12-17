import Image from 'next/image';

export default function Testimonials() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-50 via-amber-50/30 to-slate-50">
  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-400/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
  
  <div className="relative max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100/60 rounded-full mb-6">
        <svg className="w-4 h-4 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        <span className="text-sm font-medium text-amber-900">Trusted by History Enthusiasts</span>
      </div>
      
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
        Stories from Our
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-slate-700">Community</span>
      </h2>
      <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
        Discover how people are uncovering hidden histories in their neighborhoods
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {/* Testimonial 1 */}
      <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform"></div>
        
        <div className="relative">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-slate-700 leading-relaxed mb-6 text-lg">
            "Scanned my apartment building in Brooklyn and discovered it was a speakeasy during Prohibition! Found <span className="font-semibold text-slate-900">27 historical records</span> including original blueprints and newspaper articles from 1925. This app turned my daily commute into a history tour."
          </p>
          
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-amber-400/20">
              <Image 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" 
                width={56} 
                height={56} 
                alt="Sarah Chen"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Sarah Chen</h4>
              <p className="text-sm text-slate-600">Architecture Student, NYC</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - Featured */}
      <div className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent rounded-2xl"></div>
        <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
        
        <div className="relative">
          <svg className="w-12 h-12 text-amber-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
          
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-slate-100 leading-relaxed mb-6 text-lg">
            "As a tour guide, this has been a game-changer. I&apos;ve added <span className="font-semibold text-amber-300">14 new stops</span> to my walking tours based on stories I discovered. My clients love learning that the coffee shop they&apos;re sitting in was once a telegraph office that received news of the 1906 earthquake."
          </p>
          
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-amber-400/40">
              <Image 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" 
                width={56} 
                height={56} 
                alt="Marcus Rodriguez"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-white">Marcus Rodriguez</h4>
              <p className="text-sm text-amber-200/80">Historical Tour Guide, San Francisco</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-slate-400/20 to-transparent rounded-full blur-xl group-hover:scale-110 transition-transform"></div>
        
        <div className="relative">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-slate-700 leading-relaxed mb-6 text-lg">
            "Used it on our school&apos;s field trip to downtown Boston. Kids were actually engaged! We discovered our city hall was built by <span className="font-semibold text-slate-900">immigrant laborers in 1865</span> and found their names in the archives. Made history feel real and personal for my students."
          </p>
          
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-amber-400/20">
              <Image 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
                width={56} 
                height={56} 
                alt="Jennifer Walsh"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">Jennifer Walsh</h4>
              <p className="text-sm text-slate-600">5th Grade Teacher, Boston</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 4 */}
      <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 md:col-span-2 lg:col-span-1">
        <div className="absolute top-1/2 right-0 w-32 h-32 bg-gradient-to-l from-amber-400/10 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform"></div>
        
        <div className="relative">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <p className="text-slate-700 leading-relaxed mb-6 text-lg">
            "Researching properties for my historical novel and this app saved me <span className="font-semibold text-slate-900">weeks of library time</span>. Pointed my phone at an old factory and instantly got photos from 1890, worker testimonies, and architectural details. The accuracy is incredible—cross-referenced everything with archives."
          </p>
          
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-amber-400/20">
              <Image 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" 
                width={56} 
                height={56} 
                alt="David Okonkwo"
                className="object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">David Okonkwo</h4>
              <p className="text-sm text-slate-600">Historical Fiction Author, Chicago</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Stats */}
    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-slate-700 mb-2">50K+</div>
        <div className="text-sm text-slate-600">Buildings Scanned</div>
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-slate-700 mb-2">4.9</div>
        <div className="text-sm text-slate-600">App Store Rating</div>
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-slate-700 mb-2">2M+</div>
        <div className="text-sm text-slate-600">Stories Discovered</div>
      </div>
      <div className="text-center">
        <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-slate-700 mb-2">150+</div>
        <div className="text-sm text-slate-600">Cities Covered</div>
      </div>
    </div>
  </div>
</section>
  );
}