import { Injectable } from '@angular/core';
import { IFinanceInfo, IJar } from 'src/models/jar.model';
import { Store } from './store';

@Injectable({
  providedIn: 'root'
})
export class FinanceInfoStoreService extends Store<IFinanceInfo> {

  constructor() {
    super();
  }

  init(): Promise<IJar> {
    this.store({} as IFinanceInfo);
    return new Promise(() => {});
  }

  setJars(jars: IJar[]): Promise<IFinanceInfo> {
    const balance = jars.reduce((acc, cur) => acc + cur.amount , 0);
    this.store({ balance, jars });
    return this.get$().toPromise();
  }
}
