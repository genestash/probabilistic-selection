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

    for (const key of keys) {
        distribution[key] -= redistributedDelta;
    }

    distribution[key] = newProbability;
}

export { selectKey, adjustDistribution };
