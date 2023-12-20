/**
 *
 * Test dateFetcher and processFetchedData with correct data
 * Need mock global.fetch using vi.fn()
 * Need to use vi.spy() & mockImplementation for processFetchedData
 *
 *
 */


export async function dateFetcher(apiUrl: string) {
    const response = await fetch(apiUrl);
    const data: { ticketId: string, date: string }[] = await response.json();
    return processFetchedData(data);
}

export function processFetchedData(data: { ticketId: string, date: string }[]) {
    return data.map((item) => {
        const date = new Date(item.date);
        return { ...item, date };
    })
}


