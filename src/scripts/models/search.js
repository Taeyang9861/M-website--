module.exports = {
    get({
        name = ''
    }) {
        return $.ajax({
            url: `/api/comic_v2/searchindex?apptype=8&appversion=1.0&channel=web-app&name=${name}&type=2`
        })
    }
}