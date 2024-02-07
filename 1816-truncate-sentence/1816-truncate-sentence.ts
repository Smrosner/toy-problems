function truncateSentence(s: string, k: number): string {
    let result = "";
    let spaces = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
            spaces++;
            if (spaces === k) {
                return result;
            }
        }
        result += s[i];
    }
    return result;
};