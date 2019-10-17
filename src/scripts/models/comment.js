module.exports = {
    get({
        pageno = 1
    }) {
        return $.ajax({

            type: 'POST',

            url: `/api/comic_v2/bloglist?apptype=8&appversion=1.0&channel=web-app`,

            data: `{"type":3,"pageno":${pageno},"pagesize":20,"userid":null,"bigbookid":"13543"}`
        })
    }
}