import { renderTimescale } from './calendar/timescale.js';
import { renderWeek } from './calendar/calendar.js';
import { renderHeader } from './calendar/header.js';
import { initNavigation } from './header/navigation.js';
import { setItem } from './common/storage.js';
import { getStartOfWeek } from './common/time.utils.js';
import { initEventForm } from './events/createEvent.js';
import { timeLine } from './calendar/timeline.js';
import { renderEvents } from './events/events.js';
import { handleColorButtonClick } from './events/eventsColor.js';


document.addEventListener('DOMContentLoaded', () => {
  // инициализация всех элементов
  renderTimescale();
  setItem('displayedWeekStart', getStartOfWeek(new Date()));
  renderWeek();
  renderHeader();
  initNavigation()
  initEventForm();
  timeLine();
  handleColorButtonClick();
  renderEvents();
});

const onStorageChange = (e) => {
  if (e.key === 'events') {
    renderTimescale();
    timeLine();
    renderEvents();
  }
};

window.addEventListener('storage', onStorageChange);
