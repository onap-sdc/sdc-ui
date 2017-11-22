import {experimentOn} from '@islavi/ng2-component-lab';
import {TooltipPlacement} from '../../src/angular/tooltip/tooltip.directive';

export default experimentOn('Tooltip')
    .case('Tooltip with text (left placement)', {
        showSource: true,
        context: {
            placement: TooltipPlacement.Left
        },
        template: `
        <input type="text" style="width:30%" 
                        sdc-tooltip 
                            tooltip-text = 'This is the tooltip test'
                            [tooltip-placement]= 'placement'
                            tooltip-css-class = 'custom-tooltip'
                            [tooltip-disabled]='false' />
        `
    }).case('Tooltip with HTML template (right placement)', {
        showSource: true,
        context: {
            placement: TooltipPlacement.Right
        },
        template: `
        Template Input: 
        <pre><![CDATA[
                    <h2 style="background-color:red; font-weight: bold">Title... Title... Title...</h2>
                    <p style="background-color:blue; font-weight: bold">Content... Content..  Content..  Content..  Content..</p> 
        ]]></pre>

        <select style="width:30%" 
                        sdc-tooltip 
                            tooltip-text = 'This is the tooltip test'
                            [tooltip-placement]= 'placement'
                            tooltip-css-class = 'sdc-tooltip'
                            [tooltip-template]='template' >
            <option>Select</option>                            
            <option>Option 1</option>                            
            <option>Option 2</option>                            
            <option>Option 3</option>                            
        </select>                            
        <template #template>
            <h2 style="background-color:red; font-weight: bold">Title... Title... Title...</h2>
            <p style="background-color:blue; font-weight: bold">Content... Content..  Content..  Content..  Content..</p>
        </template>
        `
    }).case('Tooltip with text (top placement)', {
    showSource: true,
    context: {
        placement: TooltipPlacement.Top
    },
    template: `
            <div style="width:30%; height: 30px; text-align: center; border: solid 1px gray;"
                            sdc-tooltip 
                                tooltip-text = 'This is the tooltip test'
                                [tooltip-placement]= 'placement'
                                tooltip-css-class = 'custom-tooltip' >This is div example</div>
        `
    }).case('Tooltip with HTML template (bottom placement)', {
        showSource: true,
        context: {
            placement: TooltipPlacement.Bottom
        },
        template: `
        Template Input: 
        <pre><![CDATA[
                    <h2 style="background-color:red; font-weight: bold">Title... Title... Title...</h2>
                    <p style="background-color:blue; font-weight: bold">Content... Content..  Content..  Content..  Content..</p> 
        ]]></pre>

        <div style="width:30%; height: 30px; text-align: center;">
            <a style="color:blue; font-size: large; cursor: pointer;" 
                            sdc-tooltip 
                                tooltip-text = 'This is the tooltip test'
                                [tooltip-placement]= 'placement'
                                tooltip-css-class = 'sdc-tooltip'
                                [tooltip-template]='template' >This is link example</a>
        </div>                            
        <template #template>
            <h2 style="background-color:red; font-weight: bold">Title... Title... Title...</h2>
            <p style="background-color:blue; font-weight: bold">Content... Content..  Content..  Content..  Content..</p>
        </template>
        `
    }).case('Disabled Tooltip', {
        showSource: true,
        context: {
            placement: TooltipPlacement.Top
        },
        template: `
            <input type="text" style="width:30%" 
                            sdc-tooltip 
                                tooltip-text = 'This is the tooltip test'
                                [tooltip-placement]= 'placement'
                                tooltip-css-class = 'custom-tooltip'
                                [tooltip-disabled]='true' />
        `
    });
