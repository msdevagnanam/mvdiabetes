import { Metadata } from 'next';
import { BookOpen, FileText, Search } from 'lucide-react';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
    title: 'Research Publications | MV Diabetes',
    description: 'Explore our comprehensive collection of cutting-edge research publications by Prof. M. Viswanathan and our esteemed team from 1958 onwards.',
    alternates: { canonical: '/research' }
};

const publications = [
    { title: 'Diethyl carbamazine citrate in tropical Eosinophilia', authors: 'Viswanathan', journal: 'The Antiseptic', year: '1958', issue: 'May 58 issue' },
    { title: 'Single dose therapy in tropical Eosinophilia further study', authors: 'Viswanathan', journal: 'The Antiseptic', year: '1958', issue: 'Nov 58 issue' },
    { title: 'Single dose of di-ethyl carbamazine for tropical Eosinophilia', authors: 'Viswanathan', journal: 'JAPI', year: '1958', issue: 'Vol- 6, no-4 ; pp 351 – 354' },
    { title: 'Management of complications produced by treatment', authors: 'Viswanathan', journal: 'N/A', year: '1958', issue: '' },
    { title: 'Diabetes mellitus and the family physician', authors: 'Viswanathan', journal: 'Mediscope', year: '1959', issue: 'September, vol- II, No-VI; pp 296' },
    { title: 'Tropical Eosinophilia', authors: 'Viswanathan', journal: 'Madras clinical journal', year: '1959', issue: 'Vol- XXVI' },
    { title: 'Diabetes Mellitus', authors: 'Viswanathan', journal: 'Stanly medical college journal', year: '1959', issue: '' },
    { title: 'Diabetes and You', authors: 'Viswanathan', journal: 'SMCJ', year: '1959', issue: '' },
    { title: 'Recent advances in the management of diabetes mellitus', authors: 'Viswanathan', journal: 'SMCJ', year: '1960', issue: '' },
    { title: 'Tuberose sclerosis', authors: 'Viswanathan, V.C.Anguli, and Mohammed', journal: 'JAPI', year: '1960', issue: 'Vol-8, no-6, nov 16; pp 569 – 576' },
    { title: 'The choice of a Diuretic', authors: 'Viswnathan', journal: 'The Annual Meeting of the Tiruchirrapally branch of IMA', year: '1960', issue: '' },
    { title: 'Bonnevie – Ulrich – Turner syndrome', authors: 'Viswanathan, and T.K.Gnaesan', journal: 'JAPI', year: '1960', issue: 'Vol-9, no-9, sep' },
    { title: 'Endemic fluorosis (Special article)', authors: 'Srinivasan and M.Viswanathan', journal: 'Mediscope', year: '1963', issue: 'Vol-V, no-XII' },
    { title: 'Acute Glomerulonephritis without Albuminuria', authors: 'M.Viswnathan, and K.Srinivasan', journal: 'JPAM', year: '1963', issue: 'Vol-2, no-2, December' },
    { title: 'Poluarteritis Nodosa', authors: 'Viswanathan, and K.Srinivasan', journal: 'JPAM', year: '1963', issue: 'Vol-2, no-1, June' },
    { title: 'Evaluation of chlorthalidone as a diuretic', authors: 'Viswanathan, and C.V.Krishnaswami', journal: 'JPAM', year: '1965', issue: 'vol-4, no-2, December' },
    { title: 'Tolbutamide in the Treatment of diabetes administration of single daily dose', authors: 'Viswanathan, and K.Krishnamurthy', journal: 'The Antiseptic', year: '1965', issue: 'Vol-62, no-12 ; pp 116-118' },
    { title: 'Oral therapy in diabetics with pulmonary Tuberculosis', authors: 'Viswanathan, and K.Krishnamurthy', journal: 'Madras clinical journal', year: '1965', issue: 'vol-31, no-10 ; pp 255 – 257' },
    { title: 'Diabetes Detection – our Responsibility', authors: 'Viswanathan', journal: 'Souvenir of the 19th madras state medical conference', year: '1965', issue: '' },
    { title: 'A study of the Indidence and clinical features of nertological Disorders in Diabetes Mellitus', authors: 'Viswanathan', journal: 'Madhumeha', year: '1967', issue: 'April Issue' },
    { title: 'Therapertic trials with oral Dehydroemetine in Intestinal Amoebiasis', authors: 'Viswanathan, O.V.Krishnaswamy', journal: 'The Antiseptic', year: '1967', issue: 'September issue' },
    { title: 'Remission of Diabetes', authors: 'Viswanathan', journal: 'The Antiseptic', year: '1967', issue: 'Feb issue' },
    { title: 'Clinical trial with A potent Diuretic with prolonged Action', authors: 'M.Viswanathan, C.V.Krishnaswamy', journal: 'Indian Medical Gazette', year: '1967', issue: 'May issue, vol-VII, no-1; PP 46-51' },
    { title: 'Therapeutic trials with oral Dehydroemetine in intestinal Amoebiasis', authors: 'Viswanathan, C.V.Krishnaswami', journal: 'JIMA', year: '1968', issue: 'Vol-51, no-8, October 16; pp 381-383' },
    { title: 'A Study of prolonged fevers in Madras', authors: 'Ramaswamy, M.Viswanathan', journal: 'JPAM', year: '1968', issue: 'Vol-7, no-1, june issue' },
    { title: 'High carbohydrate diet in Diabetes', authors: 'Viswanathan', journal: 'Madhumeha', year: '1968', issue: 'Vol-VIII, no-5, July issue' },
    { title: 'Control and Balance of Diet in diabetes', authors: 'V.Krishnaswamy, M.Viswanathan', journal: 'The Antiseptic', year: '1969', issue: 'January issue' },
    { title: 'Idiopathic Pericarditis', authors: 'Viswanathan, Krishna Chetty', journal: 'JPAM', year: '1970', issue: 'Vol-9, no-1, June issue' },
    { title: 'Clinical Assessment of Glybenclamide( Dannil) A New Antidiabetic Drug', authors: 'M.Viswanathan', journal: 'The Antiseptic', year: '1970', issue: 'October issue' },
    { title: 'Emergencies in Diabetes', authors: 'M.Viswanathan, V.Krishnaswamy', journal: 'The Antiseptic', year: '1971', issue: 'March issue' }
];

