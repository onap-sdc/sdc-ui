export default `
<div class="multiline-ellipsis-container" [ngClass]="className" [ngStyle]="stylesContainer" #multilineEllipsisContainer>
	<div class="multiline-ellipsis-content" [ngStyle]="stylesContent" #multilineEllipsisContent>
		<ng-content></ng-content>
		<div class="multiline-ellipsis-dots" [ngStyle]="stylesDots"></div>
	</div>
</div>
`;
