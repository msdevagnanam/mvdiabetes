export interface TeamMember {
    name: string;
    qualification: string;
    category: string;
}

export const bengaluruTeam: TeamMember[] = [
    { name: 'Dr. Vijay Viswanathan', qualification: 'M.D., Ph.D., FRCP (London), FRCP (Glasgow)', category: 'Doctors' },
    { name: 'Dr. Vishnupriya Reddy', qualification: 'M.B.B.S., MDRC, DFM (RCGP)', category: 'Doctors' },
    { name: 'Dr. Sanjay B.S', qualification: 'M.B.B.S., D-DIAB (AIMS)', category: 'Doctors' },
    { name: 'Mrs. Padmavathy', qualification: 'B.Sc in Nutrition & Dietetics', category: 'Nutrition' },
    { name: 'Mr. Gokul Raj', qualification: 'DMLT', category: 'Laboratory' },
    { name: 'Ms. Pragna Swaroop', qualification: 'B.Sc (NDCZ), M.Sc in Nutrition & Dietetics', category: 'Nutrition' },
    { name: 'Mrs. Icy Shaju', qualification: 'Nursing & Midwifery', category: 'Nursing' },
    { name: 'Mr. Gopal Singh', qualification: 'B.Sc., DMLT', category: 'Laboratory' },
    { name: 'Mrs. Uma Devi G', qualification: 'B.Com', category: 'Administration' },
    { name: 'Mr. Riyaz Ahmed Khan', qualification: 'B.Com', category: 'Administration' },
    { name: 'Mr. Sai Kumar', qualification: 'DMLT', category: 'Laboratory' },
    { name: 'Mr. Ameen Shariff', qualification: 'D. Pharm', category: 'Pharmacy' },
    { name: 'Dr. Shyam Sunder', qualification: 'MBBS, M.D., D.N.B., D.M (Cardiology)', category: 'Doctors' },
    { name: 'Mrs. Rama Bai', qualification: 'B.Com', category: 'Administration' },
    { name: 'Dr. Sreelakshmi', qualification: 'BDS, MDS', category: 'Doctors' },
    { name: 'Dr. Dilip Dhanapal', qualification: 'MBBS, MS, M.Ch (Urology)', category: 'Doctors' },
    { name: 'Dr. Amit Jain', qualification: 'MBBS, DNB (Surgery), FPS (Diabetic Foot), Wound Care Specialist', category: 'Doctors' },
    { name: 'Dr. Ramamurthy', qualification: 'M.B.B.S., DNB, MNAMS', category: 'Doctors' },
];

export const teamCategories = ['All', 'Doctors', 'Nutrition', 'Nursing', 'Laboratory', 'Pharmacy', 'Administration'];
