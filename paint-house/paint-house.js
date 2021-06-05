/**
 * @param {number[][]} costs
 * @return {number}
 
 I: array of arrays with num elms
 O: number, min cost
 C: cost length is equal to n, house cost list length equal to 3, n is at least 1 and max 100, house cost is at least 1 and max 20
 E: 
 
 
 */
var minCost = function(costs) {
    for (let i = 1; i< costs.length; i++) {
        costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2])
        costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2])
        costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1])
    }
    return Math.min(Math.min(costs[costs.length - 1][0], costs[costs.length - 1][1]), costs[costs.length - 1][2])
};