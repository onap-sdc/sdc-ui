export default `
<div class="svg-icon" [ngClass]="[(mode) ? 'mode-'+mode : '', (size) ? 'size-'+size : '', (clickable) ? 'clickable' : '', svgIconCustomClassName || '', className || '']" [attr.disabled]="disabled || undefined" [innerHtml]="svgIconContentSafeHtml"></div>
`;
