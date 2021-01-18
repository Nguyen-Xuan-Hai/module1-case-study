class Ui {
    constructor() {

    }

    showScreen(screenName){
        let currentScreen = document.getElementById(screenName);
        currentScreen.style.display = 'block';
    }

    onStartBtnClick(callback){
        let starBtn = document.getElementById('startBtn');
        starBtn.addEventListener('click', callback);
    }
}