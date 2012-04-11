expect(x).toEqual(y);
expect(x).toBe(y);
expect(x).toMatch(/pattern/);
expect(x).toBeDefined();
expect(x).toBeUndefined();
expect(x).toBeNull();
expect(x).toBeTruthy();
expect(x).toBeFalsy();
expect(x).toContain(y);
expect(x).toBeLessThan(y);
expect(x).toBeGreaterThan(y);
expect(function(){fn();}).toThrow(e);

// Invert any matcher
expect(x).not.toBe(y);
