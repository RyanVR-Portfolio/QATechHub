export class AlertHandling {
    constructor(page) {
        this.page = page

        //Buttons
        this.btnNormalAlert = locator('#NormalAlert')
        this.btnCustomAlert = locator('#CustomAlert')
        this.btnPromptAlert = locator('#PromptAlert')

        //Text - hdr=header | txt=text
        this.hdrAlertHandling = getByRole('heading', { name: 'Alert Handling' })
        this.txtNormalAlert = getByText('Click the button below to display an alert box', { exact: true })
        this.txtCustomAlert = getByText('Click the button below to display an alert box with confirmation button')
        this.txtPromptAlert = getByText('Click the button below to display an alert box to enter text')
    }
}