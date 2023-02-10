const heros = [
    {name: 'Spider-Man'},
    {name: 'Thor'},
    {name: 'Black Panther'},
    {name: 'Captain Marvel'},
    {name: 'Silver Surfer'},
];
const superheroes = heros.map(function(heroe, index){
    console.log(index);
    return { id : index, superheroe : heroe.name}
});
const superheroes2 = heros.map((heroe, index)=> ({ id : index, superheroe : heroe.name}))
console.log(superheroes)