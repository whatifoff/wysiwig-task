const getSelectionTagName = () => {
    return document.getSelection().focusNode.parentElement.tagName.toUpperCase()
}

const clickButtonBold = e => {
    document.execCommand('bold')
}

const clickButtonH1 = e => {
    const t = getSelectionTagName()

    if (t === 'H1') {
        document.execCommand('formatBlock', false, 'p')
    } else {
        document.execCommand('formatBlock', false, 'h1')
    }
}

const clickButtonH2 = e => {
    const t = getSelectionTagName()

    if (t === 'H2') {
        document.execCommand('formatBlock', false, 'p')
    } else {
        document.execCommand('formatBlock', false, 'h2')
    }
}

const clickButtonItalic = e => {
    document.execCommand('italic')
}
