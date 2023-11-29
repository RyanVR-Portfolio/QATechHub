export class Navigation {
    constructor(page) {
        this.page = page

        this.btnTitle = getByRole('link', { name: 'Test QA Tech Hub' })
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
    }
}