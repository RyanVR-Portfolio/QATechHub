import { expect } from "@playwright/test"

export class Home {
    constructor(page) {
        this.page = page

        this.hdrLrnByDoing = page.getByRole('heading', { name: 'Learn By Doing' })
        this.figFounder = page.getByRole('figure', { name: 'Saurabh Dhingra, Founder' })
// Home Nav Buttons
        this.btnAlertHandling = page.locator('#genesis-content').getByRole('link', { name: 'Alert Handling' })
        this.btnFormElement = page.locator('#genesis-content').getByRole('link', { name: 'Form Element' })
        this.btnFileDownload = page.locator('#genesis-content').getByRole('link', { name: 'File Download' })
        this.btnWindowHandling = page.locator('#genesis-content').getByRole('link', { name: 'Window Handling' })
        this.btnDragDrop = page.locator('#genesis-content').getByRole('link', { name: 'Drag and Drop' })
        this.btnAccordion = page.locator('#genesis-content').getByRole('link', { name: 'Accordion' })
        this.btnDatePicker = page.locator('#genesis-content').getByRole('link', { name: 'Date-Picker' })
        this.btnAutoComplete = page.locator('#genesis-content').getByRole('link', { name: 'Auto-Complete' })
        this.btnSelectable = page.locator('#genesis-content').getByRole('link', { name: 'Selectable' })
    }

    confirmHomePage = async () => {
        await this.page.goto('/')
        await expect(this.hdrLrnByDoing).toBeVisible()
        await expect(this.figFounder).toBeVisible()
    } 

    homeToFormElement = async () => {
        await this.page.goto('/')
        await this.btnFormElement.waitFor()
        await this.btnFormElement.click()
        await expect(this.page).toHaveURL('./form-elements/')
    }

    homeToFileDownload = async () => {
        await this.page.goto('/')
        await this.btnFileDownload.waitFor()
        await this.btnFileDownload.click()
        await expect(this.page).toHaveURL('./file-download/')
    }

    homeToWindowHandling = async () => {
        await this.page.goto('/')
        await this.btnWindowHandling.waitFor()
        await this.btnWindowHandling.click()
        await expect(this.page).toHaveURL('./window-handling/')
    }

    homeToAlertHandling = async () => {
        await this.page.goto('/')
        await this.btnAlertHandling.waitFor()
        await this.btnAlertHandling.click()
        await expect(this.page).toHaveURL('./alert-handling/')
    }

    homeToDragAndDrop = async () => {
        await this.page.goto('/')
        await this.btnDragDrop.waitFor()
        await this.btnDragDrop.click()
        await expect(this.page).toHaveURL('./drag-and-drop/')
    }

    homeToAccordion = async () => {
        await this.page.goto('/')
        await this.btnAccordion.waitFor()
        await this.btnAccordion.click()
        await expect(this.page).toHaveURL('./accordion/')
    }

    homeToDatePicker = async () => {
        await this.page.goto('/')
        await this.btnDatePicker.waitFor()
        await this.btnDatePicker.click() 
        await expect(this.page).toHaveURL('./date-picker/')
    }

    homeToAutoComplete = async () => {
        await this.page.goto('/')
        await this.btnAutoComplete.waitFor()
        await this.btnAutoComplete.click()
        await expect(this.page).toHaveURL('./auto-complete/')
    }

    homeToSelectable = async () => {
        await this.page.goto('/')
        await this.btnSelectable.waitFor()
        await this.btnSelectable.click()
        await expect(this.page).toHaveURL('./selectable/')
    }
}