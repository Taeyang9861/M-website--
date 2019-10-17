import produceHtml from '../../views/detail/produce.art'

class Produce {
    render() {
        let html = produceHtml()

        $('.content').html(html)
    }
}

export default new Produce()