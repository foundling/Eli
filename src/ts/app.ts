const FRAMERATE = 30; 

let lastPressedTimestamp = 0;

function update(): void {
    //console.log('update')
}
function paint(): void {
    //console.log('paint')
}

function step(timestamp: number): void {

    const delta = timestamp - lastPressedTimestamp;

    if (delta > FRAMERATE) {

        lastPressedTimestamp = timestamp;
        update();
        paint();

    }

    requestAnimationFrame(step);

}

function onKeydown(e: KeyboardEvent) {
    console.log('key press - ', e.key );
}

function bindEvents():void {

    document.addEventListener('keydown', onKeydown);

}

function gameLoop(): void {

    requestAnimationFrame(step);

}

function initGame() {
    bindEvents();
    gameLoop();
}

initGame();
