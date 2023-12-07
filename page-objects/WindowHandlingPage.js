import { expect } from "@playwright/test"

export class WindowHandling {
    constructor(page) {
        this.page = page

        this.hdrWindowHandling = page.getByRole('heading', { name: 'Window Handling' })
        this.txtClickToOpen = page.getByText('Click on below button to open')
        this.btnWindowHandling = page.getByRole('link', { name: 'Click Here' })
    }

    openWindowHandling = async() => {
        await expect(this.hdrWindowHandling).toBeVisible()
        await expect(this.txtClickToOpen).toBeVisible()

        const page1Promise = this.page.waitForEvent('popup');
        await this.btnWindowHandling.click()
        const page1 = await page1Promise;

        await expect(page1).toHaveURL('https://qatechhub.com/')
    }    
}