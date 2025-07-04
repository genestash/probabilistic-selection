import ps from '../src/index';

describe('selectKey', () => {
    it('should select a key considering the probabilities', () => {
        const distribution: Record<string, number> = { bob: 0.9, alice: 0.1 };
        const results: Record<string, number> = {};

        for (let i = 0; i < 1000; i++) {
            const key = ps.selectKey(distribution)!;
            results[key] = (results[key] || 0) + 1;
        }

        const ratio = results.bob / 1000;
        expect(ratio).toBeCloseTo(distribution.bob, 1);
    });
});
