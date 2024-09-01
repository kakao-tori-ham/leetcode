struct Edge {
    int next;
    double prob;
};

class Solution {
public:
    double maxProbability(int n, vector<vector<int>>& edges,
                          vector<double>& succProb, int start_node,
                          int end_node) {
        unordered_map<int, vector<Edge>> edge_map;
        priority_queue<pair<double, int>> pq;
        double result[10001] = {
            0,
        };

        for (int i = 0; i < edges.size(); i++) {
            Edge edge1, edge2;
            edge1.next = edges[i][1], edge2.next = edges[i][0];
            edge1.prob = succProb[i], edge2.prob = succProb[i];
            edge_map[edge1.next].push_back(edge2);
            edge_map[edge2.next].push_back(edge1);
        }

        pq.push({double(1), start_node});

        while (!pq.empty()) {
            pair<double, int> cur = pq.top();
            pq.pop();

            if (result[cur.second] > cur.first)
                continue;

            for (int i = 0; i < edge_map[cur.second].size(); i++) {
                Edge next_edge = edge_map[cur.second][i];
                double prob1 = cur.first * next_edge.prob;
                double prob2 = result[next_edge.next];

                if (prob1 > prob2) {
                    result[next_edge.next] = prob1;
                    pq.push({prob1, next_edge.next});
                }
            }
        }

        return result[end_node];
    }
};