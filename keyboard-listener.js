document.addEventListener('keydown',teclado)
export default function teclado(event){
     const keypressed = event.key

    const jogador = game.jogadores[currentjogadorId]
 

    if (keypressed=== 'ArrowUp' && jogador.y >=1) {
        jogador.y = jogador.y - 10
        return
    }

    if (keypressed=== 'ArrowDown' && jogador.y < screen.height - 170) {
        jogador.y = jogador.y + 10
        return
    }
    
    if (keypressed=== 'ArrowLeft' && jogador.x >=1) {
        jogador.x = jogador.x - 10
        return
    }
    
    if (keypressed=== 'ArrowRight' && jogador.x < screen.width - 150) {
        jogador.x = jogador.x + 10
        return
    }
     
    if (keypressed=== ' ') {
       numero=1
        return
    }
}    