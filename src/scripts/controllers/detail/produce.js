import produceHtml from '../../views/detail/produce.art'

const recommendModel = require('../../models/recommend')

class Produce {
    async render() {

        let bigbookid = location.search.substr(1)

        let recommend = await recommendModel.get()
        let data = recommend.info
        let result
        for(var i=0;i<data.length;i++){
            let list = data[i].comicslist

            result = $.grep(list, (item) => {
                return (item.bigbook_id == bigbookid)
            })
            if(result)
                break
        }

        let html = produceHtml({
            list: result
        })

        $('.content').html(html)
    }
}

export default new Produce()