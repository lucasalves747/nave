function Sprite(x , y, largura, altura) {
    this.x =  x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas,yCanvas){
        ctx.drawImage(img,this.x,this.y, this.largura,this.altura, xCanvas,yCanvas,this.largura,this.altura);
    }

}
var nave1 = new Sprite(1,7,141,190),
nave2 = new Sprite(172,7,307,250),
fundo = new Sprite(0,441,1341,1156);