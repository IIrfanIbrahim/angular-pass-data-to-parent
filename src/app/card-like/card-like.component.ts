import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataCard} from './card-data.interface';


@Component({
  selector: 'app-card-like',
  templateUrl: './card-like.component.html',
  styleUrls: ['./card-like.component.css']
})
export class CardLikeComponent {

    @Input() dataCard: DataCard;

    @Output() likeChecked = new EventEmitter<number>();

    triggerLike() {
        this.dataCard.like++;
        this.likeChecked.emit(this.dataCard.like);



  }
}


