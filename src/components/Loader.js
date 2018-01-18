import * as React from 'react';
import './styles.css';

export class Loader extends React.Component {
    render() {
        const r = 100;
        const midpoint = 250;
        const arc = 2 / 3 * Math.PI * r;
        return (
            <svg className="loader" width={500} height={500}>
                {/* <circle
                    className="main"
                    r={r}
                    cx={midpoint}
                    cy={midpoint}
                    fill="none"
                    stroke="black"
                /> */}
                {[0, 1, 2, 3, 4, 5].map(i => (
                    
                    <circle
                        className={`petal petal-${i}`}
                        r={r}
                        cx={midpoint + Math.sin(i * Math.PI / 3) * r}
                        cy={midpoint + Math.cos(i * Math.PI / 3) * r}
                        fill="none"
                        style={{
                            stroke: `hsl(${(i + 3) / 6 * 360}, 80%, 70%)`,
                            transform: `rotate(-${i * 60}deg)`
                        }}
                        strokeDasharray={`
                            0
                            ${arc * 7/4}
                            ${arc}
                            ${arc/4}
                        `}
                    />
                ))}
            </svg>
        )
    }
}