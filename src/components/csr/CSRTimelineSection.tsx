import Reveal from '@/components/ui/Reveal';
import { csrEvents, csrYears } from '@/data/csr';
import CSRTimeline from './CSRTimeline';

export default function CSRTimelineSection() {
    const total = csrEvents.length;
    const photographs = csrEvents.reduce((n, e) => n + e.images.length, 0);

    return (
        <section
            id="timeline"
            className="scroll-mt-24 bg-white section-padding"
            aria-labelledby="timeline-heading"
        >
            <div className="container-site">
                <Reveal className="max-w-3xl">
                    <p className="flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-primary">
                        <span className="h-px w-6 bg-primary-light" aria-hidden="true" />
                        Archive
                    </p>
                    <h2
                        id="timeline-heading"
                        className="mt-4 text-3xl font-extrabold leading-[1.1] text-primary-dark md:text-4xl lg:text-[2.6rem]"
                    >
                        CSR Activity Timeline
                    </h2>
                    <div className="mt-6 h-0.5 w-16 bg-secondary" aria-hidden="true" />
                    <p className="mt-6 text-base leading-relaxed text-text-secondary lg:text-lg lg:leading-relaxed">
                        {total} activities recorded on the MV Diabetes CSR page, with{' '}
                        {photographs} original photographs. Select a photograph to view it larger.
                    </p>
                </Reveal>

                <div className="mt-10 lg:mt-12">
                    <CSRTimeline events={csrEvents} years={csrYears} />
                </div>
            </div>
        </section>
    );
}
