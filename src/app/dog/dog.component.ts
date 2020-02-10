import { Component, OnInit } from '@angular/core';
import { DogService } from '../services/dog-service/dog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor(private dogService: DogService, private router: Router) { }

  dog: any;
  dogShow: boolean = false;

  ngOnInit() {
    this.dogService.getDogs().subscribe(res => {
      this.dog = res;
    })
  }

  navigateBack() {
    this.router.navigateByUrl('');
  }

  showDog() {
    this.dogService.getDogs().subscribe(res => {
      this.dog = res;
      this.dogShow = true;
    })
  }

}
