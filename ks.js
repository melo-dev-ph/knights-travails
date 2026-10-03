class Vertex {
    constructor(vertex) {
        let x = vertex[0];
        let y = vertex[1];
        return { x, y }
    }
} 

export class KnightTravails {
    constructor() {
        this.startingArr = [0, 0];
    }

    possibleMoves(vertex) {
        const allMoves = [
            [vertex.x + 1, vertex.y + 2],
            [vertex.x - 1, vertex.y + 2],
            [vertex.x + 2, vertex.y + 1],
            [vertex.x + 2, vertex.y - 1],
            [vertex.x + 1, vertex.y - 2],
            [vertex.x - 1, vertex.y - 2],
            [vertex.x - 2, vertex.y - 1],
            [vertex.x - 2, vertex.y + 1]
        ]

        const cleanedMoves = allMoves.filter((move) => move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7);
        return cleanedMoves;
    }

    knightMoves(start, target) {
        let queue = [[start]];
        let visited = new Set();
        
        visited.add(start.toString());
        while(queue.length > 0) {
            const currentPath = queue.shift()
            const currentSquare = currentPath[currentPath.length - 1];   
            if(currentSquare[0] === target[0] && currentSquare[1] === target[1]) {
                return currentPath;
            }
            const nextJumps = this.possibleMoves(new Vertex(currentSquare));
            nextJumps.forEach((jump) => {
                const jumpString = jump.toString();
                if(!visited.has(jumpString)) {
                    visited.add(jumpString);
                    const copyCurrentPath = [...currentPath, jump];
                    queue.push(copyCurrentPath);
                }
            })
        }   
    }
}