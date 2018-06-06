describe('Testing the functionality, this is the TennisGame', () => {

it('should throw an exception if oat least one player is not a TennisPlayer', () => {
    try {
    	new TennisGame(new Player('tata'));
    } catch(exception) {
    	expect(exception).toEqual('Player 1 is not a TennisPlayer');
    }

    try {
    	new TennisGame(new TennisPlayer('toto'), new Player('titi'));
    } catch(exception) {
    	expect(exception).toEqual('Player 2 is not a TennisPlayer');
    }
 });

describe('Testing the game features', () => {
	let game;
	beforeAll(() => {
	     game = new TennisGame(new TennisPlayer('Boris Becker') , new TennisPlayer('Bjørn Borg'));
	});


	it('new game should return "Love all"', () => {
		let score = game.getScore();
		expect(score).toEqual('Love all');
	});

	it('player one win first ball', () => {
		game.playerOneScores();
		let score = game.getScore();
		expect(score).toEqual('Fifteen - Love');
	});

	it('fifteen all', () => {
		game.playerTwoScores();
		let score = game.getScore();
		expect(score).toEqual('Fifteen all');
	});
	
	it('player two wins first two balls', () => {
		resetScores();
		createScore(0, 2);
		let score = game.getScore();
		expect(score).toEqual('Love - Thirty');
	});

	it('player one wins first three balls', () => {
		resetScores();
		createScore(3, 0);
		let score = game.getScore();
		expect(score).toEqual('Forty - Love');
	});	

	it('players are deuce', () => {
		resetScores();
		createScore(3, 3);
		let score = game.getScore();
		expect(score).toEqual('Deuce');
	});	

	it('player one wins game', () => {
		resetScores();
		createScore(4, 0);
		let score = game.getScore();
		expect(score).toEqual('Boris Becker wins');
	});	

	it('player two wins game', () => {
		resetScores();
		createScore(1, 4);
		let score = game.getScore();
		expect(score).toEqual('Bjørn Borg wins');
	});	

	
	it('players are deuce 4', () => {
		resetScores();
		createScore(4, 4);
		let score = game.getScore();
		expect(score).toEqual('Deuce');
	});	

	it('player two advantage', () => {
		resetScores();
		createScore(4, 5);
		let score = game.getScore();
		expect(score).toEqual('Advantage Bjørn Borg');
	});	

	it('player one advantage', () => {
		resetScores();
		createScore(5, 4);
		let score = game.getScore();
		expect(score).toEqual('Advantage Boris Becker');
	});	

	it('player two wins', () => {
		resetScores();
		createScore(2, 4);
		let score = game.getScore();
		expect(score).toEqual('Bjørn Borg wins');
	});	

	it('player two wins after advantage', () => {
		resetScores();
		createScore(6, 8);
		let score = game.getScore();
		expect(score).toEqual('Bjørn Borg wins');
	});

	it('player one wins after advantage', () => {
		resetScores();
		createScore(8, 6);
		let score = game.getScore();
		expect(score).toEqual('Boris Becker wins');
	});


	function createScore(playerOneBalls, playerTwoBalls ) {
		for (let i = 0; i < playerOneBalls; i++) {
			game.playerOneScores();
		}
		for (let i = 0; i < playerTwoBalls; i++) {
			game.playerTwoScores();
		}
	}

	function resetScores() {
		game.resetScores();
	}


});
  
});