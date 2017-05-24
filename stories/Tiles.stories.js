import React from 'react';
import Examples from './utils/Examples.js';

import ReactTile from '../src/react/Tile';
import HTMLVspTile from '../components/tile/vsp-tile.html';

let examples = {
        Vsp: {
            jsx: <ReactTile/>,
            html: HTMLVspTile
        }
    };

const Tiles = () => (
    <Examples examples={examples} />
);

export default Tiles;