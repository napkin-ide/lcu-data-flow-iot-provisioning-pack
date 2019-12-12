import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {OverlayContainer} from '@angular/cdk/overlay';

import { Subscription } from 'rxjs';


@Component({
  selector: 'lcu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public BackgroundImage: string;

  public DarkTheme: boolean;

  public SelectedTheme: string;

  public title = 'demo';

  protected themesSubscriptions: Subscription;

  constructor(
    protected router: Router,
    protected activatedRoute: ActivatedRoute,
    protected overlayContainer: OverlayContainer) {

    this.BackgroundImage = './assets/images/bg_image.jpg';
  }

  public ngOnInit(): void {
  }
}
