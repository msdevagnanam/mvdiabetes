'use client';

export default function NewsHero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark section-padding pt-32 pb-24 md:pt-40 md:pb-32">
            {/* Background elements */}
            <div className="absolute inset-0 font-sans">
                <div className="absolute inset-0 bg-black/10" />
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                        backgroundSize: '24px 24px',
                    }}
                />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#03B9D5]/10 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/3 pointer-events-none" />
            </div>

            <div className="container-site relative z-10 text-center max-w-4xl mx-auto">
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    <span className="text-white/90 text-xs font-bold uppercase tracking-widest">
                        News & Events
                    </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
                    Stories, Milestones & <br className="hidden md:block" />
                    Moments from MV Diabetes
                </h1>

                {/* Supporting Text */}
                <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
                    Explore the latest developments, medical events, research milestones, community initiatives, and institutional moments from our rich history.
                </p>
            </div>
            
            {/* Bottom transition */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
        </section>
    );
}
