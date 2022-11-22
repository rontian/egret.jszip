declare namespace wx {
    function login(object: {
        timeout?: number,
        success: (res: { code: string }) => void,
        fail?: () => void,
        complete?: () => void
    }): void;
}
