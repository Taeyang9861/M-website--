module.exports = {
    get() {
        return $.ajax({
            url: `/api/comic_v2/customerview?apptype=8&appversion=1.0&channel=web-app&viewtype=1`
        })
    }
}