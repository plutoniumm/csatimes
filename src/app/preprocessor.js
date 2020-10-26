import VaButton from 'vuestic-ui/src/components/vuestic-components/va-button/VaButton.vue'
import VaButtonGroup
    from 'vuestic-ui/src/components/vuestic-components/va-button-group/VaButtonGroup.vue'
import VaButtonToggle
    from 'vuestic-ui/src/components/vuestic-components/va-button-toggle/VaButtonToggle.vue'
import VaCard from 'vuestic-ui/src/components/vuestic-components/va-card/VaCard'
import VaCollapse from 'vuestic-ui/src/components/vuestic-components/va-collapse/VaCollapse'
import VaDropdown from 'vuestic-ui/src/components/vuestic-components/va-dropdown/VaDropdown'
import VaInput from 'vuestic-ui/src/components/vuestic-components/va-input/VaInput'
import VaPagination from 'vuestic-ui/src/components/vuestic-components/va-pagination/VaPagination.vue'
import VaPopover from 'vuestic-ui/src/components/vuestic-components/va-popover/VaPopover.vue'
import VaSelect from 'vuestic-ui/src/components/vuestic-components/va-select/VaSelect.vue'
import VaScrollbar from 'vuestic-ui/src/components/vuestic-components/va-scrollbar/VaScrollbar.vue'
import VaSidebar from 'vuestic-ui/src/components/vuestic-components/va-sidebar/VaSidebar'
import VaSidebarLink from 'vuestic-ui/src/components/vuestic-components/va-sidebar/VaSidebarLink'
import VaTab from 'vuestic-ui/src/components/vuestic-components/va-tabs/VaTab.vue'
import VaTabs from 'vuestic-ui/src/components/vuestic-components/va-tabs/VaTabs.vue'

import { installPlatform } from 'vuestic-ui/src/components/vuestic-components/va-popup/install'
import { DropdownPopperPlugin } from 'vuestic-ui/src/components/vuestic-components/va-dropdown/dropdown-popover-subplugin'
import { BusPlugin } from 'vue-epic-bus'
import { ToastedMixin } from 'vuestic-ui/src/components/vuestic-mixins/VuesticToasted'

installPlatform()

const VuesticPlugin = {
    install ( Vue, options ) {
        [
            VaButton, VaButtonGroup, VaButtonToggle,
            VaCard,
            VaCollapse,
            VaDropdown, VaInput, VaSelect,
            VaPagination,
            VaPopover,
            VaScrollbar,
            VaSidebar, VaSidebarLink,
            VaTab, VaTabs,
        ].forEach( component => { Vue.component( component.name, component ) } )
        Vue.mixin( ToastedMixin )
        Vue.use( BusPlugin )
        Vue.use( DropdownPopperPlugin )
    },
}

export default VuesticPlugin
