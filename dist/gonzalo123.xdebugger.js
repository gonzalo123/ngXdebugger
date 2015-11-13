(function () {
    "use strict";

    angular.module("gonzalo123.xdebugger", ["ngCookies"])
        .provider("xdebugger", function ($httpProvider) {

            var debugKey;

            this.$get = function () {
                return {
                    getDebugKey: function () {
                        return debugKey;
                    }
                };
            };

            this.setKey = function (string) {
                if (string) {
                    debugKey = string;
                    $httpProvider.interceptors.push("xdebuggerCookieInterceptor");
                }
            };
        })

        .factory("xdebuggerCookieInterceptor", function ($cookieStore, xdebugger) {
            return {
                response: function (response) {
                    $cookieStore.put("XDEBUG_SESSION", xdebugger.getDebugKey());

                    return response;
                }
            };
        })
    ;
})();