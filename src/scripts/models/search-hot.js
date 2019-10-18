module.exports = {
    get() {
        return $.ajax({
            url: `/api/comic/hotsearch?apptype=8&appversion=1.0&channel=web-app&appType=8`
        })
    }
}