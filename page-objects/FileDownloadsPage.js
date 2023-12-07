import { expect } from "@playwright/test";

export class FileDownloads {
    constructor(page) {
        this.page = page

        this.hdrFileDownloads = page.getByRole('heading', { name: 'File Download' })
        this.txtFileDownloads = page.getByText('Click on download button to')
        this.lnkSeleniumCourse = page.getByRole('link', { name: 'Selenium-Training-Course-' })
        this.dwnldSeleniumCourse = page.getByRole('link', { name: 'Download', exact: true })
    }

    viewSeleniumCourse = async () => {
        await expect(this.hdrFileDownloads).toBeVisible()
        await expect(this.txtFileDownloads).toBeVisible()

        const downloadPromise = this.page.waitForEvent('download');
        await this.dwnldSeleniumCourse.click()
        const download = await downloadPromise;
        await download.suggestedFilename()
    }
}