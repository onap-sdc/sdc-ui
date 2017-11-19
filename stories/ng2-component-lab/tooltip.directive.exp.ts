import {experimentOn} from '@islavi/ng2-component-lab';
import {TooltipPlacement} from '../../src/angular/tooltip/tooltip.directive';

export default experimentOn('Tooltip')
    .case('Default', {
        showSource: true,
        context: {
            placement: TooltipPlacement.Right
        },
        template: `
        <input type="text" style="width:30%" 
                        sdc-tooltip 
                            tooltip-text = 'This is the tooltip test'
                            [tooltip-placement]= 'placement'
                            tooltip-css-class = 'custom-tooltip'
                            [tooltip-disabled]='false' />
        `
    }).case('With HTML Template ', {
        showSource: true,
        context: {
            placement: TooltipPlacement.Right
        },
        template: `
Template Input: 
<pre><![CDATA[

 
            <h2 style="background-color:red; font-weight: bold">Title yy ewriy oiryew </h2>
            <p style="background-color:blue; font-weight: bold">Content... Content..  Content..  Content..  Content..</p> 
        
]]></pre>

        <input type="text" style="width:30%" 
                        sdc-tooltip 
                            tooltip-text = 'This is the tooltip test'
                            [tooltip-placement]= 'placement'
                            tooltip-css-class = 'sdc-tooltip'
                            [tooltip-template]='template'
                            [tooltip-disabled]='false' />
        <template #template>
            <h2 style="background-color:red; font-weight: bold">Title yy ewriy oiryew </h2>
            <p style="background-color:blue; font-weight: bold">>Content... Content..  Content..  Content..  Content..</p>
        </template>
        `
    });
