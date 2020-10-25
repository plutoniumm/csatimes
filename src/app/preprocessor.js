import VaAccordion from 'vuestic-ui/src/components/vuestic-components/va-collapse/VaAccordion'
import VaBadge from 'vuestic-ui/src/components/vuestic-components/va-chip/VaBadge.vue'
import VaCheckbox from 'vuestic-ui/src/components/vuestic-components/va-checkbox/VaCheckbox'
import VaButton from 'vuestic-ui/src/components/vuestic-components/va-button/VaButton.vue'
import VaButtonGroup
    from 'vuestic-ui/src/components/vuestic-components/va-button-group/VaButtonGroup.vue'
import VaButtonToggle
    from 'vuestic-ui/src/components/vuestic-components/va-button-toggle/VaButtonToggle.vue'
import VaCard from 'vuestic-ui/src/components/vuestic-components/va-card/VaCard'
import VaChip from 'vuestic-ui/src/components/vuestic-components/va-chip/VaChip.vue'
import VaCollapse from 'vuestic-ui/src/components/vuestic-components/va-collapse/VaCollapse'
import VaDataTable from 'vuestic-ui/src/components/vuestic-components/va-data-table/VaDataTable.vue'
import VaDropdown from 'vuestic-ui/src/components/vuestic-components/va-dropdown/VaDropdown'
import VaIcon from 'vuestic-ui/src/components/vuestic-components/va-icon/VaIcon'
import VaInput from 'vuestic-ui/src/components/vuestic-components/va-input/VaInput'
import VaPagination from 'vuestic-ui/src/components/vuestic-components/va-pagination/VaPagination.vue'
import VaPopover from 'vuestic-ui/src/components/vuestic-components/va-popover/VaPopover.vue'
import VaSelect from 'vuestic-ui/src/components/vuestic-components/va-select/VaSelect.vue'
import VaScrollbar from 'vuestic-ui/src/components/vuestic-components/va-scrollbar/VaScrollbar.vue'
import VaSidebar from 'vuestic-ui/src/components/vuestic-components/va-sidebar/VaSidebar'
import VaSidebarLink from 'vuestic-ui/src/components/vuestic-components/va-sidebar/VaSidebarLink'
import VaTab from 'vuestic-ui/src/components/vuestic-components/va-tabs/VaTab.vue'
import VaTabs from 'vuestic-ui/src/components/vuestic-components/va-tabs/VaTabs.vue'
import VaToggle from 'vuestic-ui/src/components/vuestic-components/va-toggle/VaToggle.vue'
import StickyScroll from 'vuestic-ui/src/components/vuestic-directives/StickyScroll'
import { installPlatform } from 'vuestic-ui/src/components/vuestic-components/va-popup/install'
import { DropdownPopperPlugin } from 'vuestic-ui/src/components/vuestic-components/va-dropdown/dropdown-popover-subplugin'

import { BusPlugin } from 'vue-epic-bus'
import { registerVuesticObject } from 'vuestic-ui/src/components/resize-events'
import { ToastedMixin } from 'vuestic-ui/src/components/vuestic-mixins/VuesticToasted'

installPlatform()

const VuesticPlugin = {
    install ( Vue, options ) {
        [
            VaAccordion,
            VaBadge,
            VaCheckbox,
            VaButton,
            VaButtonGroup,
            VaButtonToggle,
            VaCard,
            VaChip,
            VaCollapse,
            VaDataTable,
            VaDropdown,
            VaInput,
            VaIcon,
            VaPagination,
            VaPopover,
            VaSelect,
            VaScrollbar,
            VaSidebar,
            VaSidebarLink,
            VaTab,
            VaTabs,
            VaToggle,
        ].forEach( component => {
            Vue.component( component.name, component )
        } )

        registerVuesticObject( Vue )

        Vue.mixin( ToastedMixin )

        Vue.use( BusPlugin )

        Vue.use( DropdownPopperPlugin )

        Vue.directive( 'sticky-scroll', StickyScroll )
    },
}

export default VuesticPlugin
