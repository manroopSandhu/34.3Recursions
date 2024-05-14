function simplifiy(s) {
    if (s === 0 || s === 1) return s;

    s = s.map(simplifiy)

    if (Number.isInteger([0]) && s.every(q => q === s[0])) return s[0]

    return s;
    
}