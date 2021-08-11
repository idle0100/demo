type ElementType = number | string;

class Node {
    element: ElementType;
    next: Node | null;

    constructor(element: ElementType) {
        this.element = element;
        this.next = null;
    }
}


const node = new Node('sdss')

