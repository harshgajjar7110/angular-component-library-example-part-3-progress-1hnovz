import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { AlertType } from '../library/components/alert/alert-type.enum';
import { ProgressBarService } from '../library/components/progress-bar/progress-bar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`.dashboard-content { margin: 1rem 0; display: block;`]
})
export class DashboardComponent implements OnInit {
  public isUpdating: boolean;
  public alertVisible: boolean;
  public alertType: AlertType;
  public alertMessage: string;
  public alertDismissible: boolean;
  public alertIconClass: string;

  constructor(private _progressBarService: ProgressBarService) {
    this.isUpdating = false;
    this.alertVisible = false;
    this.alertType = AlertType.SUCCESS
    this.alertMessage = "Update was successful!";
    this.alertIconClass = "fas fa-info-circle";
    this.alertDismissible = false;
  }

  ngOnInit() {
  }

  public loadData(): void {
    this._progressBarService.onProgressComplete()
      .pipe(take(1))
      .subscribe(complete => {
        this.isUpdating = false;
        this.alertVisible = true;
        setTimeout(() => this.alertVisible = false, 2000);
      });
    this.isUpdating = true;
    this._progressBarService.updateProgress(12);
    setTimeout(() => this._progressBarService.updateProgress(45), 2000);
    setTimeout(() => this._progressBarService.updateProgress(73), 4000);
    setTimeout(() => this._progressBarService.updateProgress(100), 5000);
  }
}
