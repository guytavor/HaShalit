import React from 'react';
import Effect from '../src/components/Effect/Effect';
import ReligionIconInverse from '../src/components/Effects/Icons/ReligionIconInverse';

export default class EffectStory extends React.PureComponent {
    state = {
        points: 50,
        peekPoints: 0,
    };

    render() {
        const { points, peekPoints } = this.state;

        return (
            <div style={{paddingTop: '40px', backgroundColor: 'gray'}}>
                <Effect points={points} willEffect={peekPoints}>
                    <ReligionIconInverse />
                </Effect>
                {points}
                <button onClick={this._addRandomPoints}>Add random points</button>
                <button onClick={this._showSmallEffect}>Show small effect</button>
                <button onClick={this._showBigEffect}>Show big effect</button>
                <button onClick={this._clear}>Clear</button>
            </div>
        );
    }

    _addRandomPoints = () => {
        const nextPoints = this._getNextPoints();
        this.setState({points: nextPoints})
    }

    _getNextPoints() {
        const { points } = this.state;
        const r = Math.random();
        return points + this._linearTranslation(points, r);
    }

    _linearTranslation(points, r) {
        return Math.round(100 * r) - points;
    }

    _showSmallEffect = () => {
        this.setState({peekPoints: 10});
    }

    _showBigEffect = () => {
        this.setState({peekPoints: 100});
    }

    _clear = () => {
        this.setState({peekPoints: 0});
    }
}