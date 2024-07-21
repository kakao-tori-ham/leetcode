/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */

struct TreeNodeWithDepth {
    int val;
    int depth;
    int parent;
};

class Solution {
public:
    int uniqueIndex = 0;
    TreeNodeWithDepth nodeInfos[1026];
    vector<int> leafNodes;
    int parentCache[1026][12] = {
        0,
    };
    int countPairs(TreeNode* root, int distance) {
        int answer = 0;
        leafNodes.clear();
        makeTreeNodeWithDepth(root, 0, 0);

        for (int i = 0; i < leafNodes.size(); i++) {
            for (int j = i + 1; j < leafNodes.size(); j++) {
                if (isGoodLeaf(leafNodes[i], leafNodes[j], distance))
                    answer++;
            }
        }

        return answer;
    }

    void makeTreeNodeWithDepth(TreeNode* node, int parent, int depth) {
        if (node == nullptr)
            return;

        int curKey = uniqueIndex++;
        TreeNodeWithDepth newNode;
        newNode.val = curKey;
        newNode.depth = depth;
        newNode.parent = parent;

        nodeInfos[curKey] = newNode;

        if (node->left == nullptr && node->right == nullptr) {
            leafNodes.push_back(curKey);
        }

        makeTreeNodeWithDepth(node->left, curKey, depth + 1);
        makeTreeNodeWithDepth(node->right, curKey, depth + 1);

        return;
    }

    bool isGoodLeaf(int node1, int node2, int distance) {
        int n1 = node1;
        int n2 = node2;
        int curDistance = abs(nodeInfos[n1].depth - nodeInfos[n2].depth);
        if (curDistance > distance)
            return false;

        if (nodeInfos[n1].depth > nodeInfos[n2].depth)
            n1 = changeDepth(n1, curDistance);
        else
            n2 = changeDepth(n2, curDistance);

        while (n1 != n2) {
            if (n1 == 0 || n2 == 0)
                return false;
            n1 = changeDepth(n1, 1), n2 = changeDepth(n2, 1);
            curDistance += 2;
            if (curDistance > distance)
                return false;
        }
        return true;
    }

    int changeDepth(int node, int depth) {
        int nextNode = node;
        int i = depth;
        if (parentCache[node][depth] != 0)
            return parentCache[node][depth];
        while (i--) {
            nextNode = nodeInfos[nextNode].parent;
        }
        parentCache[node][depth] = nextNode;
        return nextNode;
    }
};