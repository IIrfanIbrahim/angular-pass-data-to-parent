import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-like',
  templateUrl: './card-like.component.html',
  styleUrls: ['./card-like.component.css']
})
export class CardLikeComponent implements OnInit {
@Input() data: {
  index: number;
  picture: string;
  age: number;
  name: string;
  company: string;
  phone: string;
  address: string;
  like : number;
};

@Output() likeChecked = new EventEmitter<number>();

  triggerLike(data: {
    index: number;
    picture: string;
    age: number;
    name: string;
    company: string;
    phone: string;
    address: string;
    like : number;
  }) {
    this.data.like ++;
    this.likeChecked.emit(this.data.like);
    // this.likeChecked.emit(data);
  }

  
      
      constructor() { }
      
      ngOnInit(): void {}
}


