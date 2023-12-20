import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest';
import * as dataFetcherModule from "../dataFetcher";

const data = { ticketId: '123', date: new Date('2023-12-20') };

const dataResponse = new Response(JSON.stringify([
    data,
]));

describe('dateFetcher and processFetchedData functionality', () => {
    beforeEach(() => {
        global.fetch = vi.fn().mockImplementation((url) => {
            return Promise.resolve(dataResponse);
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    test('should fetch data and processes it', async () => {
        const spy = vi.spyOn(dataFetcherModule, 'processFetchedData');

        const result = await dataFetcherModule.dateFetcher('');

        expect(global.fetch).toHaveBeenCalledWith('');
        expect(result).toEqual([
            data,
        ]);

        spy.mockRestore();
    });
});
