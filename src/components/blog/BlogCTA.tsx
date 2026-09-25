import Link from 'next/link';

export default function BlogCTA() {
  return (
    <section className="bg-primary text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden my-16">
      <div className="relative z-10 max-w-3xl mx-auto font-sans">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Care That Goes Beyond Information</h2>
        <p className="text-base lg:text-lg text-white/80 mb-10 leading-relaxed">
          Reading about diabetes is the first step. Taking action is the next. 
          Our expert medical team is here to provide personalised care tailored to your unique needs.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/appointment" 
            className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book an Appointment
          </Link>
          <Link 
            href="/care" 
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            Explore Diabetes Care
          </Link>
        </div>
      </div>
    </section>
  );
}
