const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        ['Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
        'Goretzka',
        'Coman',
        'Muller',
        'gnarby',
        'Lwandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],

     
    ],
    score:'4.0',
    scored: ['Lewandowski','Gnarby','Lewandowski','Hummels'],
    date:'Nov 9th, 2037',
    odds:{
        team1 :1.33,
        draw: 3.25,
        team2: 6.5,
    },
};
// WeekIII: Assignment II
 //task1. Create one player array for each team (variables 'players1' and 'players2')
const[player1, player2] = game.players;
console.log(player1);
console.log(player2);

//task2. The first player in any player array is the goalkeeper and the others are field players. 
//For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name,
//and one array ('fieldPlayers') with all the remaining 10 field players

const [gk, ...fieldplayers] = player1
console.log(gk);
console.log(fieldplayers)

//task3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allplayers = player1.concat(player2)
console.log(allplayers)

//Task4. During the game, Bayern Munich (team 1) used 3 substitute players.
//So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const substitute = ['Thiago', 'Coutinho', 'Perisic']

const players1Final = player1.concat(substitute)
console.log(players1Final)

//task5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const oddvalue = Object.keys(game.odds)
console.log(oddvalue)

//6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) 
//and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
console.log(game.scored + ' ' + game.score)

//task7. The team with the lower odd is more likely to win.
//Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
let entries = Object.values(game.odds);
let likelytoWin = (Math.min(...entries));

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

const winner = getKeyByValue(game.odds,likelytoWin);

console.log(`Possible Winner is: ${winner}`)






 
