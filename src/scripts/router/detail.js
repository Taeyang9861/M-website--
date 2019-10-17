import detailController from '../controllers/detail/detail'

import catalogController from '../controllers/detail/catalog'
import commentController from '../controllers/detail/comment'
import produceController from '../controllers/detail/produce'

class Router {
    constructor() {
        this.render()
    }

    render() {
        window.addEventListener('load', this.handlePageload.bind(this))
        window.addEventListener('hashchange', this.handleHashchange.bind(this))
    }

    setActiveClass(hash) {
        $(`.detail-tab .tab-item[data-to=${hash}]`).addClass('active').siblings().removeClass('active')
    }

    renderDOM(hash) {
        let pageControllers = {
            catalogController,
            produceController,
            commentController
        }

        pageControllers[hash + 'Controller'].render()
    }

    handlePageload() {
        let hash = location.hash.substr(1) || 'catalog'
        detailController.render()
        location.hash = hash

        // 初始化的时候也需要渲染DOM和设置高亮
        this.renderDOM(hash)
        this.setActiveClass(hash)
    }

    handleHashchange(e) {
        let hash = location.hash.substr(1)

        // 渲染DOM
        this.renderDOM(hash)
        // 设置高亮
        this.setActiveClass(hash)
    }
}

new Router()