const renderText = text => {
  const eventLog = document.querySelector('#event-log')

  const span = document.createElement('span')
  span.innerHTML = text;

  eventLog.appendChild(span)
}

const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries()
  const renderDuration = entries.find(({ entryType }) => entryType === 'navigation').duration

  const watts = 100
  const renderTimeInHours = (renderDuration / (1000 * 60 * 60))
  const wh = watts * renderTimeInHours

  renderText(`Ad rendered in ${renderDuration.toFixed(2)}ms`)
  renderText(`Energy consumption approximately ${wh.toString().substring(0, 7)}Wh`)

});

observer.observe({
  entryTypes: ['resource', 'navigation']
});