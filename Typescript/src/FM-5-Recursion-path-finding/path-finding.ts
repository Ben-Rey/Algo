// function walk(maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][]): boolean {
// 	// 1. Base Case
// 	// off the map
// 	if (curr.x < 0 || curr.x >= maze[0].length || curr.y < 0 || curr.y >= maze.length) {
// 		return false;
// 	}

// 	// on a wall
// 	if (maze[curr.y][curr.x] === wall) {
// 		return false;
// 	}

// 	// the end
// 	if (curr.y === end && curr.x === end) {
// 		return true;
// 	}

// 	// Seen
// 	if (seen[curr.y][curr.x]) {
// 		return false;
// 	}
// }
