import { test } from "@playwright/test";
import { expect } from "@playwright/test";
import { Navigation } from "../page-objects/Navigation";
import { Home } from "../page-objects/HomePage";
import { AlertHandling } from "../page-objects/AlertHandlingPage"; 
import { FormElements } from "../page-objects/FormElementsPage";

// Tests will be listed in a workflow format to start, 
// and will then be separated out into specific cases after 
// they have been shown to work properly

test ('Tests for top bar navigation and verification, no page behavior', async ({ page }) => {
  const nav = new Navigation(page)
  await nav.navToHomeViaTitleBtn()
  await nav.navToHomeViaHomeLink()
  
  await nav.navToFormElements()
  await nav.navToFileDownload()
  
  await nav.navToAlertHandling()
  await nav.navToWindowHandling()
  
  await nav.navToAccordion()
  await nav.navToAutoComplete()
  
  await nav.navToDatePicker()
  await nav.navToSelectable()
  await nav.navToDragAndDrop()
});

test ('Tests for Home page navigation and verification', async ({ page }) => {
  const home = new Home(page)
  await home.confirmHomePage()

  await home.homeToAccordion()
  await home.homeToAlertHandling()
  await home.homeToAutoComplete()
  await home.homeToDatePicker()
  await home.homeToDragAndDrop()
  await home.homeToFileDownload()
  await home.homeToFormElement()
  await home.homeToSelectable()
  await home.homeToWindowHandling()
});

test ('Tests for Alert Handling', async ({ page }) => {
  const alert = new AlertHandling(page)
  const nav = new Navigation(page)
  await nav.navToAlertHandling()
  await alert.normalAlerts()
  await alert.customAlertsConfirm()
  await alert.promptAlertsConfirm()
  await alert.promptAlertsDismiss()
});

test ('Tests for Form Elements', async ({ page }) => {
  const forms = new FormElements(page)
  const nav = new Navigation(page)
  await nav.navToFormElements()
  await forms.fillName()
  await forms.fillEmail()
  await forms.fillPhoneNum()
  await forms.selectMaleGender()
  await forms.selectFemaleGender()
  await forms.selectDropdownOptions()
  await forms.submitFormElements()
});