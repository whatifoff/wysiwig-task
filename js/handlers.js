clickButtonBold = e => {
    document.execCommand('bold')
}

clickButtonH1 = e => {
    document.execCommand('formatBlock', false, 'h1')
}

clickButtonH2 = e => {
    document.execCommand('formatBlock', false, 'h2')
}

clickButtonItalic = e => {
    document.execCommand('italic')
}
