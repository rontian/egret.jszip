export class Platform {
    public login(): Promise<string> {
        return new Promise<string>((resolve) => {
            wx.login({
                success(res) {
                    resolve(res.code);
                },
            });
        });
    }
}
