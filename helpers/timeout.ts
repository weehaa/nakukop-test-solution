const timeout = (promise: Promise<any>, timeout = 5000): Promise<any> => {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error('timeout')), timeout)
        )
    ]);
}

export default timeout