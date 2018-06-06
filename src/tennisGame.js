'use strict'

class Player {
	
	constructor(name) {
		this._name = name
	}

	get name() { return this._name}
	set name(n) { this._name = n}
}

class TennisPlayer extends Player {
	constructor(name) {
		super(name)
		this._score = 0
	}

	get score() { return this._score}
	set score(s) { this._score = s}

}

class TennisGame {

	constructor(p1, p2) {
		if (! (p1 instanceof TennisPlayer)) {
			throw 'Player 1 is not a TennisPlayer'
		}


		if (! (p2 instanceof TennisPlayer)) {
			throw 'Player 2 is not a TennisPlayer'
		}

		this.playerOne = p1
		this.playerTwo = p2
	}

	getScore() {
		if (this.hasWinner()) {
			 return this.playerWithHighestScore().name + ' wins'
		} else if (this.hasAdvantage()) {
			return 'Advantage ' + this.playerWithHighestScore().name
		} else if (this.isDeuce()) {
			return 'Deuce'
		} else if (this.equality()) {
			return this.translateScore(this.playerOne.score) + ' all'
		} else {
			return this.translateScore(this.playerOne.score) + ' - ' + this.translateScore(this.playerTwo.score)
		}
	}

	resetScores() {
		this.playerOne.score = 0;
		this.playerTwo.score = 0;
	}

	playerOneScores() {
		this.playerOne.score++
	}

	playerTwoScores() {
		this.playerTwo.score++
	}

	playerWithHighestScore() {
		if (this.playerOne.score > this.playerTwo.score) {
			return this.playerOne
		} else {
			return this.playerTwo
		}
	}

	isDeuce() {
		return this.playerOne.score >= 3 && this.playerTwo.score === this.playerOne.score;
	}

	equality() {
		return this.playerOne.score === this.playerTwo.score
	}

	hasWinner() {
		if(this.playerTwo.score >= 4 && this.playerTwo.score >= this.playerOne.score + 2 )
			return true
		if(this.playerOne.score >= 4 && this.playerOne.score >= this.playerTwo.score + 2)
			return true
		return false
	}

	hasAdvantage() {
		if (this.playerTwo.score >= 4 && this.playerTwo.score === this.playerOne.score + 1)
			return true
		if (this.playerOne.score >= 4 && this.playerOne.score === this.playerTwo.score + 1)
			return true
		
		return false

	}

	translateScore(score) {
		switch (score) {
			case 3:
				return "Forty"
			case 2:
				return "Thirty"
			case 1: 
				return "Fifteen"
			case 0:
				return "Love"
		}
		throw 'Illegal score: ' + score
	}

}