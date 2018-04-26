/* eslint-disable */
import DesktopTable from './DesktopTable.js'
import MobileTable from './MobileTable.js'

const TablaRaza = {
  name: 'TablaRaza',
  props: {
    breeds: {
      type: Array
    },
    width: {
      type: Number
    }
  },
  methods: {
    deleteItem (item) {
      let index = this.breeds.indexOf(item)
      this.breeds.splice(index, 1)
    }
  },
  render (h) {
    if (this.width > 500) {
      return <DesktopTable breeds={this.breeds} handleDelete={(item) => this.deleteItem(item)}/>
    } else {
      return <MobileTable breeds={this.breeds} handleDelete={(item) => this.deleteItem(item)}/>
    }
  }
}
export default TablaRaza