export default function ResearchPage() {
    return (
        <>
            <PageHero
                title="Research Publications"
                description="Delve into a wealth of pioneering research and insights driven by our profound commitment to advancing diabetes care."
                breadcrumbs={[{ label: 'Research' }]}
            />

            <section className="section-padding bg-surface-muted min-h-screen">
                <div className="container-site">

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-extrabold text-primary-dark mb-4">M.V. Publications (1958 Onwards)</h2>
                            <p className="text-text-secondary leading-relaxed">
                                Our institution has a long-standing legacy of scientific contribution. Explore the historical archive of
                                seminal papers and studies authored by our founder and our expert team since 1958.
                            </p>
                        </div>
                        <div className="relative w-full md:w-72 shrink-0">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search publications..."
                                className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            />
                        </div>
                    </div>

                    <div className="bg-white border border-border rounded-2xl shadow-sm overflow-hidden">
                        <div className="hidden md:grid grid-cols-12 gap-4 p-4 md:px-6 bg-surface border-b border-border text-sm font-bold text-text-primary uppercase tracking-wider">
                            <div className="col-span-1 text-center">Year</div>
                            <div className="col-span-5">Title & Reference</div>
                            <div className="col-span-3">Authors</div>
                            <div className="col-span-3">Journal</div>
                        </div>

                        <div className="divide-y divide-border">
                            {publications.map((pub, idx) => (
                                <div key={idx} className="group grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-2 p-4 md:p-6 hover:bg-primary/5 transition-colors items-center">
                                    <div className="col-span-1">
                                        <div className="inline-flex px-3 py-1 bg-surface-muted text-primary-dark font-bold text-sm rounded-lg border border-border group-hover:bg-primary group-hover:text-white transition-colors">
                                            {pub.year}
                                        </div>
                                    </div>
                                    <div className="col-span-5">
                                        <h3 className="text-base font-bold text-primary-dark mb-1 leading-snug">{pub.title}</h3>
                                        {pub.issue && <p className="text-sm text-text-secondary">{pub.issue}</p>}
                                    </div>
                                    <div className="col-span-3 flex items-start gap-2">
                                        <div className="mt-0.5"><BookOpen className="w-4 h-4 text-primary shrink-0 opacity-50" /></div>
                                        <span className="text-sm font-medium text-text-primary leading-tight">{pub.authors}</span>
                                    </div>
                                    <div className="col-span-3 flex items-start gap-2">
                                        <div className="mt-0.5"><FileText className="w-4 h-4 text-secondary shrink-0 opacity-50" /></div>
                                        <span className="text-sm italic text-text-secondary leading-tight">{pub.journal}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
