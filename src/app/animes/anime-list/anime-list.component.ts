import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  animes: Array<Anime>= [];

  constructor(private animeservice: AnimeService) { }

  ngOnInit() {
    this.getAnimes();
  }

  getAnimes(): void {
    this.animeservice.getAnimes().subscribe((animes)=>{
      this.animes = animes;
    });
  }

}
