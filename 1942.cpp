#include <iostream>
struct Action {
    int time;
    bool isArrival;
    int friendId;
};
class Solution {
public:
    int smallestChair(vector<vector<int>>& times, int targetFriend) {
        int answer = -1;
        priority_queue<int, vector<int>, greater<int>> pq;
        vector<Action> actions = initActions(times);
        const int CHAIR_SIZE = 10002;
        int chair[CHAIR_SIZE];
        int maxChairCount = 0;
        fill(chair, chair + CHAIR_SIZE, -1);

        for (int i = 0; i < actions.size(); i++) {
            Action action = actions[i];
            if (action.isArrival) {
                int chairNum;
                if (pq.empty()) {
                    chairNum = maxChairCount;
                    maxChairCount++;
                } else {
                    chairNum = pq.top();
                    pq.pop();
                }
                chair[action.friendId] = chairNum;
                if (action.friendId == targetFriend) {
                    answer = chairNum;
                }
            } else {
                pq.push(chair[action.friendId]);
            }
        }

        return answer;
    }
    static vector<Action> initActions(vector<vector<int>>& times) {
        vector<Action> actions;
        for (int i = 0; i < times.size(); i++) {
            vector<int> time = times[i];

            Action arrival;
            arrival.time = time[0];
            arrival.isArrival = true;
            arrival.friendId = i;
            actions.push_back(arrival);

            Action leaving;
            leaving.time = time[1];
            leaving.isArrival = false;
            leaving.friendId = i;
            actions.push_back(leaving);
        }
        sort(actions.begin(), actions.end(), compare);
        return actions;
    }
    static bool compare(Action a, Action b) {
        if (a.time == b.time) {
            return b.isArrival;
        } else {
            return a.time < b.time;
        }
    }
};