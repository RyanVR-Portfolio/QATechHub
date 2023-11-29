export class Navigation {
    constructor(page) {
        this.page = page
//Top Bar Nav - link=main link | option=tiered option under main link
        this.linkHome = getByRole('link', { name: 'Home' })
        this.linkWebComponents = getByRole('link', { name: 'Web Components' })
        this.optionFormElements = getByRole('link', { name: 'Form Elements' })
        this.optionFileDownload = getByLabel('Main').getByRole('link', { name: 'File Download' })
        this.linkAlertsAndWindows = getByRole('link', { name: 'Alerts and Windows' })
        this.optionAlertHandling = getByLabel('Main').getByRole('link', { name: 'Alert Handling' })
        this.optionWindowHandling = getByLabel('Main').getByRole('link', { name: 'Window Handling' })
        this.linkWidgets = getByRole('link', { name: 'Widgets' })
        this.optionAccordion = getByLabel('Main').getByRole('link', { name: 'Accordion' })
        this.optionAutoComplete = getByLabel('Main').getByRole('link', { name: 'Auto-Complete' })
        this.optionDatePicker = getByLabel('Main').getByRole('link', { name: 'Date-Picker' })
        this.linkInteractions = getByRole('link', { name: 'Interactions' })

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