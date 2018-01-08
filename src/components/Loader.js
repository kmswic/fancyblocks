import * as React from 'react';

export class Loader extends React.Component {
    render() {
        return (
            <svg width={500} height={500}>
                <circle r={100} cx={250} cy={250} fill="none" stroke="black" />
                <circle class="petal" r={100} cx={336.6} cy={200} fill="none"
                    stroke="black"
                    stroke-dashoffset={-156}
                />
                <circle class="petal" r={100} cx={336.6} cy={300}
                    fill="none" stroke="black" stroke-dashoffset={-263}
                />
                <circle class="petal" r={100} cx={250} cy={350} fill="none"
                    stroke="black" stroke-dashoffset={-368}
                />
                <circle class="petal" r={100} cx={250} cy={150} fill="none"
                    stroke="black"
                    stroke-dashoffset={-52}
                />

                <circle class="petal" r={100} cx={163.3} cy={300} fill="none"
                    stroke="black"
                    stroke-dashoffset={-470}
                />
                <circle class="petal" r={100} cx={163.3} cy={200} fill="none"
                    stroke="black"
                    stroke-dashoffset={-600}
                />
            </svg>
        )
    }
}