class millionaire {
    constructor() {
        this.ui = new this.ui();
        this.ui.showScreen('welcome');

        this.ui.onStartBtnClick( () => {
            this.start();
        });
    }


    start() {
        this.ui.showScreen('question');
    }
}




var game = new millionaire();