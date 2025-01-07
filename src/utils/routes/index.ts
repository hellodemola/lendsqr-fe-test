const DASHBOARD_URL = "/dashboard"

export function urlContainsItem(url: string, item: string): boolean {
    if (item === DASHBOARD_URL) return false;
    return url.includes(item);
}

export function isDashboard (url: string, item: string): boolean {
    if (url === item && url === DASHBOARD_URL) return true;
    return false
}