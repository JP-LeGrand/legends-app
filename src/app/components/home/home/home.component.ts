import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { Observable, OperatorFunction } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  public product?: Product;
  formatter = (product: Product) => product.name;
  myControl = new FormControl('');
  filteredOptions: Observable<string[]> | undefined;
  constructor() {}

  ngOnInit(): void {
    this.products = [
      { name: 'Dior' },
      { name: 'HUGO BOSS' },
      { name: 'Lancôme' },
      { name: 'Marc Jacobs' },
      { name: 'Mugler' },
      { name: 'Paco Rabanne' },
      { name: 'Tiffany & Co' },
      { name: 'TOM FORD' },
      { name: 'Yves Saint Laurent' },
      { name: 'Agent Provocateur' },
      { name: 'Alex Simone' },
      { name: 'All Saints' },
      { name: 'Anna Sui' },
      { name: 'Aramis' },
      { name: ' Archipelago Botanicals' },
      { name: 'Argan' },
      { name: 'Ariana Grande' },
      { name: 'Armani' },
      { name: 'Aroma Works' },
      { name: 'Australian Bodycare' },
      { name: 'Axis' },
      { name: 'Azzaro' },
      { name: 'Banana Republic' },
      { name: 'Barber Pro' },
      { name: 'Beaudiani' },
      { name: 'Beauty Pro' },
      { name: 'Burberry' },
      { name: 'Bvlgari' },
      { name: 'Calvin Klein' },
      { name: 'Carolina Herrera' },
      { name: 'CHANEL' },
    ];
  }
  search: OperatorFunction<string, readonly Product[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        this.products
          .filter((product) => new RegExp(term, 'mi').test(product.name))
          .slice(0, 10)
      )
    );
}
