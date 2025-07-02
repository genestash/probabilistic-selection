import { adjustDistribution, calculateAverageProbability } from './distributionManagement';

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

export { selectKey, addKey, removeKey };
