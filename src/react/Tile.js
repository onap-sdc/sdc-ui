import React, {PropTypes} from 'react';
import SVGIcon from './SVGIcon.js';
import Button from './Button.js';

const TileHeader = ({headerText, className}) => {
	return (
        <div className='sdc-tile-header'>
            <div className={`sdc-tile-header-type ${className}`}>
                {headerText}
            </div>
        </div>
	);
};

const TileContent = ({iconName, vendorName, tileName, versionName, className}) => {
	return (
        <div className='sdc-tile-content'>
            <div className='sdc-tile-content-icon'>
                <SVGIcon iconClassName={className} name={iconName}/>
            </div>
            <div className='sdc-tile-content-info'>
                <div className='sdc-tile-content-info-vendor-name'>{vendorName}</div>
                <div className='sdc-tile-content-info-item-name'>{tileName}</div>
                <div className='sdc-tile-content-info-version-info'>
                    <div className='sdc-tile-content-info-version-info-text' data-test-id='sdc-catalog-item-version'>{`V ${versionName}`}</div>
                </div>
            </div>
        </div>
	);
};

const VendorTileContent = ({vendorName, buttonText, onClick, className, iconName}) => {
	return (
        <div className='sdc-tile-content '>
            <div className='sdc-tile-content-icon'>
                <SVGIcon iconClassName={className} name={iconName}/>
            </div>
            <div className='sdc-tile-content-info vendor-tile'>
                <div className='sdc-tile-content-info-item-name'>{vendorName}</div>
                <Button btnType='outline-rounded vendor-count-button' color='gray' onClick={()=>onClick()}>
                    {`${buttonText} VSPs`}
                </Button>
            </div>
        </div>
	);
};

const TileFooter = ({footerText, iconName}) => {
	return (
        <div className='sdc-tile-footer'>
            <div className='sdc-tile-footer-text'>
                {footerText}
            </div>
            <div className='sdc-tile-footer-icon'>
                <SVGIcon name={iconName}/>
            </div>
        </div>
	);
};

const VendorTileFooter = ({footerText, iconName, onFooterIconClick}) => {
	return (
        <div className='sdc-vendor-tile-footer'>
            <div className='sdc-vendor-tile-footer-icon'>
                <SVGIcon onClick={onFooterIconClick} label={footerText} labelPosition='right' name={iconName}/>
            </div>
        </div>
	);
};

const Tile = (props) => {
	let {headerText, contentIconName, vendorName, tileName, versionName, footerText, footerIconName,
         className, vendorTile, vendorButtonText, onVendorButtonClick, onFooterIconClick, onClick} = props;
	return(
            <div onClick={onClick} className='sdc-tile-catalog sdc-tile-fix-width' data-code-id='catalog-sample'>
                <TileHeader className={className} headerText={headerText}/>
                {!vendorTile && <TileContent className={className} vendorName={vendorName} tileName={tileName} iconName={contentIconName} versionName={versionName}/>}
                {vendorTile && <VendorTileContent vendorName={vendorName} iconName={contentIconName} buttonText={vendorButtonText} onClick={onVendorButtonClick}/>}
                {!vendorTile && <TileFooter footerText={footerText} iconName={footerIconName}/>}
                {vendorTile && <VendorTileFooter onFooterIconClick={onFooterIconClick} footerText={'Create new VSP'} iconName={footerIconName}/>}
            </div>
	);
};

Tile.propTypes = {
	headerText: PropTypes.string,
	contentIconName: PropTypes.string,
	vendorName: PropTypes.string,
	tileName: PropTypes.string,
	versionName: PropTypes.string,
	footerText: PropTypes.string,
	footerIconName: PropTypes.string,
	vendorTile: PropTypes.bool,
	className: PropTypes.string,
	vendorButtonText: PropTypes.string,
	onVendorButtonClick: PropTypes.string,
	onFooterIconClick: PropTypes.string
};

export default Tile;
