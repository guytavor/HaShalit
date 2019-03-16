import React from 'react';
import Effect from '../src/components/Effect/Effect';
import ReligionIconInverse from '../src/components/Effects/Icons/ReligionIconInverse';

export default class EffectStory extends React.PureComponent {
    state = {
        points: 50
    };

    render() {
        const { points } = this.state;

        return (
            <div>
                <Effect points={points}>
                    <ReligionIconInverse />
                </Effect>
                {points}
                <button onClick={this._addRandomPoints}>Add random points</button>
            </div>
        );
    }

    _addRandomPoints = () => {
        const { points } = this.state;
        const r = Math.random();

        this.setState({points: points + this._linearTranslation(points, r)})
    }

    _linearTranslation(points, r) {
        return Math.round(100 * r) - points;
    }
}