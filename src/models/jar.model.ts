export interface IJar {
    name: string;
    amount: number;
    icon: string;
}

export interface IFinanceInfo {
    balance: number;
    jars: IJar[];
}
