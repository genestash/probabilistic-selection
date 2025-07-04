import ps from '../src/index';

describe('deleteKey', () => {
    it('should delete the key and balance the distribution', () => {
        const distribution: Record<string, number> = {
            bob: 0.3,
            alice: 0.45,
            eve: 0.25
        };

        ps.deleteKey(distribution, 'bob');

        expect(distribution.bob).toBeUndefined();
        expect(distribution.alice).toBeCloseTo(0.6);
        expect(distribution.eve).toBeCloseTo(0.4);
    });
});
