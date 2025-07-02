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

export { adjustDistribution, calculateAverageProbability };
