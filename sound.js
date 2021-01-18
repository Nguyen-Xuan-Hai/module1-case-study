class Sound {
    constructor(fileName) {
        this.filename = fileName;
        this.audio = new Audio('Audio/' + this.filename);
    }
    start() {
        this.audio.play();
    }

    stop() {

    }
}