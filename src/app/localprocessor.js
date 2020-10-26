import { installPlatform } from 'vuestic-ui/src/components/vuestic-components/va-popup/install'
installPlatform()

const Elements = {
    install ( Vue, options ) {
        [
        ].forEach( component => {
            Vue.component( component.name, component )
        } )
    },
}

export default Elements
