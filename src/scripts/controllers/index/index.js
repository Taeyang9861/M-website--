const layoutView = require('../../views/index/layout.art')

class Index {
    constructor() {
        this.render()
    }

    render() {
        const html = layoutView()

        $('#home').html(html)
    }
}

new Index()