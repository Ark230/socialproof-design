function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}



document.addEventListener('DOMContentLoaded', () => {
    multiplyNode(document.querySelector('.stars-1'), 5, true);
    multiplyNode(document.querySelector('.stars-2'), 5, true);
    multiplyNode(document.querySelector('.stars-3'), 5, true);
})



