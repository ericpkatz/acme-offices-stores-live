import $ from 'jquery';

const VisitPicker = ({ onSelect })=> {
  const pickers = $('.picker');

  $('button', pickers).on('click', function(ev){
    ev.preventDefault();
    const form = $(this).parents('form');
    const select = $('select', form);
    const itemType = form.attr('data-item-type');
    const items = window[itemType];
    const item = items.filter( item => select.val()*1 === item.id)[0];
    onSelect(itemType === 'offices' ? 'office' : 'store', item);
  });
};

export default VisitPicker;
