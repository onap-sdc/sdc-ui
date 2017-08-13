import React from 'react';
import Examples from './utils/Examples.js';
import Tile, {TileInfo, TileFooter, TileButtonFooter, TileInfoLine, Tile2} from '../src/react/Tile.js';
import Button from '../src/react/Button.js';
import HTMLVspTile from '../components/tile/vsp-tile.html';
import HTMLVlmTile from '../components/tile/vlm-tile.html';
import HTMLVendorTile from '../components/tile/vendor-tile.html';

let examples = {
	VSP: {
		jsx:<Tile headerText='vsp' contentIconName='vsp' headerColor='blue' iconColor='blue'>
					<TileInfo>
						<TileInfoLine type='supertitle'>VLM</TileInfoLine>
						<TileInfoLine type='title'>VSP name</TileInfoLine>
					</TileInfo>
					<TileFooter>Draft</TileFooter>
				</Tile>
	},
	VLM: {
		jsx:<Tile headerText='vlm' contentIconName='vlm' headerColor='purple' iconColor='purple'>
					<TileInfo>
						<TileInfoLine type='title'>VLM name</TileInfoLine>
					</TileInfo>
					<TileFooter iconText='Contributor' iconName='versionControllerPermissions'>Certified</TileFooter>
				</Tile>
	},
	Vendor: {
		jsx:<Tile	contentIconName='vendor' iconColor='dark-gray'>
					<TileInfo alignCenter>
						<TileInfoLine type='title'>Vendor name</TileInfoLine>
						<TileInfoLine><Button btnType='outline-rounded' color='dark-gray' onClick={() => {}}>100 VSPs</Button></TileInfoLine>
					</TileInfo>
					<TileButtonFooter btnType='link' color='primary' iconName='plusThin' onClick={() => {}}>Create new VSP</TileButtonFooter>
				</Tile>
	}
};

const Tiles = () => (
	<Examples examples={examples} />
);

export default Tiles;
