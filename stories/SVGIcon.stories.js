import React from 'react';
import Examples from './utils/Examples.js';
import {select} from '@kadira/storybook-addon-knobs';


import SVGIcon from '../src/react/SVGIcon';
// import HTMLButtonPrimary from '../components/button/button-primary.html';
// import HTMLButtonWhite from '../components/button/button-white.html';




const icons = [
    'vendor',
    'vsp',
    'vlm'
];

function selectType() {
    return select('Item type' , icons, icons[0]);
}


function buildExamples(iconName) {
    return {
        Primary: {
            jsx: <SVGIcon label='test' name={iconName} />
        }  
    }
}

class Icons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iconName: 'vendor'
        }
    }
    render() {
        return (  
            <div>
                <select onChange={e => this.setState({iconName: e.target.value})}>{icons.map(option => <SelectOption option={option}/>)}</select>
                <Examples examples={buildExamples(this.state.iconName)} />    
           </div> 
        )
    };
}

const SelectOption = ({option}) => {
    return (
        <option value={option}>{option}</option>
    );
}

export default Icons;