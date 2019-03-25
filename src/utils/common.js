import { err, log } from "./Logger";

export function getQueryParam(name) {
    let param = null;

    if (typeof window !== 'undefined') {
        try {
            const query = window.location.search.substring(1);
            const params = query.split("&");
            const paramPair = params.map(pair => pair.split('=')).find(p => p.length ? p[0] === name : false);

            if (paramPair && paramPair.length) {
                param = paramPair[paramPair.length - 1];
            }
        } catch (e) {
            log('couldn\'t get param');
            err(e);
        }
    }

    return param;
}
