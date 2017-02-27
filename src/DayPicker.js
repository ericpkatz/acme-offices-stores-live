import $ from 'jquery';

const DayPicker = ({ containerId, days, idx, onSelect }) => {
  const container = $(containerId);
  const lis = days.map( (day, _idx) => {
    if(idx === _idx)
      return `<li class='active'><a href>${_idx + 1}</a></li>`;
    return `<li><a href>${_idx + 1}</a></li>`;
  });

  const html = `<ul class='nav nav-tabs'>${ lis.join('') }</ul>`;
  container.on('click', 'a', function(ev){
    ev.preventDefault();
    onSelect($(this).parent().index());
  });
  container.html(html);
};

export default DayPicker;
