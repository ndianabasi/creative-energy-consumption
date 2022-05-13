const renderText = text => {
  const eventLog = document.querySelector("#event-log");

  const span = document.createElement("span");
  span.innerHTML = text;

  eventLog.appendChild(span);
};

let documentVisibility = document.visibilityState;

const startTime = performance.now();

document.addEventListener("readystatechange", event => {
  if (document.readyState === "complete") {
    if (documentVisibility === "hidden") {
      renderText("Ad was not visible during render");
      return;
    }

    const renderTime = event.timeStamp - startTime;

    console.log({ renderTime, startTime });

    const watts = 100;
    const renderTimeInHours = renderTime / (1000 * 60 * 60);
    const wh = watts * renderTimeInHours;

    renderText(`Ad rendered in ${renderTime.toFixed(2)}ms`);
    renderText(
      `Energy consumption approximately ${wh.toString().substring(0, 7)}Wh`
    );
  }
});

document.addEventListener("visibilitychange", () => {
  documentVisibility = document.visibilityState;
});

const observer = new PerformanceObserver(list => {
  console.log(list.getEntries());
  for (const entry of list.getEntries()) {
    if (entry.initiatorType === "fetch") {
      console.log("Fetch request detected to", entry.name);
    }
  }
});

observer.observe({
  entryTypes: ["resource"]
});
