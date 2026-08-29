export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image?: string;
    author: string;
    readTime: string;
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: 'b1',
        slug: 'diabetes-and-kidney-health-early-signs-of-diabetic-kidney-disease-you-shouldnt-ignore',
        title: 'Diabetes and Kidney Health: Early Signs of Diabetic Kidney Disease You Shouldn\'t Ignore',
        excerpt: 'If you have been living with diabetes for several years, you probably check your blood sugar and HbA1c regularly. But when was the last time you checked your kidney health?',
        category: 'Kidney Health',
        date: '2025-07-15',
        author: 'MV Diabetes Medical Team',
        readTime: '6 min read',
        content: 'If you have been living with diabetes for several years, you probably check your blood sugar and HbA1c regularly. But when was the last time you checked your kidney health?\n\nDiabetic kidney disease, also known as diabetic nephropathy, is one of the most common and serious complications of diabetes. It develops silently over years, often without any noticeable symptoms until significant damage has occurred.\n\n## Early Warning Signs\n\n- Foamy or frothy urine\n- Swelling in ankles, feet, or hands\n- Increased need to urinate, especially at night\n- Persistent fatigue\n- Loss of appetite or nausea\n- Difficulty concentrating\n\n## Why Regular Screening Matters\n\nThe earliest sign of diabetic kidney disease is microalbuminuria — tiny amounts of protein leaking into your urine. A simple urine microalbumin test can detect this years before symptoms appear.\n\nAt MV Diabetes, we recommend all diabetes patients get their kidney function tested at least once a year through a urine microalbumin test and blood creatinine test.\n\n## How to Protect Your Kidneys\n\n1. Keep blood sugar well controlled (HbA1c below 7%)\n2. Control blood pressure (below 130/80 mmHg)\n3. Get tested yearly for kidney function\n4. Stay hydrated\n5. Avoid excessive pain medication use\n6. Follow your prescribed diabetes medication\n\nIf you are living with diabetes, don\'t wait for symptoms. Early detection and treatment can slow or even prevent the progression of diabetic kidney disease.',
    },
    {
        id: 'b2',
        slug: 'continuous-glucose-monitoring-is-cgm-the-future-of-diabetes-management',
        title: 'Continuous Glucose Monitoring: Is CGM the Future of Diabetes Management?',
        excerpt: 'You check your fasting sugar in the morning. The value looks fine. You check your HbA1c every few months...',
        category: 'Technology',
        date: '2025-07-10',
        author: 'MV Diabetes Medical Team',
        readTime: '7 min read',
        content: 'You check your fasting sugar in the morning. The value looks fine. You check your HbA1c every few months and it seems under control. But are you really seeing the full picture of your glucose levels?\n\nTraditional blood sugar testing gives you a snapshot — a single reading at a single moment. But your blood sugar is constantly changing throughout the day and night.\n\n## What is Continuous Glucose Monitoring?\n\nA CGM device is a small sensor placed just under your skin that continuously measures glucose levels in the interstitial fluid. It provides readings every 1-5 minutes, creating a complete picture of your glucose patterns.\n\n## Benefits of CGM\n\n- See real-time glucose levels throughout the day\n- Identify hidden highs and lows\n- Understand how food, exercise, and stress affect your sugar\n- Reduce hypo and hyperglycaemia episodes\n- Improve HbA1c without increasing hypoglycaemia\n\n## Who Should Consider CGM?\n\n- Type 1 diabetes patients\n- Type 2 patients on insulin\n- Patients with frequent hypoglycaemia\n- Gestational diabetes patients\n- Anyone wanting better glucose insight\n\nAt MV Diabetes, we offer advanced CGM technology with trained specialists who can help you interpret and act on your glucose data.',
    },
    {
        id: 'b3',
        slug: 'glp-1-medicines-for-type-2-diabetes-are-they-only-for-weight-loss',
        title: 'GLP-1 Medicines for Type 2 Diabetes: Are They Only for Weight Loss?',
        excerpt: 'Few diabetes medicines have attracted as much public attention in recent years as GLP-1 receptor agonists.',
        category: 'Medication',
        date: '2025-07-05',
        author: 'MV Diabetes Medical Team',
        readTime: '5 min read',
        content: 'Few diabetes medicines have attracted as much public attention in recent years as GLP-1 receptor agonists. Social media is full of stories about dramatic weight loss, but the real story of these medications in diabetes care is much more nuanced.\n\n## What are GLP-1 Receptor Agonists?\n\nGLP-1 receptor agonists are a class of diabetes medications that mimic the action of a natural hormone called glucagon-like peptide-1. They help your body produce more insulin when needed and reduce glucose production by the liver.\n\n## Beyond Weight Loss\n\nWhile weight loss is a notable benefit, GLP-1 medications offer multiple advantages for Type 2 diabetes patients:\n\n- Lower blood sugar levels with low risk of hypoglycaemia\n- Cardiovascular protection\n- Kidney protection\n- Weight management\n- Improved appetite regulation\n\n## Important Considerations\n\nThese medications should only be used under medical supervision. They are prescribed based on individual health profiles and are not suitable for everyone. Consult your diabetologist to understand if GLP-1 therapy is right for you.',
    },
    {
        id: 'b4',
        slug: 'diabetic-neuropathy-why-tingling-burning-or-numb-feet-should-never-be-ignored',
        title: 'Diabetic Neuropathy: Why Tingling, Burning or Numb Feet Should Never Be Ignored',
        excerpt: 'Diabetic neuropathy is a common complication of diabetes that affects the nerves.',
        category: 'Neuropathy',
        date: '2025-06-28',
        author: 'MV Diabetes Medical Team',
        readTime: '6 min read',
        content: 'Diabetic neuropathy is a common complication of diabetes that affects the nerves, particularly in the feet and legs. It develops gradually and can lead to serious complications if left unmanaged.\n\n## What is Diabetic Neuropathy?\n\nDiabetic neuropathy is nerve damage caused by prolonged high blood sugar levels. The most common form is peripheral neuropathy, which affects the feet and legs first, then sometimes the hands and arms.\n\n## Warning Signs\n\n- Tingling or pins and needles sensation\n- Burning pain, especially at night\n- Numbness or reduced feeling\n- Sharp, stabbing pains\n- Muscle weakness\n- Loss of balance or coordination\n\n## Why It Matters\n\nWhen you lose feeling in your feet, you may not notice injuries, blisters, or infections. This can lead to ulcers, infections, and in severe cases, the need for amputation.\n\n## What You Can Do\n\n1. Check your feet daily for cuts, blisters, or changes\n2. Keep blood sugar well controlled\n3. See your doctor immediately if you notice any symptoms\n4. Get regular foot examinations\n5. Wear proper footwear\n\nAt MV Diabetes, our diabetic foot care team — led by Dr. Vijay Viswanathan — has saved over 90,000 patients from prescribed amputation.',
    },
    {
        id: 'b5',
        slug: 'diabetes-eye-care-how-to-protect-your-vision-from-diabetic-retinopathy',
        title: 'Diabetes Eye Care: How to Protect Your Vision from Diabetic Retinopathy',
        excerpt: 'Diabetic retinopathy is one of the most common diabetes-related eye complications.',
        category: 'Eye Care',
        date: '2025-06-20',
        author: 'MV Diabetes Medical Team',
        readTime: '5 min read',
        content: 'Diabetic retinopathy is one of the most common and serious diabetes-related eye complications. It affects the blood vessels in the retina and is a leading cause of preventable blindness worldwide.\n\n## How Diabetes Affects Your Eyes\n\nHigh blood sugar levels can damage the tiny blood vessels in the retina. Over time, these damaged blood vessels may leak fluid, bleed, or become blocked, leading to vision problems.\n\n## Stages of Diabetic Retinopathy\n\n1. Mild non-proliferative retinopathy\n2. Moderate non-proliferative retinopathy\n3. Severe non-proliferative retinopathy\n4. Proliferative diabetic retinopathy\n\n## Protecting Your Vision\n\n- Get a dilated eye exam at least once a year\n- Keep blood sugar under good control\n- Manage blood pressure and cholesterol\n- Don\'t smoke\n- Report any vision changes immediately\n\nEarly detection through regular screening is the best way to protect your vision from diabetic retinopathy.',
    },
    {
        id: 'b6',
        slug: 'can-walking-every-day-help-control-diabetes-benefits-explained',
        title: 'Can Walking Every Day Help Control Diabetes? Benefits Explained',
        excerpt: 'Walking is one of the simplest and most effective exercises for people living with diabetes.',
        category: 'Lifestyle',
        date: '2025-06-15',
        author: 'MV Diabetes Medical Team',
        readTime: '4 min read',
        content: 'Walking is one of the simplest and most effective exercises for people living with diabetes. Regular walking can significantly improve blood sugar control, cardiovascular health, and overall wellbeing.\n\n## Benefits of Walking for Diabetes\n\n- Lowers blood sugar levels\n- Improves insulin sensitivity\n- Helps with weight management\n- Reduces cardiovascular risk\n- Improves mood and reduces stress\n- Strengthens muscles and bones\n\n## How Much Should You Walk?\n\nThe recommended target is 30 minutes of brisk walking at least 5 days a week. However, even 10-15 minutes of walking after meals can significantly reduce post-meal blood sugar spikes.\n\n## Tips for Getting Started\n\n1. Start slowly and gradually increase duration\n2. Walk after meals to reduce blood sugar spikes\n3. Wear proper footwear (especially important for diabetics)\n4. Stay hydrated\n5. Monitor your blood sugar before and after walking\n6. Carry a fast-acting sugar source in case of hypoglycaemia',
    },
    {
        id: 'b7',
        slug: 'understanding-diabetic-neuropathy-causes-symptoms-treatment',
        title: 'Understanding Diabetic Neuropathy: Causes, Symptoms & Treatment',
        excerpt: 'Everything you need to know about diabetic neuropathy and how to manage it effectively.',
        category: 'Neuropathy',
        date: '2025-06-10',
        author: 'MV Diabetes Medical Team',
        readTime: '8 min read',
        content: 'Diabetic neuropathy is a type of nerve damage that can occur if you have diabetes. High blood sugar can injure nerves throughout your body, but diabetic neuropathy most often damages nerves in your legs and feet.\n\n## Types of Diabetic Neuropathy\n\n### Peripheral Neuropathy\nThe most common type, affecting feet and legs first, then hands and arms.\n\n### Autonomic Neuropathy\nAffects the autonomic nervous system controlling your heart, bladder, stomach, intestines, and eyes.\n\n### Proximal Neuropathy\nAffects nerves in the thighs, hips, buttocks, or legs.\n\n### Focal Neuropathy\nDamage to a single nerve, most often in the hand, head, torso, or leg.\n\n## Treatment Approaches\n\n1. Blood sugar management is the most important treatment\n2. Pain management medications\n3. Physical therapy\n4. Foot care and regular screening\n5. Lifestyle modifications\n\nConsult your diabetologist for a comprehensive neuropathy assessment and personalised treatment plan.',
    },
    {
        id: 'b8',
        slug: 'prediabetes-early-warning-signs-risk-factors-how-to-prevent-it',
        title: 'Prediabetes: Early Warning Signs, Risk Factors & How to Prevent It',
        excerpt: 'Learn to recognize prediabetes early and take steps to prevent progression to Type 2 diabetes.',
        category: 'Prevention',
        date: '2025-06-05',
        author: 'MV Diabetes Medical Team',
        readTime: '5 min read',
        content: 'Prediabetes is a condition where blood sugar levels are higher than normal but not high enough to be diagnosed as Type 2 diabetes. Without intervention, prediabetes frequently progresses to Type 2 diabetes.\n\n## Warning Signs\n\n- Increased thirst\n- Frequent urination\n- Fatigue\n- Blurred vision\n- Darkened skin patches (acanthosis nigricans)\n\n## Risk Factors\n\n- Overweight or obesity\n- Family history of diabetes\n- Age over 45\n- Sedentary lifestyle\n- History of gestational diabetes\n- Polycystic ovary syndrome\n\n## Prevention Strategies\n\n1. Lose 5-7% of body weight if overweight\n2. Exercise at least 150 minutes per week\n3. Eat a balanced diet rich in fibre\n4. Get regular blood sugar screenings\n5. Manage stress\n\nAt MV Diabetes, we offer pre-diabetes prevention programs to help you take control before diabetes develops.',
    },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((b) => b.slug === slug);
}

export function getBlogsByCategory(category: string): BlogPost[] {
    return blogPosts.filter((b) => b.category === category);
}
