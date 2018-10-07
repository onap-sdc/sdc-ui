import { SdcUiComponentsModule } from './index';
import { downgradeComponent, downgradeInjectable } from "@angular/upgrade/static";
import * as Components from './components';
declare const angular: any;

let SdcUiComponentsNg1Module = null;

if (typeof angular !== "undefined") {

    SdcUiComponentsNg1Module = angular.module('SdcUiComponentsNg1', []);

    // // Form Elements
    SdcUiComponentsNg1Module.directive('sdcInput', downgradeComponent({
        component: Components.InputComponent,
        inputs: ['label', 'value', 'pattern', 'disabled', 'placeHolder', 'required', 'minLength', 'maxLength', 'debounceTime'],
        outputs: ['valueChange']
    }));
    SdcUiComponentsNg1Module.directive('sdcDropdown', downgradeComponent({
        component: Components.DropDownComponent,
        inputs: ['label', 'options', 'disabled', 'placeHolder', 'required', 'validate', 'headless', 'maxHeight', 'selectedOption'],
        outputs: ['changeEmitter']
    }));
    SdcUiComponentsNg1Module.directive('sdcCheckbox', downgradeComponent({
        component: Components.CheckboxComponent,
        inputs: ['label', 'checked', 'disabled'],
        outputs: ['checkedChange']
    }));
    SdcUiComponentsNg1Module.directive('sdcRadioGroup', downgradeComponent({
        component: Components.RadioGroupComponent,
        inputs: ['legend', 'options', 'disabled', 'value', 'direction'],
        outputs: ['valueChange']
    }));

    // Buttons
    SdcUiComponentsNg1Module.directive('sdcButton', downgradeComponent({
        component: Components.ButtonComponent,
        inputs: ['text', 'disabled', 'type', 'size', 'preventDoubleClick', 'icon_name', 'icon_positon']
    }));

    // Modals
    SdcUiComponentsNg1Module.service('SdcModalService', downgradeInjectable(Components.ModalService));
    SdcUiComponentsNg1Module.directive('sdcModal', downgradeComponent({
        component: Components.ModalComponent,
        inputs: ['size', 'title', 'message', 'buttons', 'type'],
        outputs: ['closeAnimationComplete']
    }));
    SdcUiComponentsNg1Module.directive('sdcModalButton', downgradeComponent({
        component: Components.ModalButtonComponent,
        inputs: ['callback', 'closeModal']
    }));

    // Notifications
    SdcUiComponentsNg1Module.service('SdcNotificationService', downgradeInjectable(Components.NotificationsService));
    SdcUiComponentsNg1Module.directive('sdcNotificationContainer', downgradeComponent({
        component: Components.NotificationContainerComponent
    }));
    SdcUiComponentsNg1Module.directive('sdcNotification', downgradeComponent({
        component: Components.NotificationComponent,
        inputs: ['notificationSetting'],
        outputs: ['destroyComponent']
    }));

    // Popup Menu
    SdcUiComponentsNg1Module.directive('popupMenuList', downgradeComponent({
        component: Components.PopupMenuListComponent,
        inputs: ['open', 'position', 'className', 'relative'],
        outputs: ['openChange', 'positionChange']
    }));
    SdcUiComponentsNg1Module.directive('popupMenuItem', downgradeComponent({
        component: Components.PopupMenuItemComponent,
        inputs: ['className', 'type'],
        outputs: ['action']
    }));

    // Tiles
    SdcUiComponentsNg1Module.directive('sdcTile', downgradeComponent({
        component: Components.TileComponent
    }));
    SdcUiComponentsNg1Module.directive('sdcTileHeader', downgradeComponent({
        component: Components.TileHeaderComponent
    }));
    SdcUiComponentsNg1Module.directive('sdcTileContent', downgradeComponent({
        component: Components.TileContentComponent
    }));
    SdcUiComponentsNg1Module.directive('sdcTileFooter', downgradeComponent({
        component: Components.TileFooterComponent
    }));

    // Check List
    SdcUiComponentsNg1Module.directive('sdcChecklist', downgradeComponent({
        component: Components.ChecklistComponent,
        inputs: ['checklistModel'],
        outputs: ['checkedChange']
    }));

    // Tag Cloud
    SdcUiComponentsNg1Module.directive('sdcTagCloud', downgradeComponent({
        component: Components.TagCloudComponent,
        inputs: ['list', 'isViewOnly', 'isUniqueList', 'uniqueErrorMessage', 'label', 'placeholder'],
        outputs: ['listChanged']
    }));
    SdcUiComponentsNg1Module.directive('sdcTagItem', downgradeComponent({
        component: Components.TagItemComponent,
        inputs: ['text', 'isViewOnly', 'index'],
        outputs: ['clickOnDelete']
    }));

    // Tabs
    SdcUiComponentsNg1Module.directive('sdcTabs', downgradeComponent({
        component: Components.TabsComponent
    }));
    SdcUiComponentsNg1Module.directive('sdcTab', downgradeComponent({
        component: Components.TabComponent,
        inputs: ['title', 'active']
    }));

    // Svg Icons
    SdcUiComponentsNg1Module.directive('svgIcon', downgradeComponent({
        component: Components.SvgIconComponent,
        inputs: ['name', 'mode', 'size', 'disabled', 'clickable', 'className']
    }));
    SdcUiComponentsNg1Module.directive('svgIconLabel', downgradeComponent({
        component: Components.SvgIconLabelComponent,
        inputs: ['name', 'mode', 'size', 'disabled', 'clickable', 'className', 'label', 'labelPlacement', 'labelClassName']
    }));

    // Accordion
    SdcUiComponentsNg1Module.directive('sdcAccordion', downgradeComponent({
        component: Components.AccordionComponent,
        inputs: ['arrow-direction', 'css-class', 'title', 'open'],
        outputs: ['accordionChanged']
    }));

    // Multiline Ellipsis
    SdcUiComponentsNg1Module.directive('multilineEllipsis', downgradeComponent({
        component: Components.MultilineEllipsisComponent,
        inputs: ['lines', 'line-height', 'className'],
        outputs: ['hasEllipsisChanged']
    }));
}

export {SdcUiComponentsNg1Module};
