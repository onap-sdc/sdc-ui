import {experimentOn} from '@islavi/ng2-component-lab';
import {TooltipPlacement} from '../../src/angular/tooltip/tooltip.directive';

export default experimentOn('Tooltip')
    .group("Tooltip",[
        {
            id: 'leftAlignmentTextTooltip',
            showSource: true,
            title: 'Tooltip with text (left placement)',
            description: 'left placement',
            context: {
                placement: TooltipPlacement.Left
            },
            template: `
                <input type="text" style="width:30%" 
                                sdc-tooltip 
                                    tooltip-text = 'This is the tooltip test'
                                    [tooltip-placement]= 'placement'
                                    tooltip-css-class = 'custom-tooltip' />
                `
        },
        {
            id: 'rightAlignmentHtmlTooltip',
            showSource: true,
            title: 'Tooltip with HTML template (right placement)',
            description: 'right placement',
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
        },
        {
            id: 'topAlignmentTextTooltip',
            showSource: true,
            title: 'Tooltip with text (top placement)',
            description: 'top placement',
            context: {
                placement: TooltipPlacement.Top
            },
            template: `
                <div style="width:30%; height: 30px; text-align: center; border: solid 1px gray;"
                                sdc-tooltip
                                    tooltip-text = 'This is the tooltip test'
                                    [tooltip-placement]= 'placement'
                                    tooltip-css-class = 'custom-tooltip' >This is div example
                </div>
                `
        },
        {
            id: 'bottomAlignmentHtmlTooltip',
            showSource: true,
            title: 'Tooltip with HTML template (bottom placement)',
            description: 'bottom placement',
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
        },
    ]);
