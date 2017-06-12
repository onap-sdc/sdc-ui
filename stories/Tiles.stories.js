import React from 'react';
import Examples from './utils/Examples.js';
import Tile from '../src/react/Tile.js';
import HTMLVspTile from '../components/tile/vsp-tile.html';
import HTMLVlmTile from '../components/tile/vlm-tile.html';
import HTMLVendorTile from '../components/tile/vendor-tile.html';

let examples = {
	Vsp: {
		jsx:<Tile headerText='VSP'
			contentIconName='vsp'
			vendorName='vlm'
			tileName='demo vsp'
			versionName='1.1'
			footerText='Locked'
			className='blue'
			onClick={()=>{}}
			footerIconName='locked'/>,
		html: HTMLVspTile
	},
	Vlm: {
		jsx:<Tile headerText='VLM'
			contentIconName='vlm'
			tileName='demo vlm'
			versionName='1.1'
			footerText='Unlocked'
			className='purple'
			onClick={()=>{}}
			footerIconName='unlocked'/>,
		html: HTMLVlmTile
	},
	Vendor: {
		jsx:<Tile
			contentIconName='vendor'
			vendorTile
			vendorName='demo Vendor'
			vendorButtonText='15'
			onVendorButtonClick={()=>{}}
			onFooterIconClick={()=>{}}
			footerIconName='plus'/>,
		html: HTMLVendorTile
	}
};

const Tiles = () => (
    <Examples examples={examples} />
);

export default Tiles;
