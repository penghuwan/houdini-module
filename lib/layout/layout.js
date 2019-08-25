registerLayout('example-layout-fragment', class {
    async layout(children, edges, constraints, styleMap) {

        // You must perform layout to generate a fragment.
        const fragment = await child.layoutNextFragment({});

        // You can query the size of the fragment produced:
        console.log(fragment.inlineSize);
        console.log(fragment.blockSize);

        // You can set the position of the fragment, e.g. this will set it to the
        // top-left corner:
        fragment.inlineOffset = edges.inlineStart;
        fragment.blockOffset = edges.blockStart;

        // Data may be passed from the child layout:
        console.log(fragment.data);

        // If the child fragmented, you can use the breakToken to produce the next
        // fragment in the chain.
        const nextFragment = await child.layoutNextFragment({}, fragment.breakToken);
    }
});