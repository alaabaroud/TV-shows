
//alert('Hello There');

var genre=prompt('what do you like more comedy or drama?');
while (genre !== 'comedy' && genre !== 'drama'){
genre=prompt('choose one only, comedy or drama?');
}

var rate=prompt('rate friends series on a scale of 1 to 10 ?');
if (rate>10){
 rate=10;
}
for (var i = 1; i <= rate; i++) {
  document.write ('<img src= "https://pyxis.nymag.com/v1/imgs/986/0a9/fb8617a064d7dee0e01b7335d9769a49ac-23-friends-cover-story-lede-mobile.rvertical.w570.jpg">')
}

/*var favoriteCharacter=prompt('do you like walter white or jesse pinkman more?')

if (favoriteCharacter=='walter white'){
document.write('<img src="https://memegenerator.net/img/instances/68218655.jpg"width: 200px>')
}else{
  document.write('<img src="https://wallpaperaccess.com/full/3115767.jpg" width: 200px>')
}

console.log('I made this with javascript');
*/
