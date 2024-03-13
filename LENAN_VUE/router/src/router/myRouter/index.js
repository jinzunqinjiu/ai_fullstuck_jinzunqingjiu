function createRouter(options) {
    return new Router(options)
}
function createWebHahHistory(params) {
    function bindEvents(fn) {
        window.addEventListener('hsahchange', fn)
    }
    return {
        bindEvents,
        url: window.location.hash.slice(1) || '/'
    }
}
class Router {
    constructor(options) {
        this.history = options.history
        this.routes = options.routes
        this.current = this.history.url


        this.history.bindEvents(() => {
            this.current = window.location.hash.slice(1)
        })
    }
}
export {
    createRouter, createWebHahHistory
}