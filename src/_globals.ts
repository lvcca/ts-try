export function _try<T extends (...args: any[]) => any>(
    func: T
): (...args: Parameters<T>) => ReturnType<T> | undefined {
    return function (...args: Parameters<T>): ReturnType<T> | undefined {
        try {
            return func(...args);
        } catch (e) {
            console.error(`Something went wrong in ${func.name}: ${e}`);
            return undefined;
        }
    };
}

globalThis._try = _try
