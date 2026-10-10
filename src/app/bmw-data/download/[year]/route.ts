import { bmwYears } from '@/data/bmw-data';
import { buildBMWYearCsv, bmwCsvFileName } from '@/data/bmw-csv';

// One CSV per reporting year, generated at build time; any other year is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return bmwYears.map(({ year }) => ({ year: String(year) }));
}

export async function GET(_request: Request, { params }: RouteContext<'/bmw-data/download/[year]'>) {
    const year = Number((await params).year);
    // The BOM makes Excel read the file as UTF-8.
    return new Response('\uFEFF' + buildBMWYearCsv(year), {
        headers: {
            'Content-Type': 'text/csv; charset=utf-8',
            'Content-Disposition': `attachment; filename="${bmwCsvFileName(year)}"`,
        },
    });
}
