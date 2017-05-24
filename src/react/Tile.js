import React from 'react';

class Tile extends React.Component {
    render() {
       return( 
        <div className="catalog-tile tile software-product-type" data-test-id="software-product-type">
            <div className="catalog-tile-top item-details">
                <div className="catalog-tile-type software-product-type">VSP</div>
                <div className="catalog-tile-icon software-product-type">
                    <div className="icon">
                        <div className="svg-icon-wrapper   bottom">
                            <svg className="svg-icon vsp ">
                                <use href="./assests/icons/vsp.svg#vsp_icon" xlinkHref="./assests/icons/vsp.svg#vsp_icon"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="catalog-tile-entity-details">
                    <div>
                        <div className="catalog-tile-vendor-name">vlm</div>
                    </div>
                    <div>
                        <div className="catalog-tile-item-name">lilach vsp</div>
                    </div>
                    <div className="catalog-tile-version-info">
                        <div className="catalog-tile-item-version" data-test-id="catalog-item-version">V 0.1</div>
                    </div>
                </div>
                <div className="catalog-tile-content software-product-type">
                    <div className="catalog-tile-locking-user-name">Checked Out</div>
                    <div className="catalog-tile-check-in-status">
                        <div data-test-id="catalog-item-checked-out" className="svg-icon-wrapper   bottom">
                            <svg className="svg-icon unlocked ">
                                <use href="../../assests/icons/unlocked.svg#unlocked_icon"  xlinkHref="../../assests/icons/unlocked.svg#unlocked_icon"></use>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       ); 
    }
}

export default Tile;