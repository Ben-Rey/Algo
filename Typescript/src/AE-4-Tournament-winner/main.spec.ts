import TournamentWinner from './main';

describe('tournamentWinner', () => {
	it.each`
		competitions                                                                                                                                                                        | results                           | winner
		${[['HTML', 'C#'], ['C#', 'Python'], ['Python', 'HTML']]}                                                                                                                           | ${[0, 0, 1]}                      | ${'Python'}
		${[['HTML', 'Java'], ['Java', 'Python'], ['Python', 'HTML'], ['C#', 'Python'], ['Java', 'C#'], ['C#', 'HTML'], ['SQL', 'C#'], ['HTML', 'SQL'], ['SQL', 'Python'], ['SQL', 'Java']]} | ${[0, 1, 1, 1, 0, 1, 0, 1, 1, 0]} | ${'C#'}
	`(`shoul square`, ({ competitions, results, winner }) => {
		expect(new TournamentWinner().handle(competitions, results)).toEqual(winner);
	});
});
