export default `
<div class="svg-icon-wrapper" [ngClass]="[(mode) ? 'mode-'+mode : '', (size) ? 'size-'+size : '', (labelPlacement) ? 'label-placement-'+labelPlacement : '', (clickable) ? 'clickable' : '', className || '']" [attr.disabled]="disabled || undefined">
    <svg-icon [name]="name" className="svg-icon"></svg-icon>
    <span class="svg-icon-label" [ngClass]="[labelClassName || '']">{{ label }}</span>
</div>
`;
