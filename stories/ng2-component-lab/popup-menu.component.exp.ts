import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Menu')
    .group("Popups",[
      {
        id: 'basicPopupMenuStatic',
        showSource: true,
        title: 'Basic popup menu (static)',
        description: 'Basic popup menu (static)',
        template: `
        <popup-menu-list [open]="true">
            <popup-menu-item>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 24 24">
                  <defs>
                    <path id="add-copy-a1" d="M11,0 C4.9,0 0,4.9 0,11 C0,17.1 4.9,22 11,22 C17.1,22 22,17.1 22,11 C22,4.9 17.1,0 11,0 M15,10 L12,10 L12,7 C12,6.4 11.6,6 11,6 C10.4,6 10,6.4 10,7 L10,10 L7,10 C6.4,10 6,10.4 6,11 C6,11.6 6.4,12 7,12 L10,12 L10,15 C10,15.6 10.4,16 11,16 C11.6,16 12,15.6 12,15 L12,12 L15,12 C15.6,12 16,11.6 16,11 C16,10.4 15.6,10 15,10"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                    <use xlink:href="#add-copy-a1"/>
                  </g>
                </svg>
                First
            </popup-menu-item>
            <popup-menu-item type="selected">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 24 24">
                  <defs>
                    <path id="add-copy-a2" d="M11,0 C4.9,0 0,4.9 0,11 C0,17.1 4.9,22 11,22 C17.1,22 22,17.1 22,11 C22,4.9 17.1,0 11,0 M15,10 L12,10 L12,7 C12,6.4 11.6,6 11,6 C10.4,6 10,6.4 10,7 L10,10 L7,10 C6.4,10 6,10.4 6,11 C6,11.6 6.4,12 7,12 L10,12 L10,15 C10,15.6 10.4,16 11,16 C11.6,16 12,15.6 12,15 L12,12 L15,12 C15.6,12 16,11.6 16,11 C16,10.4 15.6,10 15,10"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                    <use xlink:href="#add-copy-a2"/>
                  </g>
                </svg>
                Selected
            </popup-menu-item>
            <popup-menu-item type="disabled">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 24 24">
                  <defs>
                    <path id="add-copy-a3" d="M11,0 C4.9,0 0,4.9 0,11 C0,17.1 4.9,22 11,22 C17.1,22 22,17.1 22,11 C22,4.9 17.1,0 11,0 M15,10 L12,10 L12,7 C12,6.4 11.6,6 11,6 C10.4,6 10,6.4 10,7 L10,10 L7,10 C6.4,10 6,10.4 6,11 C6,11.6 6.4,12 7,12 L10,12 L10,15 C10,15.6 10.4,16 11,16 C11.6,16 12,15.6 12,15 L12,12 L15,12 C15.6,12 16,11.6 16,11 C16,10.4 15.6,10 15,10"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                    <use xlink:href="#add-copy-a3"/>
                  </g>
                </svg>
                Disabled
            </popup-menu-item>
            <popup-menu-item type="separator"></popup-menu-item>
            <popup-menu-item>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 24 24">
                  <defs>
                    <path id="add-copy-a4" d="M11,0 C4.9,0 0,4.9 0,11 C0,17.1 4.9,22 11,22 C17.1,22 22,17.1 22,11 C22,4.9 17.1,0 11,0 M15,10 L12,10 L12,7 C12,6.4 11.6,6 11,6 C10.4,6 10,6.4 10,7 L10,10 L7,10 C6.4,10 6,10.4 6,11 C6,11.6 6.4,12 7,12 L10,12 L10,15 C10,15.6 10.4,16 11,16 C11.6,16 12,15.6 12,15 L12,12 L15,12 C15.6,12 16,11.6 16,11 C16,10.4 15.6,10 15,10"/>
                  </defs>
                  <g fill="none" fill-rule="evenodd" transform="translate(1 1)">
                    <use xlink:href="#add-copy-a4"/>
                  </g>
                </svg>
                Second
            </popup-menu-item>
        </popup-menu-list>
        `
    },
    {
        id: 'basicMenuRelative',
        title: 'Basic menu (relative)',
        description: 'Basic menu (relative)',
        showSource: true,
        context: {
            showSelectedItem: (msg, color) => {
                const elm = document.getElementById('selectedItem');
                elm.style.color = color;
                elm.innerHTML = msg;
            }
        },
        styles: [`
            .message {
                position: absolute;
                top: 0; left: 0;
                color: white;
            }
            .click-area {
                position: absolute;
                width: 100%;
                height: 100%;
            }
        `],
        template:
        `
        <div style="position: relative; width: 400px; height: 200px; background: blue;">
            <span class="message">Click in the box...<br/>
                (popup menu is {{menuStatus === undefined ? 'never opened' : (menuStatus ? 'open at '+menuPos.x+' , '+menuPos.y : 'closed')}})<br/>
                selected: <span #selectedItem id="selectedItem"></span>
            </span>
            <div class="click-area"
                (click)="menu.position = {x:$event.offsetX, y:$event.offsetY}; mopen=true;">
                <popup-menu-list [(open)]="mopen" (openChange)="menuStatus=$event" (positionChange)="menuPos=$event" [relative]="true" #menu>
                    <popup-menu-item (action)="showSelectedItem('First', 'red')">First</popup-menu-item>
                    <popup-menu-item type="disabled">Disabled</popup-menu-item>
                    <popup-menu-item type="separator"></popup-menu-item>
                    <popup-menu-item (action)="showSelectedItem('Second', 'green')">Second</popup-menu-item>
                    <popup-menu-item>Third (none)</popup-menu-item>
                </popup-menu-list>
            </div>
        </div>
        `
    }
    ]);
