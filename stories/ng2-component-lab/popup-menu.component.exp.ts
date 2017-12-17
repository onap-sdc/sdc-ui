import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Menu')
    .group("Popups",[
      {
        id: 'basicPopupMenuStatic',
        showSource: true,
        title: 'Basic popup menu (static)',
        description: 'Basic popup menu (static)',
        template: `
        <popup-menu-list [open]="true" className="static">
            <popup-menu-item>First</popup-menu-item>
            <popup-menu-item type="selected">Selected</popup-menu-item>
            <popup-menu-item type="disabled">Disabled</popup-menu-item>
            <popup-menu-item type="line">Line (not displayed)</popup-menu-item>
            <popup-menu-item>Second</popup-menu-item>
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
                <popup-menu-list className="relative" [(open)]="mopen" (openChange)="menuStatus=$event" (positionChange)="menuPos=$event" #menu>
                    <popup-menu-item (action)="showSelectedItem('First', 'red')">First</popup-menu-item>
                    <popup-menu-item type="disabled">Disabled</popup-menu-item>
                    <popup-menu-item type="line"></popup-menu-item>
                    <popup-menu-item (action)="showSelectedItem('Second', 'green')">Second</popup-menu-item>
                    <popup-menu-item>Third (none)</popup-menu-item>
                </popup-menu-list>
            </div>
        </div>
        `
    }
    ]);
