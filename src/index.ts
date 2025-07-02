function selectKey(distribution: Record<string, number>): string | null {
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

function adjustDistribution(distribution: Record<string, number>, key: string, delta: number): void {
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
        } else {
            distribution[_key] -= redistributedDelta;
        }
    }
}

function calculateAverageProbability(distribution: Record<string, number>): number | null {
    const keys = Object.keys(distribution);

    if (!keys.length) {
        return null;
    }

    let cumulative = 0;

    for (const key of keys) {
        cumulative += distribution[key];
    }

    return cumulative / keys.length;
}

function addKey(distribution: Record<string, number>, key: string, probability?: number) {
    distribution[key] = 0;

    if (probability === undefined) {
        const average = calculateAverageProbability(distribution);
        if (average === null) probability = 1;
        else probability = average;
    }

    adjustDistribution(distribution, key, probability);
}

function removeKey(distribution: Record<string, number>, key: string) {
    adjustDistribution(distribution, key, -1);
    delete distribution[key];
}

export { addKey, removeKey, selectKey, adjustDistribution };
