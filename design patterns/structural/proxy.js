function fetch(url){
    return `${url} and response from server`
}

const cache = new Set();
const proxiedFetch = new Proxy(fetch, {
    apply(target, thisArg, argArray) {
        const url = argArray[0];
        if(cache.has(url)){
            return `${url} and response from cache`
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, argArray)
        }
    }
})

console.log(proxiedFetch('something'));
console.log(proxiedFetch('something else'));
console.log(proxiedFetch('something'));
