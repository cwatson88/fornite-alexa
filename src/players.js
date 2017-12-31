const AllPlayers = ['Dave', 'Frank', 'Paul', 'Sue', 'Jane']

const orderPlayers = (...players) => players.sort()

const checkPlayers = () => true

const returnNoPlayers = null

const addPlayers = (players, ...morePlayers) => {
    return players.concat(morePlayers)
}



export {
    checkPlayers,
    orderPlayers,
    returnNoPlayers,
    addPlayers
}