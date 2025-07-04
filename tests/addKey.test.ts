import ps from '../src/index';

describe('addKey', () => {
    it('should add keys correctly', () => {
        const distribution: Record<string, number> = {};
        ps.addKey(distribution, 'bob');
        ps.addKey(distribution, 'alice');
        ps.addKey(distribution, 'eve', 0.2);
        expect(distribution.bob).toBeCloseTo(0.4);
        expect(distribution.alice).toBeCloseTo(0.4);
        expect(distribution.eve).toBeCloseTo(0.2);
    });
});
