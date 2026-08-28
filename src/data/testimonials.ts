export interface Testimonial {
    id: string;
    name: string;
    content: string;
    source: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 't1',
        name: 'Ganeshan K',
        content:
            'I visited M.V. Diabetic Hospital in Rayapuram. The doctors, nurses, and staff were very helpful in providing the required assistance to the patient. The doctor thoroughly reviewed the patient\'s medical reports and test results before providing medication and consultation. The hospital fees are affordable and in line with market rates. I would recommend any diabetic patient to visit the hospital at an early stage for timely treatment.',
        source: 'Google',
    },
    {
        id: 't2',
        name: 'Rita Sarkar',
        content:
            'M V Hospital is a very good hospital for diabetes treatment with utmost care and hospitality. I am 64 years old and suffering from diabetes last 25 years. I am visiting this hospital coming from Kolkata last 3 years and now my sugar level is very much in control.',
        source: 'Google',
    },
    {
        id: 't3',
        name: 'S.B. Moki',
        content:
            'The overall service provided was excellent. The staff, doctors, and nurses were all polite, responsible, and professional. A special mention to Nurse Arathi in our ward and Dr. Prasanth Arun for their kindness and professionalism.',
        source: 'Google',
    },
    {
        id: 't4',
        name: 'Dhanalakshmi Rajagopal',
        content:
            'All over excellent service. Doctors and staff also so kind.',
        source: 'Google',
    },
];
