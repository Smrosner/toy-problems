function longestCommonPrefix(strs: string[]): string {
    
    if (strs.length === 0) return "";

    let prefix = strs[0];
    
    for (let i = 0; i < prefix.length; i++) {
        for (let j = 1; j < strs.length; j ++) {
            if (i >= strs[j].length || strs[j][i] !== prefix[i]) {
                return prefix.substring(0,i);
            }
        }
    }
    return prefix;
};