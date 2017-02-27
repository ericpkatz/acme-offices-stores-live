import $ from 'jquery';

const DayViewer = ({ containerId, day, onSelect }) => {
  const container = $(containerId);
  const { office, store } = day;
  container.empty();
  if(office){
    container.append($(`
          <ul class='list-group'>
            <li class='list-group-item'>
            <em>Your Office Visit</em>
            </li>
            <li class='list-group-item' data-item-type='office'>${ office.name } - ( ${ office.place.name } )
            </li>
          </ul>`));
  }
  if(store){
    container.append($(`
          <ul class='list-group'>
            <li class='list-group-item'>
              <em>Your Store Visit</em>
            </li>
            <li class='list-group-item' data-item-type='store'>${ store.name } - ( ${ store.place.name }) </li>
          </ul>`));
  }
  container.on('click', 'li', function(){
    const itemType = $(this).attr('data-item-type');
    onSelect(itemType);
  });
};

export default DayViewer;
