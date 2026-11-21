export {};

declare global {
    var _try: <T extends (...args: any[]) => any>(
        func: T
    ) => (...args: Parameters<T>) => ReturnType<T> | undefined;
}
