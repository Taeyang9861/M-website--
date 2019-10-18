const searchView = require('../../views/search/searchContent.art')

const listHtml = require('../../views/search/searchList.art')

const searchMoudel = require('../../models/searchContent')

class Index {
    constructor() {
        this.render()
        this.list = []
    }

    renderer(list) {
        const html = listHtml({
            list: list
        })

        $('.search-result-list').html(html)
    }

    async render() {

        const html = searchView()

        $('#home').html(html)

        let Name = location.hash.substr(1)

        $('.header-title').html(Name)

        let name = escape(Name)

        let search = await searchMoudel.get({
            name: name
        })

        let list = search.info

        this.renderer(list)

        $('.header-back').on('click', () => {
            window.history.back(-1);
        })

    }
}

new Index()