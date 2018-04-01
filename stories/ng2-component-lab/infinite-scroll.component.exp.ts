import { experimentOn } from '@islavi/ng2-component-lab';

const basicContext = {
    scrollContainerId: 'scrollContainer',
    numLines: Array(20).fill(null),
    hitBottomCount: 0,
    pageCount: 0,
    isPageLoading: false,
    insertPageImmediately: function(pageNum) {
        const scrollContainerElem: HTMLElement = document.getElementById(this.scrollContainerId);
        scrollContainerElem.appendChild(document.createElement('hr'));
        Array(10).fill(null).forEach((_, i) => {
            const lineElem = document.createElement('div');
            lineElem.innerHTML = `Page ${pageNum} - line ${i + 1}`;
            scrollContainerElem.appendChild(lineElem);
        });
    },
    loadPageAsync: function(pageNum, timeout) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.insertPageImmediately(pageNum);
                resolve();
            }, timeout);
        });
    },
    onScrollHitBottom: function() {
        this.hitBottomCount++;
    }
};

const basicStyle = `
    .scroll-container {
        margin: 12px;
        border: none;
        padding: 5px;
        width: 200px;
        height: 100px;
        overflow: auto;
        font-size: 20px !important;
        box-shadow: #666 1px 1px 10px;
    }

    .example-source {
        background: #eeeeee;
        padding: 10px;
        border: 1px solid #999999;
    }
    .example-source pre {
        overflow: hidden;
        background: #dddddd;
        margin-top: 5px;
        padding: 5px;
        user-select: text;
    }
`;
const makeBasicStyleDistance = (distance: number) => `
    .scroll-container::after {
        display: block;
        content: '';
        height: ${distance}px;
        background: red;
    }
`;

export default experimentOn('Infinite-Scroll')
    .group("Infinite Scroll",[
      {
        id: 'infiniteScrollUsage',
        showSource: true,
        context: Object.assign({}, basicContext),
        title: 'Infinite scroll usage',
        description: 'Infinite scroll usage',
        styles: [basicStyle],
        template: `
        <div (infiniteScroll)="onScrollHitBottom()" class="scroll-container">
            <div *ngFor="let _i of numLines; let i=index">
                Line {{i + 1}}
            </div>
        </div>
        Hit bottom for <b>{{hitBottomCount}}</b> times!
        <div class="example-source">
            <b>onScrollHitBottom declaration:</b>
            <pre>{{onScrollHitBottom}}</pre>
        </div>
        `
      },
      {
        id: 'infiniteScrollUsageWithDistance',
        showSource: true,
        title: 'Infinite scroll usage with distance',
        context: Object.assign({}, basicContext),
        styles: [basicStyle, makeBasicStyleDistance(50)],
        description: '',
        template: `
        <div (infiniteScroll)="onScrollHitBottom()" [infiniteScrollDistance]="50" class="scroll-container">
            <div *ngFor="let _i of numLines; let i=index">
                Line {{i + 1}}
            </div>
        </div>
        Hit bottom for <b>{{hitBottomCount}}</b> times!
        <div class="example-source">
            <b>onScrollHitBottom declaration:</b>
            <pre>{{onScrollHitBottom}}</pre>
        </div>
        `
    },
    {
        id: 'infiniteScrollUsageWithExpandingContent',
        title: 'Infinite scroll usage with expanding content',
        showSource: true,
        context: Object.assign({}, basicContext, {
            scrollContainerId: 'scrollContainer1',
            onScrollHitBottom: function() {
                this.hitBottomCount++;
                this.insertPageImmediately(this.pageCount + 1);
                this.pageCount++;
            }
        }),
        styles: [basicStyle, makeBasicStyleDistance(20)],
        template: `
        <div (infiniteScroll)="onScrollHitBottom()" [infiniteScrollDistance]="20" class="scroll-container" id="{{scrollContainerId}}">
            <div *ngFor="let _i of numLines; let i=index">
                Line {{i + 1}}
            </div>
        </div>
        Hit bottom for <b>{{hitBottomCount}}</b> times!<br/>
        Loaded {{pageCount}} pages!
        <div class="example-source">
            <b>onScrollHitBottom declaration:</b>
            <pre>{{onScrollHitBottom}}</pre>
        </div>
        `
    },
    {
        id: 'infiniteScrollUsageWithExpandingContentAsynchronous',
        title: 'Infinite scroll usage with expanding content asynchronous',
        showSource: true,
        context: Object.assign({}, basicContext, {
            scrollContainerId: 'scrollContainer2',
            onScrollHitBottom: function() {
                this.hitBottomCount++;
                if (!this.isPageLoading) {
                    this.isPageLoading = true;
                    this.loadPageAsync(this.pageCount + 1, 5000).then(() => {
                        this.pageCount++;
                        this.isPageLoading = false;
                    });
                }
            }
        }),
        styles: [basicStyle, makeBasicStyleDistance(20)],
        template: `
        <div (infiniteScroll)="onScrollHitBottom()" [infiniteScrollDistance]="20" class="scroll-container" id="{{scrollContainerId}}">
            <div *ngFor="let _i of numLines; let i=index">
                Line {{i + 1}}
            </div>
        </div>
        Hit bottom for <b>{{hitBottomCount}}</b> times!<br/>
        Loaded {{pageCount}} pages! <span *ngIf="isPageLoading">LOADING page #{{this.pageCount + 1}} ...</span>
        <div class="example-source">
            <b>onScrollHitBottom declaration:</b>
            <pre>{{onScrollHitBottom}}</pre>
        </div>
        `
    }
    ]);
