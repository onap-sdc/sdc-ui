export default `
<div class="sdc-tile">
    <ng-content select="sdc-tile-header"></ng-content>
    <div class="sdc-tile-content">
        <ng-content select="sdc-tile-info"></ng-content>
    </div>
    <ng-content select="sdc-tile-footer"></ng-content>
</div>
`;
