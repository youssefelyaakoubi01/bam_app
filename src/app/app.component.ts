import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    initFlowbite();
  }
  title = 'Angular_material_ui';
  progressValue = 0;
  totalLoadTime = 2000; // Total time (in milliseconds) to simulate the page load
  updateInterval = 50; // Milliseconds between each update (adjust as needed)

  ngAfterViewInit() {
    this.startProgress();
  }

  startProgress() {
    let currentTime = 0;

    const updateIntervalId = setInterval(() => {
      currentTime += this.updateInterval;
      this.progressValue = (currentTime / this.totalLoadTime) * 100;

      if (currentTime >= this.totalLoadTime) {
        this.progressValue = 100;
        clearInterval(updateIntervalId);

        // Delay the removal of the progress bar to give it a chance to render 100%
        setTimeout(() => {
          this.finishProgress();
        }, 500); // Adjust the delay time as needed
      }
    }, this.updateInterval);
  }

  finishProgress() {
    // Remove the progress bar by setting its value to 0
    this.progressValue = 0;
  }
}
