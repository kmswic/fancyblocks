import * as React from 'react';

export class Loader extends React.Component {
    render() {
        const r = 100;
        const midpoint = 250;
        return (
            <svg width={500} height={500}>
                <circle r={100} cx={250} cy={250} fill="none" stroke="black" />
                {[1, 2, 3, 4, 5, 6].map(i => {
                    return (
                        <circle
                            r={r}
                            cx={midpoint + Math.sin(i * Math.PI / 3) * r}
                            cy={midpoint + Math.cos(i * Math.PI / 3) * r}
                            fill="none"
                            stroke="black"
                        />
                    )
                })}
            </svg>
        )
    }
}