import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button.js';

const Footer = ({
    onClose,
    closeButtonText,
    actionButtonText,
    actionButtonClick,
    withButtons,
    children,
    confirmDataTestId,
    cancelDataTestId
}) => {
    const closeBtnType = actionButtonClick ? 'secondary' : 'primary';
    return (
        <div className="sdc-modal__footer">
            {children}
            {withButtons && (
                <div>
                    {actionButtonClick && (
                        <Button
                            onClick={actionButtonClick}
                            data-test-id={confirmDataTestId}>
                            {actionButtonText}
                        </Button>
                    )}
                    <Button
                        btnType={closeBtnType}
                        onClick={onClose}
                        data-test-id={cancelDataTestId}>
                        {closeButtonText}
                    </Button>
                </div>
            )}
        </div>
    );
};

Footer.propTypes = {
    onClose: PropTypes.func,
    closeButtonText: PropTypes.string,
    actionButtonText: PropTypes.string,
    actionButtonClick: PropTypes.func,
    withButtons: PropTypes.bool,
    children: PropTypes.node,
    confirmDataTestId: PropTypes.string,
    cancelDataTestId: PropTypes.string
};

Footer.defaultProps = {
    closeButtonText: 'Close',
    withButtons: true
};

export default Footer;
