import { adjustDistribution, calculateNewProbability } from './distributionManagement';

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

function addKey(distribution: Record<string, number>, key: string, probability?: number) {
    if (probability === undefined) {
        probability = calculateNewProbability(distribution);
    }

    distribution[key] = 0;
    adjustDistribution(distribution, key, probability);
}

function deleteKey(distribution: Record<string, number>, key: string) {
    adjustDistribution(distribution, key, -1);
    delete distribution[key];
}

export { selectKey, addKey, deleteKey };
