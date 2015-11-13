describe("xdebugger test", function () {

    var provider,
        httpProvider;

    beforeEach(function () {
        angular.module('ngCookies', []);
        module('gonzalo123.xdebugger');
        module(function ($provide, xdebuggerProvider, $httpProvider) {
            provider = xdebuggerProvider;
            httpProvider = $httpProvider;
        });
    });

    it('provider should have functions defined', inject(function () {
        expect(provider.hasOwnProperty('setKey')).toBeDefined();
        expect(provider.$get().hasOwnProperty('getDebugKey')).toBeDefined();
    }));

    it('tests estructure', inject(function () {
        provider.setKey('gonzalo');
        expect(provider.$get().getDebugKey()).toEqual('gonzalo');
    }));

    it('http without xdebugger key', inject(function () {
        expect(httpProvider.interceptors).not.toContain('xdebuggerCookieInterceptor');
    }));
});