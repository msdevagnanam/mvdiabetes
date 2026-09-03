import { Building2, Phone, HeadphonesIcon, HelpCircle } from 'lucide-react';

export default function GlobalContactCards() {
    const cards = [
        {
            icon: Building2,
            title: 'Main Hospital Address',
            content: 'M.V. Hospital for Diabetes & Prof. M. Viswanathan Diabetes Research Centre, No.4, West Madha Church Street, Royapuram, Chennai - 600 013. Tamil Nadu, India.',
        },
        {
            icon: Phone,
            title: 'Contact Numbers',
            content: (
                <div className="flex flex-col gap-1">
                    <p>Phone: 044 - 2595 4913 / 4914 / 4915 / 0711</p>
                    <p>Vodafone: +91 93441 81394</p>
                    <p>Airtel: +91 93441 81410</p>
                </div>
            ),
        },
        {
            icon: HeadphonesIcon,
            title: 'Appointment Helpline',
            content: (
                <div className="flex flex-col gap-1">
                    <p className="font-bold text-primary">All India Toll Free: 1800 425 0005</p>
                    <p className="text-xs text-text-secondary mb-1">(For Appointments Only)</p>
                    <a href="mailto:appointments@mvdiabetes.com" className="hover:text-primary transition-colors underline underline-offset-4">appointments@mvdiabetes.com</a>
                </div>
            ),
        },
        {
            icon: HelpCircle,
            title: 'Executive Queries',
            content: (
                <div className="flex flex-col gap-2">
                    <p>Send your queries on any aspect of Diabetes Mellitus to:</p>
                    <p className="font-bold text-text-primary">Dr. Vijay Viswanathan</p>
                    <p className="text-xs text-text-secondary">M.D., PhD., FICP, FRCP (London & Glasgow)<br />Head & Chief Diabetologist</p>
                </div>
            ),
        },
    ];

    return (
        <section className="pt-16 pb-8 bg-white relative z-10">
            <div className="container-site">
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    {cards.map((card, i) => (
                        <div key={i} className="bg-surface-muted/30 border border-border rounded-2xl p-6 lg:p-8 hover:shadow-lg hover:border-primary/20 transition-all group flex flex-col text-center items-center">
                            <div className="w-14 h-14 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <card.icon size={26} />
                            </div>
                            <h3 className="text-lg font-extrabold text-primary-dark mb-4 group-hover:text-primary transition-colors">{card.title}</h3>
                            <div className="text-sm text-text-secondary leading-relaxed">
                                {card.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
