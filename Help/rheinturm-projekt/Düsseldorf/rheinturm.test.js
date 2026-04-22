/**
 * Tests for rheinturm-projekt utility functions
 */

// Mocking jQuery if necessary for other tests, 
// but updateQueryStringParameter is pure JS.

describe('Rheinturm Project Utilities', () => {
    
    describe('updateQueryStringParameter', () => {
        const baseUrl = 'https://www.duesseldorf.de/rheinturm';

        test('should add a parameter to a URL without query strings', () => {
            const result = updateQueryStringParameter(baseUrl, 'lang', 'de');
            expect(result).toBe(baseUrl + '?lang=de');
        });

        test('should update an existing parameter', () => {
            const urlWithQuery = baseUrl + '?lang=en';
            const result = updateQueryStringParameter(urlWithQuery, 'lang', 'de');
            expect(result).toBe(baseUrl + '?lang=de');
        });

        test('should append a new parameter to existing query strings', () => {
            const urlWithQuery = baseUrl + '?id=1';
            const result = updateQueryStringParameter(urlWithQuery, 'lang', 'de');
            expect(result).toBe(baseUrl + '?id=1&lang=de');
        });

        test('should handle cases where the parameter is a substring of another', () => {
            // Testing regex accuracy for parameter 'id' vs 'uid'
            const urlWithQuery = baseUrl + '?uid=999';
            const result = updateQueryStringParameter(urlWithQuery, 'id', '1');
            expect(result).toContain('uid=999');
            expect(result).toContain('id=1');
        });
    });
});