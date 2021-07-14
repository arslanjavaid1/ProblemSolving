var accountsMerge = function(accounts) {
    const graph = {};
    const emailToName = {};
    
    for (let account of accounts) {
      const name = account[0];
      const firstEmail = account[1];
     
      for(let i = 1; i < account.length; i++) {
        const email = account[i] 
  
        emailToName[email] = name;
  
        addEdge(graph, firstEmail, email)
        addEdge(graph, email, firstEmail)
      }
    }
    
    const result = [];
    const visited = new Set();
    
    for(let key of Object.keys(graph)) {
      const currentSet = new Set();
      
      if (!visited.has(key)) {
        dfs(graph, key, currentSet, visited)
      }
      
      if (currentSet.size > 0) {
        const mergedAccount = [...currentSet].sort()
        const anyEmail = mergedAccount[0]
        mergedAccount.unshift(emailToName[anyEmail])
        result.push(mergedAccount)
      }
    }
    
   return result; 
  }
  
  function dfs(graph, source, currentSet, visited) {
    visited.add(source)
    currentSet.add(source)
    
    for(const neighbour of graph[source]) {
      if (!visited.has(neighbour)) {
        dfs(graph, neighbour, currentSet, visited)
      } 
    }
  }
  
  
  function addEdge(graph, from, to) {
    if (from in graph === false) {
      graph[from] = [];
    } 
    
    graph[from].push(to)
  }

  let accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
  console.log(accountsMerge(accounts));