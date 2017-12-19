import {experimentOn} from '@islavi/ng2-component-lab';
import {ArrowPlacement, TooltipPlacement} from '../../src/angular/tooltip/tooltip.directive';

export default experimentOn('Tooltip')
    .group("Tooltip",[
        {
            id: 'leftAlignmentTextTooltip',
            showSource: true,
            title: 'Tooltip with short text (left placement)',
            description: 'left placement',
            context: {
                placement: TooltipPlacement.Left,
                arrowPlacement: ArrowPlacement.LeftTop
            },
            template: `
                <input type="text" style="width:30%; display: block;" 
                                sdc-tooltip 
                                    tooltip-text = 'A short text name, short text'
                                    [tooltip-placement]= 'placement'
                                    [tooltip-arrow-placement] = 'arrowPlacement' />
                `
        },
        {
            id: 'leftAlignmentMultiLineTextTooltip',
            showSource: true,
            title: 'Tooltip with multi line text (left placement)',
            description: 'left placement',
            context: {
                placement: TooltipPlacement.Left,
                arrowPlacement: ArrowPlacement.LeftTop
            },
            template: `
                <input type="text" style="width:30%" 
                                sdc-tooltip 
                                    tooltip-text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non, pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra'
                                    [tooltip-placement]= 'placement'
                                    [tooltip-arrow-placement] = 'arrowPlacement' />
                `
        },
        {
            id: 'leftAlignmentCustomStyleTooltip',
            showSource: true,
            title: 'Tooltip with custom style (left placement)',
            description: 'left placement',
            context: {
                placement: TooltipPlacement.Left,
                arrowPlacement: ArrowPlacement.LeftTop
            },
            template: `
                <input type="text" style="width:30%" 
                                sdc-tooltip 
                                    tooltip-text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non, pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra'
                                    [tooltip-placement]= 'placement'
                                    tooltip-css-class = 'sdc-custom-tooltip'
                                    [tooltip-arrow-placement] = 'arrowPlacement' />
                `
        },
        {
            id: 'rightAlignmentHtmlTooltip',
            showSource: true,
            title: 'Tooltip with HTML template (right placement)',
            description: 'right placement',
            context: {
                placement: TooltipPlacement.Right,
                arrowPlacement: ArrowPlacement.LeftTop
            },
            template: `
                Template Input: 
                <pre><![CDATA[
                    <h2 class="sdc-tooltip-template-title">A long text name,</h2>
                    <p class="sdc-tooltip-template-content">very long, long text</p>
                ]]></pre>
        
                <select style="width:30%" 
                                sdc-tooltip 
                                    tooltip-text = 'This is the tooltip test'
                                    [tooltip-placement]= 'placement'
                                    [tooltip-arrow-placement] = 'arrowPlacement'
                                    [tooltip-template]='template' >
                    <option>Select</option>                            
                    <option>Option 1</option>                            
                    <option>Option 2</option>                            
                    <option>Option 3</option>                            
                </select>                            
                <template #template>
                    <h2 class="sdc-tooltip-template-title">A long text name,</h2>
                    <p class="sdc-tooltip-template-content">very long, long text</p>
                </template>
                `
        },
        {
            id: 'rightAlignmentHtmlCustomStyleTooltip',
            showSource: true,
            title: 'Tooltip with HTML template and custom style (right placement)',
            description: 'right placement',
            context: {
                placement: TooltipPlacement.Right,
                arrowPlacement: ArrowPlacement.LeftTop
            },
            template: `
                Template Input: 
                <pre><![CDATA[
                    <h2 class="sdc-custom-tooltip-template-title">Title... Title... Title... Title... Title...</h2>
                    <p class="sdc-custom-tooltip-template-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                ]]></pre>
        
                <select style="width:30%" 
                                sdc-tooltip 
                                    tooltip-text = 'This is the tooltip test'
                                    [tooltip-placement]= 'placement'
                                    tooltip-css-class = 'sdc-custom-tooltip'
                                    [tooltip-arrow-placement] = 'arrowPlacement'
                                    [tooltip-template]='template' >
                    <option>Select</option>                            
                    <option>Option 1</option>                            
                    <option>Option 2</option>                            
                    <option>Option 3</option>                            
                </select>                            
                <template #template>
                    <h2 class="sdc-custom-tooltip-template-title">Title... Title... Title... Title... Title...</h2>
                    <p class="sdc-custom-tooltip-template-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non, pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra</p>
                </template>
                `
        },
        {
            id: 'topAlignmentTextTooltip',
            showSource: true,
            title: 'Tooltip with text (top placement)',
            description: 'top placement',
            context: {
                placement: TooltipPlacement.Top,
                arrowPlacement: ArrowPlacement.LeftTop
            },
            template: `
                <div style="width:30%; height: 30px; text-align: center; border: solid 1px gray;"
                                sdc-tooltip
                                    tooltip-text = 'A long text name, very long, long text'
                                    [tooltip-placement]= 'placement'
                                    [tooltip-arrow-placement] = 'arrowPlacement'>
                </div>
                `
        },
        {
            id: 'bottomAlignmentHtmlTooltip',
            showSource: true,
            title: 'Tooltip with HTML template (bottom placement)',
            description: 'bottom placement',
            context: {
                placement: TooltipPlacement.Bottom,
                arrowPlacement: ArrowPlacement.LeftTop
            },
            template: `
                Template Input:
                <pre><![CDATA[
                    <h2 class="sdc-tooltip-template-title">A long text name,</h2>
                    <p class="sdc-tooltip-template-content">very long, long text</p>
                ]]></pre>
        
                <div style="width:30%; height: 30px; text-align: center;">
                    <a style="color:blue; font-size: large; cursor: pointer;"
                                    sdc-tooltip
                                        tooltip-text = 'This is the tooltip test'
                                        [tooltip-placement]= 'placement'
                                        [tooltip-arrow-placement] = 'arrowPlacement'
                                        [tooltip-template]='template' >This is link example</a>
                </div>
                <template #template>
                    <h2 class="sdc-tooltip-template-title">A long text name,</h2>
                    <p class="sdc-tooltip-template-content">very long, long text</p>
                </template>
                `
        },
    ]);
