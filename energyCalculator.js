const renderText = text => {
  const eventLog = document.querySelector('#event-log')

  const span = document.createElement('span')
  span.innerHTML = text;

  eventLog.appendChild(span)
}

const calculateEnergyConsumption = navigationEntry => {
  const renderDuration = navigationEntry.duration

  const watts = !isMobile ? 100 : 5
  const renderTimeInHours = (renderDuration / (1000 * 60 * 60))
  const wh = watts * renderTimeInHours

  renderText(`Ad rendered in ${renderDuration.toFixed(2)}ms`)
  renderText(`Energy consumption approximately ${wh.toString().substring(0, 7)}Wh`)
}

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries()
  const navigationEntry = entries.find(({ entryType }) => entryType === 'navigation')
  if (navigationEntry) {
    calculateEnergyConsumption(navigationEntry)
  }
});

observer.observe({
  entryTypes: ['resource', 'navigation']
});