import { experimentOn } from '@islavi/ng2-component-lab';

const experiment = experimentOn('Multiline Ellipsis');

const commonContext = {
    shortText: 'Short text - No ellipsis!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et molestie erat, sit amet rutrum purus. Mauris tristique efficitur felis, rutrum scelerisque enim sodales eu. Cras tristique ipsum a elementum auctor. Donec et elit id sapien tempus posuere. Nulla condimentum semper nisi, ac convallis augue dignissim nec. Nunc vestibulum nisi metus, ac rutrum enim consectetur nec. Vivamus volutpat ac risus aliquet iaculis.\nVestibulum et ex egestas, scelerisque enim et, vehicula nisi. Aenean posuere ornare dolor, in laoreet turpis mattis in. Fusce sodales blandit ornare. Donec porta eros vel tellus consequat, a ultricies augue ullamcorper. Vestibulum dolor diam, auctor ac magna quis, aliquet tincidunt odio. Nulla eu cursus metus. Maecenas laoreet in risus vel suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis facilisis orci rhoncus pharetra pretium. Nam blandit arcu lobortis eros luctus lobortis. Integer gravida iaculis finibus.'
};

const whiteEllipsisDots = `
    /deep/ .white-ellipsis .multiline-ellipsis-dots {
        background: linear-gradient(to right, transparent 0%, white 30%);
    }
`;
const yellowEllipsisDots = `
    /deep/ .yellow-ellipsis .multiline-ellipsis-dots {
        background: linear-gradient(to right, transparent 0%, yellow 30%);
        padding: 0 3px;
    }
    /deep/ .yellow-ellipsis .multiline-ellipsis-content .multiline-ellipsis-dots::before {
        content: '\\21a9';
    }
`;

experiment.group("Single line", [
    {
        id: "multiLine",
        showSource: true,
        description: `Multiline ellipsis shows ellipsis at end of desired lines.`,
        title: "Multi Line",
        context: commonContext,
        styles: [whiteEllipsisDots],
        template: `
                <multiline-ellipsis [lines]="3" className="white-ellipsis">{{ text }}</multiline-ellipsis>
            `
    },
    {
        id: "multiLineChange",
        showSource: true,
        description: `Multiline ellipsis shows ellipsis when content gets bigger.`,
        title: "Multi Line Change",
        context: Object.assign({
            showShortText: true
        }, commonContext),
        styles: [whiteEllipsisDots],
        template: `
                <multiline-ellipsis [lines]="3" className="white-ellipsis" (hasEllipsisChanged)="hasEllipsis = $event">{{ showShortText ? shortText : text }}</multiline-ellipsis>
                <br/>
                <sdc-button (click)="showShortText=!showShortText" text="Toggle Text Length"></sdc-button>
                <br/>
                <span class="y">has ellipsis? <b>{{ hasEllipsis ? 'yes' : 'no' }}</b></span>
            `
    },
    {
        id: "singleLine",
        showSource: true,
        description: `Multiline ellipsis can support a single line.`,
        title: "Single Line",
        context: commonContext,
        template: `
                <multiline-ellipsis [lines]="1" className="white-ellipsis">{{ text }}</multiline-ellipsis>
            `
    },
    {
        id: "customDots",
        showSource: true,
        description: `Custom ellipsis dots.`,
        title: "Custom Dots",
        context: commonContext,
        styles: [yellowEllipsisDots],
        template: `
                <multiline-ellipsis [lines]="3" class="yellow-ellipsis">{{ text }}</multiline-ellipsis>
            `
    },
]);

export default experiment;
