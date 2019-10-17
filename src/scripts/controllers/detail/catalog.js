import catalogHtml from '../../views/detail/catalog.art'

class Catalog {
    render() {
        let html = catalogHtml()

        $('.content').html(html)
    }
}

export default new Catalog()