export class Navigation {
    constructor(page) {
        this.page = page

        this.
// Home Nav Buttons
        this.btnAlertHandling = getByRole('link', { name: 'Alert Handling' })
        this.btnFormElement = getByRole('link', { name: 'Form Element' })
        this.btnFileDownload = getByRole('link', { name: 'File Download' })
        this.btnWindowHandling = getByRole('link', { name: 'Window Handling' })
        this.btnDragDrop = getByRole('link', { name: 'Drag and Drop' })
        this.btnAccordion = getByRole('link', { name: 'Accordion' })
        this.btnDatePicker = getByRole('link', { name: 'Date-Picker' })
        this.btnAutoComplete = getByRole('link', { name: 'Auto-Complete' })
        this.btnSelectable = getByRole('link', { name: 'Selectable' })
    }
}