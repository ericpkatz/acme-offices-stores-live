import $ from 'jquery';
import DayPicker from './DayPicker';
import DayViewer from './DayViewer';
import VisitPicker from './VisitPicker';


//define the concept of days
let days = [
  {
    office: offices[1],
    store: stores[1],
  },
  {
    office: offices[0]
  },
  {
    office: stores[0]
  },
];


let idx = 0;


const onSelectDay = (_idx)=> {
  idx = _idx;
  renderDayPicker();
};

const renderDayPicker = ()=> {
  DayPicker({ containerId: '#dayPicker', days, idx, onSelect: onSelectDay });
  renderDayViewer();
};

const onDeleteVisit = (itemType)=> {
  const day = days[idx];
  delete day[itemType];
  renderDayViewer();
};

const renderDayViewer = ()=> {
  const day = days[idx];
  DayViewer({ containerId: '#dayViewer', day, onSelect: onDeleteVisit }); 
};

renderDayPicker();

const onSetVisit = (itemType, item)=> {
  const day = days[idx];
  day[itemType] = item;
  renderDayViewer();
};

VisitPicker({ onSelect: onSetVisit });
