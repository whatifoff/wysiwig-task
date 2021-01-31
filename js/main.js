const getElement = name => {
    const selector = ELEMENTS[name]
    return document.querySelector(selector)
}

const setEventHandler = ({name, eventAndHandler}) => {
    const element = getElement(name)

    if (!element || !eventAndHandler?.event || !eventAndHandler.handler) return

    element.addEventListener(eventAndHandler.event, eventAndHandler.handler)
}

const setEventsHandlers = () => {
    HANDLERS.forEach(a => {
        a.events.forEach(b => {
            setEventHandler({
                name: a.name,
                eventAndHandler: b
            })
        })
    })
}

window.onload = e => {
    setEventsHandlers()
}
