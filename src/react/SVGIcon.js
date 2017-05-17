/*!
 * Copyright (C) 2017 AT&T Intellectual Property. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */
import React, {PropTypes} from 'react';

 const SVGIcon = ({name, onClick, label, className, iconClassName, labelClassName, labelPosition, other}) => {
	
		let classes = `svg-icon-wrapper ${className} ${onClick ? 'clickable' : ''} ${labelPosition}`;

		return (
			<div {...other} onClick={onClick} className={classes}>
				<svg className={`svg-icon ${name} ${iconClassName}`}  >
					<use href={ICON_PATH + name + '.svg#' + name + '_icon' }
						 xlinkHref={ICON_PATH + name + '.svg#' + name + '_icon' } />
				</svg>
				{label && <span className={`svg-icon-label ${labelClassName}`}>{label}</span>}
			</div>
		);
	
}


SVGIcon.propTypes = {
		name: PropTypes.string.isRequired,
		onClick: PropTypes.func,
		label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
		labelPosition: PropTypes.string,
		className: PropTypes.string,
		iconClassName: PropTypes.string,
		labelClassName: PropTypes.string
	};

	SVGIcon.defaultProps = {
		name: '',
		label: '',
		className: '',
		iconClassName: '',
		labelClassName: '',
		labelPosition: 'bottom'
	};

export default SVGIcon;