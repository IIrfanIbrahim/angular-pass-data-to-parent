import { Component } from '@angular/core';
import { DataCard} from './card-like/card-data.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'angular-pass-data';

  

  
  listPerson : DataCard[] = [
    {
      "index": 1,
      "picture": "https://picsum.photos/200?random=1",
      "age": 37,
      "name": "Flora Nieves",
      "company": "STUCCO",
      "phone": "+62 (938) 581-2473",
      "address": "739 Dewey Place, Deputy, Ohio, 2479",
      "like": 0

     
    },
    {
      "index": 2,
      "picture": "https://picsum.photos/200?random=2",
      "age": 33,
      "name": "Faulkne Tanner",
      "company": "MANGLO",
      "phone": "+62 (949) 455-2209",
      "address": "396 Royce Place, Taft, Texas, 1432",
      "like": 0
    },
    {
      "index": 3,
      "picture": "https://picsum.photos/200?random=3",
      "age": 33,
      "name": "Sargent Roth",
      "company": "CUJO",
      "phone": "+62 (821) 559-2605",
      "address": "424 Sedgwick Street, Kyport, Illinois, 7708",
      "like": 0
    },
    {
      "index": 4,
      "picture": "https://picsum.photos/200?random=4",
      "age": 36,
      "name": "Staci Keith",
      "company":"ENERFORCE",
      "phone": "+62 (891) 542-3727",
      "address": "569 Ellery Streetm Crawfordsville, Flor: 7162",
      "like": 0
      
    },
    {
      "index": 5,
      "picture": "https://picsum.photos/200?random=5",
      "age": 36,
      "name": "Cline Zimmerman",
      "company": "BISBA",
      "phone": "+62 (967 536-2793",
      "address": "224 Cove Lane, Canoochee, North Carolina, 782",
      "like": 0
    },
    {
      "index": 6,
      "picture": "https://picsum.photos/200?random=6",
      "age": 26,
      "name": "Pictra Wade",
      "company": "ELITA",
      "phone": "+62 (914) 584-36490",
      "address": "796 Independence Avenue, Hachita, Palau, 6767",
      "like": 0
    },
    {
      "index": 7,
      "picture":"https://picsum.photos/200?random=7",
      "age": 35 ,
      "name": "Sims Rodgers", 
      "company": "IMKAN",
      "phone": "+62 (886)523-2970",
      "address": "664 Imlay Street, Wheatfields, Conncticut, 9667",
      "like": 0
    },
    {
      "index": 8,
      "picture": "https://picsum.photos/200?random=8",
      "age": 37,
      "name": "Wiley Haney",
      "company": "GENMEX",
      "phone": "+62 (914) 543-2310",
      "address": "748 Church Avenue, Stonybrook, Tennessee, 5698",
      "like": 0
    },
    {
      "index": 9,
      "picture": "https://picsum.photos/200?random=9",
      "age": 30,
      "name": "Greta Villarreal",
      "company": "TASMANIA",
      "phone": "+62 (857) 510-3693",
      "address": "777 Mill Avenue, Kula, New Hampshire, 4831",
      "like": 0
    },
    {
      "index": 10,
      "picture": "https://picsum.photos/200?random=10",
      "age": 30,
      "name": "Roxie Mcguire",
      "company": "ISBOL",
      "phone": "+62 (933) 519-3612",
      "address": "673 Howard Alley, Darlington, Georgia, 3509",
      "like": 0    
    },
    {
      "index": 11,
      "picture": "https://picsum.photos/200?random=11",
      "age": 36,
      "name": "Lancaster Buchanan",
      "company": "ISOSPHERE",
      "phone": "+62 (981) 570-2396",
      "address": "870 Oriental Boulevard, Hiwasse, Michigan, 2515",
      "like": 0
    },
    {
      "index": 12,
      "picture": "https://picsum.photos/200?random=12",
      "age": 34,
      "name": "Maria Roy",
      "company": "UXMOX",
      "phone": "+62 (839) 535-2011",
      "address": "226 Quentin Street, Reinerton, California, 5509",
      "like": 0    
    },
    {
      "index": 13,
      "picture": "https://picsum.photos/200?random=13",
      "age": 22,
      "name": "Nellie Riggs",
      "company": "PROSURE",
      "phone": "+62 (955) 409-3870",
      "address": "734 Landis Court, Wakulla, Marshall Islands, 5890",
      "like": 0  
    },
    {
      "index": 14,
      "picture": "https://picsum.photos/200?random=14",
      "age": 40,
      "name": "Ferguson Diaz",
      "company": "INSURETY",
      "phone": "+62 (957) 464-3235",
      "address": "915 Sackman Street, Alamo, Arkansas, 945",
      "like": 0
    
  },
  {
    "index": 15,
      "picture": "https://picsum.photos/200?random=15",
      "age": 21,
      "name": "Hollie Hudson",
      "company": "XANIDE",
      "phone": "+62 (953) 536-2667",
      "address": "872 Forest Place, Tonopah, Nevada, 8544",
      "like": 0

  },
  {
    "index": 16,
    "picture":"https://picsum.photos/200?random=16",
    "age": 26,
    "name": "Higgins Mcdaniel",
    "company": "ZYTREK",
    "phone": "+62 (914) 584-36490",
    "address": "796 Independence Avenue, Hachita, Palau, 6767",
    "like": 1

  }

  ];
  deffLike = 0;

  countLikeHandler(){
    this.deffLike++;
  }
 
}






