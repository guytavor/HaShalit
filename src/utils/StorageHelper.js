export function save(name, value) {
    try {
        window.localStorage.setItem(name, JSON.stringify(value));
    } catch(e) {
        console.error('Failed to save to storage', e);
    }
}

export function load(name) {
    try {
        return JSON.parse(window.localStorage.getItem(name));
    } catch(e) {
        console.error('Failed to load from storage', e);
        return null;
    }
}