function main() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, 300)
    })
}

export default main
