const PARENT_TAG = 'PRE'

const getParentElement = () => {
    return document.getSelection().anchorNode.parentElement
}

const getParentElementTag = () => {
    const parentElement = getParentElement()

    if (!parentElement) return

    return parentElement.tagName.toUpperCase()
}

const getClassList = () => {
    const parentElement = getParentElement()

    if (!parentElement) return

    return parentElement.classList
}

const insertFirstClass = classChange => {
    document.execCommand(
        'insertHTML',
        false,
        `<${PARENT_TAG} class="${classChange}">${document
            .getSelection()
            .toString()}</${PARENT_TAG}>`
    )
}

const toggleClass = classChange => {
    const classList = getClassList()

    if (classList.contains(classChange)) {
        classList.remove(classChange)
    } else {
        classList.add(classChange)
    }
}

const removeClass = classChange => {
    const classList = getClassList()

    if (classList.contains(classChange)) {
        classList.remove(classChange)
    }
}

const formatSelection = classChange => {
    const parentElementTagName = getParentElementTag()

    if (parentElementTagName === PARENT_TAG) {
        toggleClass(classChange)
    } else {
        insertFirstClass(classChange)
    }
}

clickButtonBold = e => {
    const classChange = CSS_CLASSES.BOLD
    formatSelection(classChange)
}

clickButtonH1 = e => {
    const classChange = CSS_CLASSES.H1

    removeClass(CSS_CLASSES.H2)

    formatSelection(classChange)
}

clickButtonH2 = e => {
    const classChange = CSS_CLASSES.H2

    removeClass(CSS_CLASSES.H1)

    formatSelection(classChange)
}

clickButtonItalic = e => {
    const classChange = CSS_CLASSES.ITALIC
    formatSelection(classChange)
}
