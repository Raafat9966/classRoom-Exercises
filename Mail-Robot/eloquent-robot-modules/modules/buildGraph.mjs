// ************* Turn Roads into Graph ***************

export function buildGraph(edges) {
	let graph = Object.create(null);

	function addEdge(from, to) {
		if (graph[from] == null) {
			graph[from] = [to];
		} else {
			graph[from].push(to);
		}
	}

	let connectedPointsArray = edges.map((r) => r.split("-"));

	for (let [from, to] of connectedPointsArray) {
		addEdge(from, to);
		addEdge(to, from);
	}
	return graph;
}
