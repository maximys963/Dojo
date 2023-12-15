
export function createList(containerId: string, items: string[]): void {
    const container = document.getElementById(containerId);
    if (!container) throw new Error('Container not found');

    const list = document.createElement('ul');
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        list.appendChild(listItem);
    });

    container.appendChild(list);
}
