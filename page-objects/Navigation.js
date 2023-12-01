import { expect } from "@playwright/test"

export class Navigation {
    constructor(page) {
        this.page = page

        this.btnTitle = page.getByRole('link', { name: 'Test QA Tech Hub' })
//Top Bar Nav - link=main link | option=tiered option under main link
        this.linkHome = page.getByRole('link', { name: 'Home' })
        this.linkWebComponents = page.getByRole('link', { name: 'Web Components' })
        this.optionFormElements = page.getByRole('link', { name: 'Form Elements' })
        this.optionFileDownload = page.getByLabel('Main').getByRole('link', { name: 'File Download' })
        this.linkAlertsAndWindows = page.getByRole('link', { name: 'Alerts and Windows' })
        this.optionAlertHandling = page.getByLabel('Main').getByRole('link', { name: 'Alert Handling' })
        this.optionWindowHandling = page.getByLabel('Main').getByRole('link', { name: 'Window Handling' })
        this.linkWidgets = page.getByRole('link', { name: 'Widgets' })
        this.optionAccordion = page.getByLabel('Main').getByRole('link', { name: 'Accordion' })
        this.optionAutoComplete = page.getByLabel('Main').getByRole('link', { name: 'Auto-Complete' })
        this.optionDatePicker = page.getByLabel('Main').getByRole('link', { name: 'Date-Picker' })
        this.linkInteractions = page.getByRole('link', { name: 'Interactions' })
        this.optionSelectable = page.getByLabel('Main').getByRole('link', { name: 'Selectable' })
        this.optionDragAndDrop = page.getByLabel('Main').getByRole('link', { name: 'Drag and Drop' })
    }

//All navigation cases should start with "nav". 
    navToHomeViaTitleBtn = async () => {
        await this.page.goto('/')
        await this.btnTitle.waitFor()
        await this.btnTitle.click()
        await this.btnTitle.waitFor()
        await expect(this.page).toHaveURL('./')
    }

    navToHomeViaHomeLink = async () => {
        await this.page.goto('/')
        await this.linkHome.waitFor()
        await this.linkHome.click()
        await this.linkHome.waitFor()
        await expect(this.page).toHaveURL('./')
    }

    navToFormElements = async () => {
        await this.page.goto('/')
        await this.linkWebComponents.hover()
        await this.optionFormElements.isVisible()
        await this.optionFormElements.click()
        await this.linkWebComponents.waitFor()
        await expect(this.page).toHaveURL('./form-elements/')
    }

    navToFileDownload = async () => {
        await this.page.goto('/')
        await this.linkWebComponents.hover()
        await this.optionFileDownload.isVisible()
        await this.optionFileDownload.click()
        await this.linkWebComponents.waitFor()
        await expect(this.page).toHaveURL('./file-download/')
    }

    navToAlertHandling = async () => {
        await this.page.goto('/')
        await this.linkAlertsAndWindows.hover()
        await this.optionAlertHandling.isVisible()
        await this.optionAlertHandling.click()
        await this.linkAlertsAndWindows.waitFor()
        await expect(this.page).toHaveURL('./alert-handling/')
    }

    navToWindowHandling = async () => {
        await this.page.goto('/')
        await this.linkAlertsAndWindows.hover()
        await this.optionWindowHandling.isVisible()
        await this.optionWindowHandling.click()
        await this.linkAlertsAndWindows.waitFor()
        await expect(this.page).toHaveURL('./window-handling/')
    }

    navToAccordion = async () => {
        await this.page.goto('/')
        await this.linkWidgets.hover()
        await this.optionAccordion.isVisible()
        await this.optionAccordion.click()
        await expect(this.page).toHaveURL('./accordion/')
    }
    
    navToAutoComplete = async () => {
        await this.page.goto('/')
        await this.linkWidgets.hover()
        await this.optionAutoComplete.isVisible()
        await this.optionAutoComplete.click()
        await this.linkWidgets.waitFor()
        await expect(this.page).toHaveURL('./auto-complete/')
    }

    navToDatePicker = async () => {
        await this.page.goto('/')
        await this.linkWidgets.hover()
        await this.optionDatePicker.isVisible()
        await this.optionDatePicker.click()
        await this.linkWidgets.waitFor()
        await expect(this.page).toHaveURL('./date-picker/')
    }

    navToSelectable = async () => {
        await this.page.goto('/')
        await this.linkInteractions.hover()
        await this.optionSelectable.isVisible()
        await this.optionSelectable.click()
        await this.linkInteractions.waitFor()
        await expect(this.page).toHaveURL('./selectable/')
    }

    navToDragAndDrop = async () => {
        await this.page.goto('/')
        await this.linkInteractions.hover()
        await this.optionDragAndDrop.isVisible()
        await this.optionDragAndDrop.click()
        await this.linkInteractions.waitFor()
        await expect(this.page).toHaveURL('./drag-and-drop/')
    }
}