const layoutView = require('../../views/index/layout.art')

class Index {
    constructor() {
        this.render()
    }

    render() {
        const html = layoutView()

        $('#home').html(html)

        let userInfoStr = sessionStorage.getItem("userInfo")

        let userInfo = JSON.parse(userInfoStr)

        if(userInfo){
            $('.head-login img').attr('src', 'https://img.manhuadao.cn/Others/community/user_default_img.png')
        }
    }
}

new Index()