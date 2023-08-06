import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GptComponent } from './gpt.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from '../../../theme/components/svg-icon/svg-icon.component';
import { SvgIconsRegistry } from '../../../core/services';
import { svgIconChatGpt } from '../../../../assets/icons/svg-icons.constants';
const SVG_ICONS = [
  svgIconChatGpt
];
const gptRoutes: Route[] = [
  {
    path: '',
    component: GptComponent
  }
]


@NgModule({
  declarations: [GptComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(gptRoutes),
    FormsModule,
    SvgIconComponent
  ]
})
export class GptModule {
  constructor(private svgIconRegistry: SvgIconsRegistry) {
    svgIconRegistry.registerIcons(SVG_ICONS);
  }
}
