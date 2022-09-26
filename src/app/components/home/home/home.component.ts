import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  perfumes: string[] = [];
  myControl = new FormControl('');
  filteredOptions: Observable<string[]> | undefined;
  constructor() {}

  ngOnInit(): void {
    this.perfumes = [
      'DIOR',
      'HUGO BOSS',
      'Lancôme',
      'Marc Jacobs',
      'Mugler',
      'Paco Rabanne',
      'Tiffany & Co',
      'TOM FORD',
      'Yves Saint Laurent',
      'Agent Provocateur',
      'Alex Simone',
      'All Saints',
      'Anna Sui',
      'Aramis',
      ' Archipelago Botanicals',
      'Argan',
      'Ariana Grande',
      'Armani',
      'Aroma Works',
      'Australian Bodycare',
      'Avant Skincare',
      'Axis',
      'Azzaro',
      'Banana Republic',
      'Barber Pro',
      'Beaudiani',
      'Beauty Pro',
      'Berdoues',
      'Billie Eilish',
      'Britney Spears',
      'Brut',
      'Bubble Up',
      'Burberry',
      'Bvlgari',
      'Byredo',
      'Cacharel',
      'Calvin Klein',
      'Candlelight',
      'Carolina Herrera',
      'Cartier',
      'Cerruti',
      'CHANEL',
      'Chloé',
      'Chopard',
      'Clinique',
      'Coach',
      "Coty L'Aimant",
      'Creightons',
    ];
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.perfumes.filter((perrfume) =>
      perrfume.toLowerCase().includes(filterValue)
    );
  }
}
