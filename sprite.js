function Sprite(x , y, largura, altura) {
    this.x =  x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function(xCanvas,yCanvas){
        ctx.drawImage(img,this.x,this.y, this.largura,this.altura, xCanvas,yCanvas,this.largura,this.altura);
    }

}
var nave1 = new Sprite(22,36,171,209),
nave2 = new Sprite(243,48,390,223);