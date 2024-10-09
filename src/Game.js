import { Chess } from "chess.js";
import { BehaviorSubject } from "rxjs";


const chess = new Chess();

const subjectGame = new BehaviorSubject();


export default subjectGame;

export const initGame = () => {
    updateGame()
}


export const move = (from, to) => {
    console.log(from, to)
    const moveOparation = chess.move({ from, to })
    if (moveOparation) {
        updateGame()
    }
}
const updateGame = () => {
    const isGameOver = chess.isGameOver()
    subjectGame.next({
        chess: chess.board(),
        isGameOver,
        result: isGameOver ? getGameResult() : null
    })
}
const getGameResult = () => {
    if (chess.isCheckmate()) {
        const winner = chess.turn() === 'w' ? 'Black' : 'White';
        return `ŞAH MAT!  KAZANAN : ${winner} wins!`;
    } else if (chess.isDraw()) {
        let reason = '50 hamle kuralı';
        if (chess.isStalemate()) {
            reason = 'döngü PAT !!!!!';
        } else if (chess.isThreefoldRepetition()) {
            reason = 'Üçlü tekrar PAT !!!!!';
        } else if (chess.isInsufficientMaterial()) {
            reason = 'Yetersiz Taş  !!!!!';
        }
        return reason;
    } else {
        return 'Bilinmeyen durum'
    }
}