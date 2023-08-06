import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { DonationComponent } from './donation.component';
import { SvgIconComponent } from '../../../theme/components/svg-icon/svg-icon.component';
import { SvgIconsRegistry } from '../../../core/services';
import { svgIconCardGiftcard } from '../../../../assets/icons/svg-icons.constants';


const SVG_ICONS = [
  svgIconCardGiftcard
]
const donationRoutes: Route[] = [
  {
    path:'',
    component: DonationComponent
  }
]

@NgModule({
  declarations: [DonationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(donationRoutes),
    SvgIconComponent
  ]
})
export class DonationModule {
  constructor(private svgIconRegistry: SvgIconsRegistry) {
    svgIconRegistry.registerIcons(SVG_ICONS);
  }
 }
