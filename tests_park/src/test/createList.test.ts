import { describe, expect, test, beforeAll, beforeEach } from "vitest";
import { JSDOM } from "jsdom";
import { createList } from "../createList";

describe("createList functionality", () => {
    let container: HTMLDivElement;
    const items = ['item1', 'item2', 'item3'];

    beforeAll(() => {
        const dom = new JSDOM(`<!DOCTYPE html><body></body>`);
        globalThis.document = dom.window.document;

        container = document.createElement('div');
        container.id = 'container';
        document.body.appendChild(container);
    });

    beforeEach(() => {
        container.innerHTML = '';
    });

    test("should create a list with the correct number of items", () => {
        createList('container', items);

        const list = container.querySelector('ul');
        expect(list).not.toBeNull();
        expect(list?.children.length).toBe(items.length);
    });

    test("should create list items with correct text content", () => {
        createList('container', items);

        const listItems = container.querySelectorAll('li');
        expect(listItems.length).toBe(items.length);
        items.forEach((item, index) => {
            expect(listItems[index].textContent).toBe(item);
        });
    });

    test("should throw an error if container is not found", () => {
        expect(() => createList('error', items)).toThrow('Container not found');
    });
});
