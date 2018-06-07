export default `
<div>
    <input type="file" (change)="onFileSelect($event)" accept="{{getExtensionsWithDot()}}"/>
</div>
`;
