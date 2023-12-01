import { expect } from "@playwright/test"

export class AlertHandling {
    constructor(page) {
        this.page = page

        //Buttons
        this.btnNormalAlert = page.locator('#NormalAlert')
        this.btnCustomAlert = page.locator('#CustomAlert')
        this.btnPromptAlert = page.locator('#PromptAlert')

        //Text - hdr=header | txt=text
        this.hdrAlertHandling = page.getByRole('heading', { name: 'Alert Handling' })
        this.txtNormalAlert = page.getByText('Click the button below to display an alert box', { exact: true })
        this.txtCustomAlert = page.getByText('Click the button below to display an alert box with confirmation button')
        this.txtPromptAlert = page.getByText('Click the button below to display an alert box to enter text')
    }

    normalAlerts = async () => {
        await expect(this.page).toHaveURL('./alert-handling/')

        await this.btnNormalAlert.waitFor()
        await expect(this.txtNormalAlert).toBeVisible()
        
        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
        await this.btnNormalAlert.click()
    }

    customAlertsConfirm = async () => {
        await expect(this.page).toHaveURL('./alert-handling/')

        await this.btnCustomAlert.waitFor()
        await expect(this.txtCustomAlert).toBeVisible()

        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.accept().catch(() => {});
          });
        await this.btnCustomAlert.click()
    }

    customAlertsDismiss = async () => {
        await expect(this.page).toHaveURL('./alert-handling/')

        await this.btnCustomAlert.waitFor()
        await expect(this.txtCustomAlert).toBeVisible()

        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss().catch(() => {});
          });
        await this.btnCustomAlert.click()
    }

    promptAlertsConfirm = async () => {
        await expect(this.page).toHaveURL('./alert-handling/')

        await this.btnPromptAlert.waitFor()
        await expect(this.txtPromptAlert).toBeVisible()

        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.accept('Mako Tsunami')//.catch(() => {});
          });
        await this.btnPromptAlert.click();
        await expect(this.page.getByText('Hello Mako Tsunami! Happy')).toBeVisible()
    }

    promptAlertsDismiss = async () => {
        await this.page.reload()
        await expect(this.page).toHaveURL('./alert-handling/')

        await this.btnPromptAlert.waitFor()
        await expect(this.txtPromptAlert).toBeVisible()

        this.page.once('dialog', dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            dialog.dismiss()//.catch(() => {});
          });
        await this.btnPromptAlert.click();
        await expect(this.page.getByText('Hello Mako Tsunami! Happy')).not.toBeVisible()
    }
}