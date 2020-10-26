import VaButton from 'vuestic-ui/src/components/vuestic-components/va-button/VaButton.vue'
import VaCard from 'vuestic-ui/src/components/vuestic-components/va-card/VaCard'
import VaCollapse from 'vuestic-ui/src/components/vuestic-components/va-collapse/VaCollapse'
import VaDropdown from 'vuestic-ui/src/components/vuestic-components/va-dropdown/VaDropdown'
import VaInput from 'vuestic-ui/src/components/vuestic-components/va-input/VaInput'
import VaSelect from 'vuestic-ui/src/components/vuestic-components/va-select/VaSelect.vue'
import VaSidebar from 'vuestic-ui/src/components/vuestic-components/va-sidebar/VaSidebar'
import VaSidebarLink from 'vuestic-ui/src/components/vuestic-components/va-sidebar/VaSidebarLink'
import VaTab from 'vuestic-ui/src/components/vuestic-components/va-tabs/VaTab.vue'
import VaTabs from 'vuestic-ui/src/components/vuestic-components/va-tabs/VaTabs.vue'

import { installPlatform } from 'vuestic-ui/src/components/vuestic-components/va-popup/install'
import { BusPlugin } from 'vue-epic-bus'
import { ToastedMixin } from 'vuestic-ui/src/components/vuestic-mixins/VuesticToasted'

const DropdownPopperPlugin = {
    install ( Vue ) {
        Vue.prototype.$closeDropdown = () => {
            let vm = this
            while ( ( vm = vm.$parent ) ) {
                if ( vm.$options.name === 'va-dropdown-popper' ) { vm.hide(); break; }
            }
        }
    },
}

installPlatform()

const VuesticPlugin = {
    install ( Vue, options ) {
        [
            VaButton,
            VaCard,
            VaCollapse,
            VaDropdown, VaInput, VaSelect,
            VaSidebar, VaSidebarLink,
            VaTab, VaTabs,
        ].forEach( component => { Vue.component( component.name, component ) } )
        Vue.mixin( ToastedMixin )
        Vue.use( BusPlugin )
        Vue.use( DropdownPopperPlugin )
    },
}

export default VuesticPlugin
