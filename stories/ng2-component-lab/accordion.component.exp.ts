import { experimentOn } from '@islavi/ng2-component-lab';
import {AccordionArrowDirection} from "../../src/angular/accordion/accordion.models";

export default experimentOn('Accordion').group('Accordion',
    [
        {
            id: 'simpleAccodion',
            title: 'Simple accordion',
            description: 'Example of accordion with default left arrow',
            showSource: true,
            template: `
        <sdc-accordion 
        title="Accordion header">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat dictum porttitor. 
                Nam facilisis, dui nec maximus facilisis, nisl eros mattis arcu, nec pharetra nisl nisi vitae metus. 
                Vestibulum urna nunc, fringilla nec imperdiet a, varius hendrerit neque. Aliquam pulvinar turpis enim, ac hendrerit dui blandit eu. 
                Curabitur ut mollis arcu, ac iaculis turpis. Pellentesque lobortis leo justo. Morbi commodo cursus dignissim. 
                Nam orci diam, mattis eget leo vel, tincidunt interdum dui. 
                Donec dapibus mauris non sapien ornare, non pharetra mi commodo.
            </p>
        </sdc-accordion>
        `
        },
        {
            id: 'accordionRightArrow',
            title: 'Accordion with right arrow',
            description: 'Example of accordion with right arrow',
            showSource: true,
            context: {
                arrowDirection: AccordionArrowDirection.RIGHT,
            },
            template: `
        <sdc-accordion 
        title="Accordion header" 
        [arrow-direction]="arrowDirection">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat dictum porttitor. 
                Nam facilisis, dui nec maximus facilisis, nisl eros mattis arcu, nec pharetra nisl nisi vitae metus. 
                Vestibulum urna nunc, fringilla nec imperdiet a, varius hendrerit neque. Aliquam pulvinar turpis enim, ac hendrerit dui blandit eu. 
                Curabitur ut mollis arcu, ac iaculis turpis. Pellentesque lobortis leo justo. Morbi commodo cursus dignissim. 
                Nam orci diam, mattis eget leo vel, tincidunt interdum dui. 
                Donec dapibus mauris non sapien ornare, non pharetra mi commodo.
            </p>
        </sdc-accordion>
        `
        },
        {
            id: 'accordionRightArrowStyle',
            title: 'Accordion with right arrow and custom style',
            description: 'Example of accordion with right arrow and custom style',
            showSource: true,
            context: {
                arrowDirection: AccordionArrowDirection.RIGHT,
            },
            template: `
        <sdc-accordion 
        title="Accordion header" 
        css-class="sdc-accordion-custom-class"
        [arrow-direction]="arrowDirection">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat dictum porttitor. 
                Nam facilisis, dui nec maximus facilisis, nisl eros mattis arcu, nec pharetra nisl nisi vitae metus. 
                Vestibulum urna nunc, fringilla nec imperdiet a, varius hendrerit neque. Aliquam pulvinar turpis enim, ac hendrerit dui blandit eu. 
                Curabitur ut mollis arcu, ac iaculis turpis. Pellentesque lobortis leo justo. Morbi commodo cursus dignissim. 
                Nam orci diam, mattis eget leo vel, tincidunt interdum dui. 
                Donec dapibus mauris non sapien ornare, non pharetra mi commodo.
            </p>
        </sdc-accordion>
        `
        }
        ,
        {
            id: 'accordionLeftArrowStyle',
            title: 'Accordion with left arrow and custom style',
            description: 'Example of accordion with left arrow and custom style',
            showSource: true,
            context: {
                arrowDirection: AccordionArrowDirection.LEFT,
            },
            template: `
        <sdc-accordion 
        title="Accordion header" 
        css-class="sdc-accordion-custom-class"
        [arrow-direction]="arrowDirection">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat dictum porttitor. 
                Nam facilisis, dui nec maximus facilisis, nisl eros mattis arcu, nec pharetra nisl nisi vitae metus. 
                Vestibulum urna nunc, fringilla nec imperdiet a, varius hendrerit neque. Aliquam pulvinar turpis enim, ac hendrerit dui blandit eu. 
                Curabitur ut mollis arcu, ac iaculis turpis. Pellentesque lobortis leo justo. Morbi commodo cursus dignissim. 
                Nam orci diam, mattis eget leo vel, tincidunt interdum dui. 
                Donec dapibus mauris non sapien ornare, non pharetra mi commodo.
            </p>
        </sdc-accordion>
        `
        }
    ]);
