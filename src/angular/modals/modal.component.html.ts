export default `
<div class="sdc-modal {{size}}">
    <div class="sdc-modal__wrapper sdc-modal-type-{{type}}" [@toggleModal]="modalVisible" (@toggleModal.done)="modalToggled($event)">

        <div class="sdc-modal__header sdc-{{type}}__header">
            <div class="sdc-modal__icon" *ngIf="type != 'custom'">
                <div *ngIf="type == 'alert'"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 24 24"><defs><path fill="#000" id="alert-a" d="M20.5815,18.7997 C20.3815,18.9997 20.0815,19.0997 19.8815,19.0997 L2.8815,19.0997 C2.6815,19.0997 2.5815,19.0997 2.3815,18.9997 C1.8815,18.6997 1.7815,18.0997 1.9815,17.5997 L10.4815,3.4997 C10.5815,3.4007 10.6815,3.1997 10.7815,3.1997 C11.2815,2.9007 11.8815,3.0997 12.1815,3.4997 L20.6825,17.5997 C20.7815,17.6997 20.7815,17.9007 20.7815,18.0997 C20.8815,18.4007 20.6825,18.5997 20.5815,18.7997 M22.3815,16.5997 L13.9815,2.4007 C13.5815,1.6997 12.8815,1.1997 12.0815,0.9997 C11.2815,0.7997 10.4815,0.9007 9.7815,1.2997 C9.3815,1.4997 8.9815,1.9007 8.7815,2.2997 L0.3815,16.5997 C-0.4185,17.9997 0.0815,19.9007 1.4815,20.6997 C1.8815,20.9997 2.3815,21.0997 2.8815,21.0997 L19.8815,21.0997 C20.6825,21.0997 21.4815,20.7997 21.9815,20.1997 C22.5815,19.5997 22.8815,18.9007 22.8815,18.0997 C22.7815,17.5997 22.6825,16.9997 22.3815,16.5997 M11,7 C10.4,7 10,7.4 10,8 L10,12 C10,12.601 10.4,13 11,13 C11.6,13 12,12.601 12,12 L12,8 C12,7.4 11.6,7 11,7 M10.3,15.3 C10.1,15.499 10,15.699 10,15.999 C10,16.3 10.1,16.499 10.3,16.699 C10.5,16.9 10.7,16.999 11,16.999 C11.3,16.999 11.5,16.9 11.7,16.699 C11.9,16.499 12,16.199 12,15.999 C12,15.8 11.9,15.499 11.7,15.3 C11.3,14.9 10.7,14.9 10.3,15.3"/></defs>
                    <g fill="none" fill-rule="evenodd" transform="translate(1 1)"><use class="sdc-modal__svg-use" xlink:href="#alert-a"/></g></svg></div>
                <div *ngIf="type == 'info'"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 24 24"><defs><path fill="#000" id="info-a" d="M11,20 C6,20 2,16 2,11 C2,6 6,2 11,2 C16,2 20,6 20,11 C20,16 16,20 11,20 M11,0 C4.9,0 0,4.9 0,11 C0,17.101 4.9,22 11,22 C17.1,22 22,17.101 22,11 C22,4.9 17.1,0 11,0 M11,10 C10.4,10 10,10.4 10,11 L10,15 C10,15.601 10.4,16 11,16 C11.6,16 12,15.601 12,15 L12,11 C12,10.4 11.6,10 11,10 M10.2998,6.2998 C10.0998,6.4998 9.9998,6.6998 9.9998,6.9998 C9.9998,7.2998 10.0998,7.4998 10.2998,7.6998 C10.4998,7.9008 10.6998,7.9998 10.9998,7.9998 C11.2998,7.9998 11.4998,7.9008 11.6998,7.6998 C11.9008,7.4998 11.9998,7.2998 11.9998,6.9998 C11.9998,6.6998 11.9008,6.4998 11.6998,6.2998 C11.2998,5.9008 10.6998,5.9008 10.2998,6.2998"/></defs>
                    <g fill="none" fill-rule="evenodd" transform="translate(1 1)"><use class="sdc-modal__svg-use" xlink:href="#info-a"/></g></svg></div>
                <div *ngIf="type == 'error'"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 24 24"><defs><path fill="#000" id="x-a" d="M11,20 C6,20 2,16 2,11 C2,6 6,2 11,2 C16,2 20,6 20,11 C20,16 16,20 11,20 M11,0 C4.9,0 0,4.9 0,11 C0,17.1 4.9,22 11,22 C17.1,22 22,17.1 22,11 C22,4.9 17.1,0 11,0 M14.2591,7.29935 C13.8591,6.90035 13.2591,6.90035 12.8591,7.29935 L10.5591,9.59935 L8.2591,7.29935 C7.8591,6.90035 7.2591,6.90035 6.8591,7.29935 C6.4591,7.69935 6.4591,8.29935 6.8591,8.69935 L9.1581,10.99935 L6.8591,13.29935 C6.4591,13.69935 6.4591,14.29935 6.8591,14.69935 C7.0591,14.90035 7.2591,14.99935 7.5591,14.99935 C7.8591,14.99935 8.0591,14.90035 8.2591,14.69935 L10.5591,12.40035 L12.8591,14.69935 C13.0591,14.90035 13.3591,14.99935 13.5591,14.99935 C13.7591,14.99935 14.0591,14.90035 14.2591,14.69935 C14.6581,14.29935 14.6581,13.69935 14.2591,13.29935 L11.9591,10.99935 L14.2591,8.69935 C14.6581,8.29935 14.6581,7.69935 14.2591,7.29935"/></defs>
                    <g fill="none" fill-rule="evenodd" transform="translate(1 1)"><use class="sdc-modal__svg-use" xlink:href="#x-a"/></g></svg></div>
            </div>
            <div *ngIf="title" class="title" >{{ title }}</div>
            <sdc-modal-close-button #modalCloseButton [testId]="getCalculatedTestId('close')"></sdc-modal-close-button>
        </div>
        <div class="sdc-modal__content" >
                <div *ngIf="message">{{message}}</div>
                <div #dynamicContentContainer></div>
        </div>
        <div class="sdc-modal__footer">
            <sdc-modal-button *ngFor="let button of buttons"
                [text]="button.text"
                [type]="button.type || 'primary'"
                [disabled]="button.disabled"
                [size] = "button.size ? button.size : 'default'"
                [closeModal]="button.closeModal"
                [spinner_position]="button.spinner_position"
                [show_spinner]="button.show_spinner"
                [callback]="button.callback"
                [testId]="getCalculatedTestId('button-' + button.text)"
                >
            </sdc-modal-button>
        </div>
    </div>
</div>
<div class="modal-background" [@toggleBackground]="modalVisible" ></div>
`;
