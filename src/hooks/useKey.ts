export function useKey() {
    const getKey = (key: string) => {
        return localStorage.getItem(key);
      };
    return {
        getKey,
    };
}