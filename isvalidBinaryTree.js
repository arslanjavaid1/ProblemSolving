1. There can be one and only one root
2. All nodes should have only one indegree, except the root node, which has zero indegree
3. Check if there any node missed from the given list(example 5)

    public boolean isBinaryTree(List < TreeNode > nodes) {
    Map < TreeNode, Integer > degree = new HashMap <> ();
    for (TreeNode node : nodes) {
        if (node.left != null) degree.put(node.left, degree.getOrDefault(node.left, 0) + 1);
        if (node.right != null) degree.put(node.right, degree.getOrDefault(node.right, 0) + 1);
    }
    TreeNode root = null;
    for (TreeNode node : nodes) {
        if (!degree.containsKey(node)) {
            if (root == null) root = node;
            else return false;
        } else if (degree.get(node) != 1)
            return false;
    }
    return root != null && nodes.size() == degree.keySet().size() + 1;
}