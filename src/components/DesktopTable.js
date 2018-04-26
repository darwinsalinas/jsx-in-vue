const DesktopTable = {
  name: 'DesktopTable',
  props: {
    breeds: {
      type: Array
    },
    handleDelete: {
      type: Function
    },
    callbackParent: false
  },
  methods: {
    borrar (item) {
      this.handleDelete(item)
    }
  },
  render (h) {
    return (
      <table class="ui celled table unstackable">
        <thead>
          <tr>
            <th>Breed</th>
            <th>Coat Colour</th>
            <th>Level of Affection</th>
            <th>Level of Shedding</th>
            <th><span class={'fa fa-cog'}></span></th>
          </tr>
        </thead>
        <tbody>
          {
            this.breeds.map(breed =>
              <tr>
                <td>{breed.name}</td>
                <td>{breed.colour}</td>
                <td>{breed.affection}</td>
                <td>{breed.shedding}</td>
                <td>
                  <div className="btn-group">
                  <button onClick={() => this.borrar(breed)} type="button" class="btn-link"><span class={'fa fa-trash'}></span></button>
                  </div>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}

export default DesktopTable
