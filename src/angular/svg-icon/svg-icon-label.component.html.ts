export default `
<div class="svg-icona-wrapper" [ngClass]="[(mode) ? 'mode-'+mode : '', (size) ? 'size-'+size : '', (labelPlacement) ? 'label-placement-'+labelPlacement : '', (clickable) ? 'clickable' : '', className || '']" [attr.disabled]="disabled || undefined">
    <svg-icon [name]="name" className="svg-icona"></svg-icon>
    <span class="svg-icona-label" [ngClass]="[labelClassName || '']">{{ label }}</span>
</div>
`;
