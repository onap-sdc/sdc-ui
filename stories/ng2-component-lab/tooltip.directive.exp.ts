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
                <div style="padding-bottom: 20px; width: 350px;">Lorem ipsum dolor sit amet,  
                    <span  style="color: #009fdb"
                        sdc-tooltip 
                            tooltip-text = 'A short text name, short text'
                            [tooltip-placement]= 'placement'
                            [tooltip-arrow-placement] = 'arrowPlacement'>show tooltip
                    </span> 
                    ,consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non, pulvinar lacinia libero. 
                    Integer pulvinar pellentesque accumsan. 
                    <span  style="color: #009fdb"
                        sdc-tooltip 
                            tooltip-text = 'A short text name, short text'
                            [tooltip-placement]= 'placement'
                            [tooltip-arrow-placement] = 'arrowPlacement'>show tooltip
                    </span> 
                    Sed hendrerit lacus eu tempus pharetra
                </div>
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
                <div style="padding-bottom: 20px;">
                    The is text example,
                    <span  style="color: #009fdb"
                        sdc-tooltip 
                            tooltip-text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non, pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra'
                            [tooltip-placement]= 'placement'
                            [tooltip-arrow-placement] = 'arrowPlacement'>show tooltip
                    </span> 
                    , more text
                </div>                                    
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
                <div style="padding-bottom: 20px;">
                    The is text example,
                    <span  style="color: #009fdb"
                        sdc-tooltip 
                            tooltip-text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non, pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra'
                            [tooltip-placement]= 'placement'
                            tooltip-css-class = 'sdc-custom-tooltip'
                            [tooltip-arrow-placement] = 'arrowPlacement'>show tooltip
                    </span> 
                    , more text
                </div>                                    
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
                    <p class="sdc-tooltip-template-title">A long text name,</p>
                    <p class="sdc-tooltip-template-content">very long, long text</p>
                ]]></pre>
        
                <div style="padding-bottom: 20px;">
                    The is text example,
                    <span  style="color: #009fdb"
                        sdc-tooltip 
                            tooltip-text = 'This is the tooltip test'
                            [tooltip-placement]= 'placement'
                            [tooltip-arrow-placement] = 'arrowPlacement'
                            [tooltip-template]='template'>show tooltip
                    </span>
                    , more text
                </div>                                    

                <template #template>
                    <p class="sdc-tooltip-template-title">A long text name,</p>
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
                    <p class="sdc-custom-tooltip-template-title">Title... Title... Title... Title... Title...</p>
                    <p class="sdc-custom-tooltip-template-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                ]]></pre>

                <div style="padding-bottom: 20px;">
                    The is text example,
                    <span  style="color: #009fdb"
                        sdc-tooltip 
                            tooltip-text = 'This is the tooltip test'
                            [tooltip-placement]= 'placement'
                            tooltip-css-class = 'sdc-custom-tooltip'
                            [tooltip-arrow-placement] = 'arrowPlacement'
                            [tooltip-template]='template'>show tooltip
                    </span>
                    , more text
                </div>                                    
                                            
                <template #template>
                    <p class="sdc-custom-tooltip-template-title sdc-tooltip-template-big-title">Title... Title... Title... Title... Title...</p>
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
                <div style="padding-bottom: 20px;">
                    The is text example,
                    <span  style="color: #009fdb"
                        sdc-tooltip 
                            tooltip-text = 'A long text name, very long, long text'
                            [tooltip-placement]= 'placement'
                            [tooltip-arrow-placement] = 'arrowPlacement'>show tooltip
                    </span>
                    , more text
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
                    <p class="sdc-tooltip-template-title">A long text name,</p>
                    <p class="sdc-tooltip-template-content">very long, long text</p>
                ]]></pre>
        
                <div style="width:30%; height: 30px; text-align: center;">
                    The is text example,
                    <a style="color: #009fdb; font-size: small; cursor: pointer;"
                        sdc-tooltip
                            tooltip-text = 'This is the tooltip test'
                            [tooltip-placement]= 'placement'
                            [tooltip-arrow-placement] = 'arrowPlacement'
                            [tooltip-template]='template' >link example</a>
                    , more text
                </div>
                <template #template>
                    <p class="sdc-tooltip-template-title">A long text name,</p>
                    <p class="sdc-tooltip-template-content">very long, long text</p>
                </template>
                `
        },
    ]);
