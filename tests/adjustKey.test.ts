import ps from '../src/index';

describe('adjustKey', () => {
    it('should balance the distribution', () => {
        const distribution: Record<string, number> = {
            bob: 0.4,
            alice: 0.4,
            eve: 0.2
        };

        ps.adjustKey(distribution, 'bob', -0.1);

        expect(distribution.bob).toBeCloseTo(0.3);
        expect(distribution.alice).toBeCloseTo(0.45);
        expect(distribution.eve).toBeCloseTo(0.25);
    });
});
