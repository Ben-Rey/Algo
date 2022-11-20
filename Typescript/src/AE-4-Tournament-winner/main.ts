// const ARRAY_1 = [3, 5, -4, 8, 11, 1, -1, 6]

class TournamentWinner {
	handle(competitions: string[][], results: number[]) {
		let score: any = {};
		let winner = '';
		for (let i = 0; i < results.length; i++) {
			const match_inner = competitions[i][Math.abs(results[i] - 1)];

			if (score[match_inner] == null) score[match_inner] = 0;
			else {
				score[match_inner] += 3;
			}

			if (score[match_inner] > score[winner] || !winner) {
				winner = match_inner;
			}
		}

		return winner;
	}
}

export default TournamentWinner;
