export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'b1',
        slug: 'diabetes-and-kidney-health-early-signs-of-diabetic-kidney-disease-you-shouldnt-ignore',
        title: 'Diabetes and Kidney Health: Early Signs of Diabetic Kidney Disease You Shouldn\'t Ignore',
        excerpt: 'If you have been living with diabetes for several years, you probably check your blood sugar and HbA1c regularly. But when was the last time you checked your kidney health?',
        category: 'Kidney Health',
        date: '2025-07-15',
    },
    {
        id: 'b2',
        slug: 'continuous-glucose-monitoring-is-cgm-the-future-of-diabetes-management',
        title: 'Continuous Glucose Monitoring: Is CGM the Future of Diabetes Management?',
        excerpt: 'You check your fasting sugar in the morning. The value looks fine. You check your HbA1c every few months...',
        category: 'Technology',
        date: '2025-07-10',
    },
    {
        id: 'b3',
        slug: 'glp-1-medicines-for-type-2-diabetes-are-they-only-for-weight-loss',
        title: 'GLP-1 Medicines for Type 2 Diabetes: Are They Only for Weight Loss?',
        excerpt: 'Few diabetes medicines have attracted as much public attention in recent years as GLP-1 receptor agonists.',
        category: 'Medication',
        date: '2025-07-05',
    },
    {
        id: 'b4',
        slug: 'diabetic-neuropathy-why-tingling-burning-or-numb-feet-should-never-be-ignored',
        title: 'Diabetic Neuropathy: Why Tingling, Burning or Numb Feet Should Never Be Ignored',
        excerpt: 'Diabetic neuropathy is a common complication of diabetes that affects the nerves.',
        category: 'Neuropathy',
        date: '2025-06-28',
    },
    {
        id: 'b5',
        slug: 'diabetes-eye-care-how-to-protect-your-vision-from-diabetic-retinopathy',
        title: 'Diabetes Eye Care: How to Protect Your Vision from Diabetic Retinopathy',
        excerpt: 'Diabetic retinopathy is one of the most common diabetes-related eye complications.',
        category: 'Eye Care',
        date: '2025-06-20',
    },
    {
        id: 'b6',
        slug: 'can-walking-every-day-help-control-diabetes-benefits-explained',
        title: 'Can Walking Every Day Help Control Diabetes? Benefits Explained',
        excerpt: 'Walking is one of the simplest and most effective exercises for people living with diabetes.',
        category: 'Lifestyle',
        date: '2025-06-15',
    },
    {
        id: 'b7',
        slug: 'understanding-diabetic-neuropathy-causes-symptoms-treatment',
        title: 'Understanding Diabetic Neuropathy: Causes, Symptoms & Treatment',
        excerpt: 'Everything you need to know about diabetic neuropathy and how to manage it effectively.',
        category: 'Neuropathy',
        date: '2025-06-10',
    },
    {
        id: 'b8',
        slug: 'prediabetes-early-warning-signs-risk-factors-how-to-prevent-it',
        title: 'Prediabetes: Early Warning Signs, Risk Factors & How to Prevent It',
        excerpt: 'Learn to recognize prediabetes early and take steps to prevent progression to Type 2 diabetes.',
        category: 'Prevention',
        date: '2025-06-05',
    },
];
