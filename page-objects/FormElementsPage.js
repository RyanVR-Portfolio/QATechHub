import { expect } from "@playwright/test";

export class FormElements {
    constructor(page) {
        this.page = page

        this.hdrFormElements = page.getByRole('heading', { name: 'Form Elements' })
        
        this.hdrName = page.getByText('Name *')
        this.fldFirstName = page.getByLabel('Name *')
        this.fldLastName = page.getByLabel('Last')
        this.txtFirstName = page.getByText('First')
        this.txtLastName = page.getByText('Last')

        this.hdrEmail = page.getByText('Email *')
        this.fldEmail = page.getByLabel('Email *')

        this.hdrPhoneNum = page.getByText('Phone Number *')
        this.fldPhoneNum = page.getByLabel('Phone Number *') // Has arrow up/down. Have to figure that out. Can use keyboard input up and down arrows for now
        
        this.hdrGender = page.getByText('Gender *')
        this.ckbxMale = page.getByLabel('Male', { exact: true })        
        this.cktxtMale = page.getByText('Male', { exact: true })        
        this.ckbxFemale = page.getByLabel('Female', { exact: true })        
        this.cktxtFemale = page.getByText('Female', { exact: true })

        this.hdrCourseInterest = page.getByText('Courses Interested In *')
        this.drpCourseInterest = page.getByLabel('Courses Interested In *') //Options: Selenium | Cypress | TestComplete
    }

    fillName = async () => {
        await expect(this.page).toHaveURL('./form-elements/')
        
        await this.hdrName.waitFor()
        await expect(this.hdrName).toBeVisible()

        await this.fldFirstName.fill('Mako')
        await this.fldLastName.fill('Tsunami')
    }

    fillEmail = async () => {
        await expect(this.page).toHaveURL('./form-elements/')

        await this.hdrEmail.waitFor()
        await expect(this.hdrEmail).toBeVisible()

        await this.fldEmail.fill('makotsunami@example.com')
    }

    fillPhoneNum = async () => {
        await expect(this.page).toHaveURL('./form-elements/')

        await this.hdrPhoneNum.waitFor()
        await expect(this.hdrPhoneNum).toBeVisible()

        await this.fldPhoneNum.fill('5554443333')
    }

    selectMaleGender = async () => {
        await expect(this.page).toHaveURL('./form-elements/')

        await this.hdrGender.waitFor()
        await expect(this.hdrGender).toBeVisible()

        await this.ckbxMale.setChecked(true)
        await this.ckbxFemale.setChecked(false)

    }

    selectFemaleGender = async () => {
        await expect(this.page).toHaveURL('./form-elements/')

        await this.hdrGender.waitFor()
        await expect(this.hdrGender).toBeVisible()

        await this.ckbxMale.setChecked(false)
        await this.ckbxFemale.setChecked(true)
    }
// Gender selection will be changed to loop in future update

// Dropdown selection will also be looped in future
    selectDropdownOptions = async () => {
        await expect(this.page).toHaveURL('./form-elements/')

        await this.hdrCourseInterest.waitFor()
        await expect(this.hdrCourseInterest).toBeVisible()
    }
}