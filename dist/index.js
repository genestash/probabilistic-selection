function addKey(distribution, key, probability) {
    if (probability === undefined) {
        probability = calculateBalancedProbability(distribution);
    }
    distribution[key] = 0;
    adjustKey(distribution, key, probability);
}
function deleteKey(distribution, key) {
    adjustKey(distribution, key, -1);
    delete distribution[key];
}
function selectKey(distribution) {
    const keys = Object.keys(distribution);
    if (keys.length === 0) {
        return null;
    }
    const threshold = Math.random();
    let cumulative = 0;
    for (const key of keys) {
        cumulative += distribution[key];
        if (cumulative > threshold) {
            return key;
        }
    }
    return keys[keys.length - 1];
}
function adjustKey(distribution, key, delta) {
    const keys = Object.keys(distribution);
    if (keys.length === 0) {
        return;
    }
    let newProbability = distribution[key] + delta;
    if (newProbability > 1) {
        newProbability = 1;
        delta = 1 - distribution[key];
    }
    if (newProbability < 0) {
        newProbability = 0;
        delta = 0 - distribution[key];
    }
    if (delta === 0) {
        return;
    }
    const redistributedDelta = delta / (keys.length - 1);
    for (const _key of keys) {
        if (_key === key) {
            distribution[_key] = newProbability;
        }
        else {
            distribution[_key] -= redistributedDelta;
        }
    }
}
function calculateBalancedProbability(distribution) {
    const keys = Object.keys(distribution);
    if (!keys.length) {
        return 1;
    }
    let cumulative = 0;
    for (const key of keys) {
        cumulative += distribution[key];
    }
    return cumulative / (keys.length + 1);
}
// Exports
export default {
    selectKey,
    addKey,
    deleteKey,
    adjustKey
};
export { selectKey, addKey, adjustKey, deleteKey };
