var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let sCountMap = new Map();
    let tCountMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (sCountMap.has(s[i])) {
            sCountMap.get(s[i]).val++;
        } else {
            sCountMap.set(s[i], {val:1});
        }
        if (tCountMap.has(t[i])) {
            tCountMap.get(t[i]).val++;
        } else {
            tCountMap.set(t[i], {val:1});
        }
    }

    for (const [letter, count] of sCountMap) {
        const sameLetterCount = (tCountMap.get(letter) !== undefined) && tCountMap.get(letter).val === count.val
        if (sameLetterCount) {
            continue;
        } else {
            return false;
        }  
    }

    return true;
};

// refreshing knowledge on hashmap use with has,get,set methods