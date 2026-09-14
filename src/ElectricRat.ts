export class ElectricRat{
    name: string;
    atk: number;
    hp: number;

    constructor(name: string, atk: number, hp: number){
        
        if(name.trim() === ''){
            throw new Error('A name nem lehet üres')
        }
        if(atk<0){
            throw new Error('Az atk nem lehet negatív')
        }
        if(hp<0){
            throw new Error('A hp nem lehet negatív')
        }
        
        
        this.name = name;
        this.atk = atk;
        this.hp = hp;
    }

    public getName():string{
        return this.name = this.name;
    }

    public getAtk():number{
        return this.atk = this.atk;
    }

    public getHp():number{
        return this.hp = this.hp
    }

    public toCSV():string{
        return`${this.name}; ${this.atk}; ${this.hp}`;
    }

}



