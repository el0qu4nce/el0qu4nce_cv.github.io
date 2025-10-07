import {Component} from '@angular/core';
import {AboutCardComponent} from "../../components/about-card/about-card.component";
import {appName, appVersion, githubURL} from "../../js/global.vars";
import {BadgeModule} from "primeng/badge";
import {BadgeComponent} from "../../components/badge/badge.component";
import {NgForOf, NgIf} from "@angular/common";
import {CustomButtonComponent} from "../../components/custom-button/custom-button.component";
import {DataService} from "../../services/data.service";
import {AboutCard} from "../../model/model";
import {LanguageService} from "../../services/language.service";

@Component({
  selector: 'about',
  standalone: true,
  imports: [
    AboutCardComponent,
    BadgeModule,
    BadgeComponent,
    NgForOf,
    CustomButtonComponent,
    NgIf
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  appVersion: string = appVersion;
  appName: string = appName;
  githubURL: string = githubURL;

  aboutWebsiteCardEn: AboutCard = {
    title: "About this Website",
    heading: appName,
    text: [
      " - Я сделал этот сайтик, чтобы попробовать свои силы в этой сфере, а заодно и сотворить источник, рассказывающий обо мне"
    ]
  }

  constructor(readonly dataService: DataService, readonly langService: LanguageService) {}

}
