class Quarter {
    private value: number = .25;

    get Value() {
        return this.value;
    }

    getImageUrl(): string {
        return "img/Quarter.png";
    };

}


var coin = new Quarter();

coin.Value;