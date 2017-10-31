import { Component, OnInit } from '@angular/core';
import { DynamicService } from './dynamic.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties = '';
  constructor(private dynamicService: DynamicService) { }

  ngOnInit() {
    this.properties = 'Not initialized yet';
  }

  loadProperty() {
    this.dynamicService.getProperty().subscribe(data => this.properties = data);
  }
}
