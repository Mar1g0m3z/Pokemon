var inputs = document.getElementsByTagName('input');

for (var i = 0, len = inputs.length; i < len; i++) {
    input = inputs[i];
    input.onmouseover = function(){
        this.setAttribute('pokedexC.png',this.getAttribute('src'));
        this.src = this.getAttribute('pokedexO.png');
    };
    input.onmouseout = function(){
        this.src = this.getAttribute('pokedexC.png');
    };
}​
