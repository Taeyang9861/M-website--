module.exports = {

    get({
        param = 410,
        gname = '格斗'
    }) {
        return $.ajax({

            type: 'POST',

            url: `/app/category/ajax_group`,

            data: {
                "fun": 1,
                "param": `${param}`,
                "gname": `${gname}`,
                "count": 16,
                "start": 0
            }

        })
    }
}