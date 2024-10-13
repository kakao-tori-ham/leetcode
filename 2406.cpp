
class Solution {
public:
    static bool compare(vector<int> a, vector<int> b) {
        if (a[0] == b[0]) {
            return a[1] < b[1];
        } else {
            return a[0] < b[0];
        }
    }

    int minGroups(vector<vector<int>>& intervals) {
        priority_queue<int, vector<int>, greater<int>> pq;
        sort(intervals.begin(), intervals.end(), compare);

        for (vector<int> interval : intervals) {
            if (!pq.empty() && pq.top() < interval[0]) {
                pq.pop();
            }
            pq.push(interval[1]);
        }

        return pq.size();
    }
};