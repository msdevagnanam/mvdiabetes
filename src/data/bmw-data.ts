export interface BMWMonthlyRecord {
    month: string;
    yellow: number | null;
    red: number | null;
    blue: number | null;
    white: number | null;
}

export interface BMWLocationData {
    location: string;
    months: BMWMonthlyRecord[];
    totals: {
        yellow: number;
        red: number;
        blue: number;
        white: number;
    };
}

export interface BMWYearData {
    year: number;
    locations: BMWLocationData[];
    downloadUrl: string;
}

export const bmwData: BMWYearData[] = [
    {
        year: 2021,
        downloadUrl: 'https://mvdiabetes.com/wp-content/uploads/2023/05/bmw-report2021.xls',
        locations: [
            {
                location: 'Royapuram',
                months: [
                    { month: 'January',   yellow: 84.5, red: 79.7, blue: 23,   white: 0 },
                    { month: 'February',  yellow: 177,  red: 171,  blue: 45.7, white: 0 },
                    { month: 'March',     yellow: 167.5,red: 156.2,blue: 38,   white: 0 },
                    { month: 'April',     yellow: 175,  red: 134,  blue: 34,   white: 0 },
                    { month: 'May',       yellow: 160,  red: 115,  blue: 39,   white: 0 },
                    { month: 'June',      yellow: 156,  red: 115,  blue: 25,   white: 0 },
                    { month: 'July',      yellow: 117,  red: 110,  blue: 35,   white: 0 },
                    { month: 'August',    yellow: 155,  red: 117,  blue: 38,   white: 0 },
                    { month: 'September', yellow: 131,  red: 133,  blue: 41,   white: 0 },
                    { month: 'October',   yellow: 169,  red: 139,  blue: 37,   white: 0 },
                    { month: 'November',  yellow: 145,  red: 111,  blue: 38,   white: 0 },
                    { month: 'December',  yellow: 244,  red: 206,  blue: 75,   white: 0 },
                ],
                totals: { yellow: 1881, red: 1586.9, blue: 468.7, white: 0 },
            },
            {
                location: 'Adyar',
                months: [
                    { month: 'January',   yellow: 4, red: 11, blue: 0, white: 0 },
                    { month: 'February',  yellow: 0, red: 9,  blue: 0, white: 0 },
                    { month: 'March',     yellow: 0, red: 13, blue: 0, white: 0 },
                    { month: 'April',     yellow: 0, red: 8,  blue: 0, white: 0 },
                    { month: 'May',       yellow: 0, red: 3,  blue: 0, white: 0 },
                    { month: 'June',      yellow: 1, red: 9,  blue: 0, white: 0 },
                    { month: 'July',      yellow: 4, red: 8,  blue: 0, white: 0 },
                    { month: 'August',    yellow: 4, red: 8,  blue: 0, white: 0 },
                    { month: 'September', yellow: 7, red: 10, blue: 0, white: 0 },
                    { month: 'October',   yellow: 7, red: 6,  blue: 0, white: 0 },
                    { month: 'November',  yellow: 4, red: 8,  blue: 0, white: 0 },
                    { month: 'December',  yellow: 7, red: 10, blue: 0, white: 0 },
                ],
                totals: { yellow: 38, red: 103, blue: 0, white: 0 },
            },
            {
                location: 'Velachery',
                months: [
                    { month: 'January',   yellow: 0,   red: 9,   blue: 0, white: 0 },
                    { month: 'February',  yellow: 0,   red: 9,   blue: 2, white: 0 },
                    { month: 'March',     yellow: 1.5, red: 4.5, blue: 2, white: 0 },
                    { month: 'April',     yellow: 2,   red: 5,   blue: 3, white: 0 },
                    { month: 'May',       yellow: 0,   red: 1,   blue: 0, white: 0 },
                    { month: 'June',      yellow: 0,   red: 6,   blue: 1, white: 0 },
                    { month: 'July',      yellow: 0,   red: 3,   blue: 3, white: 0 },
                    { month: 'August',    yellow: 0,   red: 7,   blue: 0, white: 0 },
                    { month: 'September', yellow: 0,   red: 6,   blue: 0, white: 0 },
                    { month: 'October',   yellow: 0,   red: 10,  blue: 0, white: 0 },
                    { month: 'November',  yellow: 6,   red: 3,   blue: 0, white: 0 },
                    { month: 'December',  yellow: 4,   red: 4,   blue: 0, white: 0 },
                ],
                totals: { yellow: 13.5, red: 67.5, blue: 11, white: 0 },
            },
        ],
    },
    {
        year: 2022,
        downloadUrl: 'https://mvdiabetes.com/wp-content/uploads/2023/05/bmw-report2022.xls',
        locations: [
            {
                location: 'Royapuram',
                months: [
                    { month: 'January',   yellow: 154, red: 125, blue: 43, white: 0 },
                    { month: 'February',  yellow: 145, red: 104, blue: 35, white: 0 },
                    { month: 'March',     yellow: 187, red: 157, blue: 64, white: 0 },
                    { month: 'April',     yellow: null, red: null, blue: null, white: null },
                    { month: 'May',       yellow: null, red: null, blue: null, white: null },
                    { month: 'June',      yellow: null, red: null, blue: null, white: null },
                    { month: 'July',      yellow: null, red: null, blue: null, white: null },
                    { month: 'August',    yellow: null, red: null, blue: null, white: null },
                    { month: 'September', yellow: null, red: null, blue: null, white: null },
                    { month: 'October',   yellow: null, red: null, blue: null, white: null },
                    { month: 'November',  yellow: null, red: null, blue: null, white: null },
                    { month: 'December',  yellow: null, red: null, blue: null, white: null },
                ],
                totals: { yellow: 486, red: 386, blue: 142, white: 0 },
            },
            {
                location: 'Adyar',
                months: [
                    { month: 'January',   yellow: 4, red: 7,  blue: 0, white: 0 },
                    { month: 'February',  yellow: 3, red: 8,  blue: 0, white: 0 },
                    { month: 'March',     yellow: 5, red: 10, blue: 0, white: 0 },
                    { month: 'April',     yellow: null, red: null, blue: null, white: null },
                    { month: 'May',       yellow: null, red: null, blue: null, white: null },
                    { month: 'June',      yellow: null, red: null, blue: null, white: null },
                    { month: 'July',      yellow: null, red: null, blue: null, white: null },
                    { month: 'August',    yellow: null, red: null, blue: null, white: null },
                    { month: 'September', yellow: null, red: null, blue: null, white: null },
                    { month: 'October',   yellow: null, red: null, blue: null, white: null },
                    { month: 'November',  yellow: null, red: null, blue: null, white: null },
                    { month: 'December',  yellow: null, red: null, blue: null, white: null },
                ],
                totals: { yellow: 12, red: 25, blue: 0, white: 0 },
            },
            {
                location: 'Velachery',
                months: [
                    { month: 'January',   yellow: 3,   red: 6, blue: 0, white: 0 },
                    { month: 'February',  yellow: 7,   red: 3, blue: 0, white: 0 },
                    { month: 'March',     yellow: 3.5, red: 3, blue: 0, white: 0 },
                    { month: 'April',     yellow: null, red: null, blue: null, white: null },
                    { month: 'May',       yellow: null, red: null, blue: null, white: null },
                    { month: 'June',      yellow: null, red: null, blue: null, white: null },
                    { month: 'July',      yellow: null, red: null, blue: null, white: null },
                    { month: 'August',    yellow: null, red: null, blue: null, white: null },
                    { month: 'September', yellow: null, red: null, blue: null, white: null },
                    { month: 'October',   yellow: null, red: null, blue: null, white: null },
                    { month: 'November',  yellow: null, red: null, blue: null, white: null },
                    { month: 'December',  yellow: null, red: null, blue: null, white: null },
                ],
                totals: { yellow: 13.5, red: 12, blue: 0, white: 0 },
            },
        ],
    },
];

// Helper: format a value for display (null → "—", number → "X kg")
export function formatBMWValue(value: number | null): string {
    if (value === null) return '—';
    return `${value}`;
}

// Helper: get combined totals for a year across all locations
export function getYearTotals(yearData: BMWYearData) {
    return yearData.locations.reduce(
        (acc, loc) => ({
            yellow: acc.yellow + loc.totals.yellow,
            red: acc.red + loc.totals.red,
            blue: acc.blue + loc.totals.blue,
            white: acc.white + loc.totals.white,
        }),
        { yellow: 0, red: 0, blue: 0, white: 0 }
    );
}
