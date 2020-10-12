import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IJar } from 'src/models/jar.model';
import { FinanceInfoStoreService } from 'src/services/finance-info-store.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy, OnInit{

  constructor(
    private financeStr: FinanceInfoStoreService
  ) {}

  sub: Subscription;
  jars = [] as IJar[];
  balance: number;

  ngOnInit(){
    const jars = [
      {
        name: 'Gastos y necesidades',
        amount: 1500,
        icon: 'bulb-outline'
      },
      {
        name: 'Educación',
        amount: 1500,
        icon: 'newspaper-outline'
      },
      {
        name: 'Ahorro',
        amount: 1500,
        icon: 'cash-outline'
      },
      {
        name: 'Ocio',
        amount: 1500,
        icon: 'airplane-outline'
      },
      {
        name: 'Inversion',
        amount: 1500,
        icon: 'cellular-outline'
      },
      {
        name: 'Dar',
        amount: 1500,
        icon: 'bandage-outline'
      }
    ];

    this.sub = this.financeStr.get$().subscribe(
      financeInfo => {
        if (financeInfo){
          this.jars = financeInfo.jars;
          this.balance = financeInfo.balance;
        }
      }
    );

    this.financeStr.setJars(jars);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
