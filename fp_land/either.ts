import * as E from 'fp-ts/lib/Either';
import { pipe } from 'fp-ts/function';

function processData(data: any) {
    // Some processing logic here
    return data;
}


async function fetchWithoutEither(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return processData(data); // Assume processData is a function that processes the data
    } catch (error) {
        console.error('Fetch error:', error.message);
        return null; // Or handle the error as appropriate
    }
}

async function fetchWithEither(url: string): Promise<E.Either<Error, { something: string }>>{
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        return E.right(processData(data)); // Assume processData is a function that processes the data
    } catch (error) {
        console.error('Fetch error:', error.message);
        return E.left(error); // Or handle the error as appropriate
    }
}


async function innerRequest(url: string) {
    const data = await fetchWithEither(url);

    return pipe( // pipe is a function that allows you to chain functions together
        data,
        E.fold(
            (error) => {
                // Handle error
                return null;
            },
            (data) => {
                // Do something with data
                return data;
            }
        )
    )
}
