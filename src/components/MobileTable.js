const MobileTable = {
  name: 'MobileTable',
  props: {
    breeds: {
      type: Array
    },
    handleDelete: {
      type: Function
    }
  },
  render () {
    return (
      <table className="ui celled table unstackable">
      <thead>
      <tr>
      <th>Breed</th>
      <th>Affection & Shedding</th>
      </tr>
      </thead>
      <tbody>
      {
        this.breeds.map(breed =>
          <tr>
          <td>
          {breed.name}
          <div
          class="ui mini circular image"
          style={{'height': '35', 'background-color': `${breed.colour}`}}
          >
          </div>
          </td>
          <td>
          <div class="ui heart rating">
          {
            [1, 2, 3, 4, 5].map(n =>
              <i class={{
                'fa': true,
                'fa-heart text-red': n <= breed.affection,
                'fa-heart-o': n > breed.affection
              }} />
            )
          }
          </div>
          <div class="ui star rating">
          {
            [1, 2, 3, 4, 5].map(n =>
              <i class={{
                'fa': true,
                'fa-star text-yellow': n <= breed.shedding,
                'fa-star-o': n > breed.shedding
              }} />
            )
          }
          </div>
          </td>
          <td>
          <div className="btn-group">
          <button onClick={this.handleDelete} type="button" class="btn-link"><span class={'fa fa-trash'}></span></button>
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
export default MobileTable
