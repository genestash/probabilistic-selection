declare function addKey(distribution: Record<string, number>, key: string, probability?: number): void;
declare function deleteKey(distribution: Record<string, number>, key: string): void;
declare function selectKey(distribution: Record<string, number>): string | null;
declare function adjustKey(distribution: Record<string, number>, key: string, delta: number): void;
declare const _default: {
    selectKey: typeof selectKey;
    addKey: typeof addKey;
    deleteKey: typeof deleteKey;
    adjustKey: typeof adjustKey;
};
export default _default;
export { selectKey, addKey, adjustKey, deleteKey };
