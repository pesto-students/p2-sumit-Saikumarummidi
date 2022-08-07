var SourceToTarget = function(graph) {
    
    const result = [];
    const path = [];
    
    dfs(0);
    return result;

    
    function dfs(index) {

        if (index === graph.length - 1) {
            
            return result.push([...path, index]);
            
        }
 
        const elements = graph[index];
        for (let i = 0; i < elements.length; i++) { 
            path.push(index);
            dfs(elements[i]);
            path.pop();     
        }
    }
};

