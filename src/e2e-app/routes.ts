import {Routes} from '@angular/router';
import {BlockScrollStrategyE2E} from './block-scroll-strategy/block-scroll-strategy-e2e';
import {ButtonToggleE2e} from './button-toggle/button-toggle-e2e';
import {CardE2e} from './card/card-e2e';
import {ComponentHarnessE2e} from './component-harness/component-harness-e2e';
import {Home} from './e2e-app/e2e-app-layout';
import {ExpansionE2e} from './expansion/expansion-e2e';
import {GridListE2E} from './grid-list/grid-list-e2e';
import {IconE2E} from './icon/icon-e2e';
import {LegacyMenuE2e} from './legacy-menu/legacy-menu-e2e';
import {LegacyProgressBarE2e} from './legacy-progress-bar/legacy-progress-bar-e2e';
import {LegacyProgressSpinnerE2e} from './legacy-progress-spinner/legacy-progress-spinner-e2e';
import {LegacyRadioE2e} from './legacy-radio/legacy-radio-e2e';
import {LegacySlideToggleE2e} from './legacy-slide-toggle/legacy-slide-toggle-e2e';
import {LegacyTabsE2e} from './legacy-tabs/legacy-tabs-e2e';
import {ListE2e} from './list/list-e2e';
import {ButtonE2e} from './button/button-e2e';
import {CheckboxE2e} from './checkbox/checkbox-e2e';
import {DialogE2E} from './dialog/dialog-e2e';
import {InputE2E} from './input/input-e2e';
import {MdcMenuE2e} from './mdc-menu/mdc-menu-e2e';
import {MdcProgressBarE2E} from './mdc-progress-bar/mdc-progress-bar-e2e';
import {MdcProgressSpinnerE2e} from './mdc-progress-spinner/mdc-progress-spinner-e2e';
import {MdcRadioE2e} from './mdc-radio/mdc-radio-e2e';
import {MdcSlideToggleE2e} from './mdc-slide-toggle/mdc-slide-toggle-e2e';
import {MdcSliderE2e} from './mdc-slider/mdc-slider-e2e';
import {MdcTableE2e} from './mdc-table/mdc-table-e2e';
import {MdcTabsE2e} from './mdc-tabs/mdc-tabs-e2e';
import {SelectE2e} from './select/select-e2e';
import {SidenavE2E} from './sidenav/sidenav-e2e';
import {StepperE2e} from './stepper/stepper-e2e';
import {ToolbarE2e} from './toolbar/toolbar-e2e';
import {VirtualScrollE2E} from './virtual-scroll/virtual-scroll-e2e';

export const E2E_APP_ROUTES: Routes = [
  {path: '', component: Home},
  {path: 'block-scroll-strategy', component: BlockScrollStrategyE2E},
  {path: 'button-toggle', component: ButtonToggleE2e},
  {path: 'cards', component: CardE2e},
  {path: 'component-harness', component: ComponentHarnessE2e},
  {path: 'expansion', component: ExpansionE2e},
  {path: 'grid-list', component: GridListE2E},
  {path: 'icon', component: IconE2E},
  {path: 'checkbox', component: CheckboxE2e},
  {path: 'input', component: InputE2E},
  {path: 'legacy-menu', component: LegacyMenuE2e},
  {path: 'legacy-progress-bar', component: LegacyProgressBarE2e},
  {path: 'legacy-progress-spinner', component: LegacyProgressSpinnerE2e},
  {path: 'legacy-radio', component: LegacyRadioE2e},
  {path: 'legacy-slide-toggle', component: LegacySlideToggleE2e},
  {path: 'legacy-tabs', component: LegacyTabsE2e},
  {path: 'list', component: ListE2e},
  {path: 'button', component: ButtonE2e},
  {path: 'dialog', component: DialogE2E},
  {path: 'mdc-menu', component: MdcMenuE2e},
  {path: 'mdc-progress-bar', component: MdcProgressBarE2E},
  {path: 'mdc-progress-spinner', component: MdcProgressSpinnerE2e},
  {path: 'mdc-radio', component: MdcRadioE2e},
  {path: 'mdc-slide-toggle', component: MdcSlideToggleE2e},
  {path: 'mdc-slider', component: MdcSliderE2e},
  {path: 'mdc-table', component: MdcTableE2e},
  {path: 'mdc-tabs', component: MdcTabsE2e},
  {path: 'select', component: SelectE2e},
  {path: 'sidenav', component: SidenavE2E},
  {path: 'stepper', component: StepperE2e},
  {path: 'toolbar', component: ToolbarE2e},
  {path: 'virtual-scroll', component: VirtualScrollE2E},
];
