class Quarter {
    private _value: number = .25;

    get value() {
        return this._value;
    }

    getImageUrl(): string {
        return "img/Quarter.png";
    }
}