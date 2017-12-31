import * as players from '../src/players';
describe('check the sorting of players', () => {

    test('sort players', () => {
        expect(players.orderPlayers('Paul', 'Frank', 'Dave')).toEqual(['Dave', 'Frank', 'Paul']);
    });

    test('is players an array ', () => {
        expect(players.returnNoPlayers).toEqual(null);
    });
});
test('check players', () => {
    expect(players.checkPlayers()).toBeTruthy();
});

test('add more players', () => {
    expect( 
    players.addPlayers(['Paul', 'Ringo'], 'John', 'George').length
    )
    .toGreaterThan(2);
});