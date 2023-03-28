
export class Product {
 
   
    
    
        constructor(private _sku: string,
            private _name: string,
            private _description: string,
            private _unitPrice: number,
            private _active: boolean,
            private _unitsInStocks: number,
            private _dateCreated: Date,
            private _lastUpdated: Date,
            private _imageUrl: string
    ){

    }
 

    public get sku(): string {
        return this._sku;
    }
    public set sku(value: string) {
        this._sku = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get lastUpdated(): Date {
        return this._lastUpdated;
    }
    public set lastUpdated(value: Date) {
        this._lastUpdated = value;
    }
    public get dateCreated(): Date {
        return this._dateCreated;
    }
    public set dateCreated(value: Date) {
        this._dateCreated = value;
    }
    public get unitsInStocks(): number {
        return this._unitsInStocks;
    }
    public set unitsInStocks(value: number) {
        this._unitsInStocks = value;
    }
    public get active(): boolean {
        return this._active;
    }
    public set active(value: boolean) {
        this._active = value;
    }
    
    public get unitPrice(): number {
        return this._unitPrice;
    }
    public set unitPrice(value: number) {
        this._unitPrice = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get imageUrl(): string {
        return this._imageUrl;
    }
    public set imageUrl(value: string) {
        this._imageUrl = value;
    }
 
}
