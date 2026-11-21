export const _try = <T extends (...args: any[]) => any>(
	func: T
) => {
	return (...args: Parameters<T>): ReturnType<T> | undefined => {
		try {
			return func(...args);
		} catch (e) {
			logger.error(`Something went wrong in ${func.name}: ${e}`);
			return undefined;
		}
	};
};

globalThis._try = _try
