import { test } from "@playwright/test";
import { expect } from "@playwright/test";
import { Navigation } from "../page-objects/Navigation";
import { Home } from "../page-objects/HomePage";
import { AlertHandling } from "../page-objects/AlertHandlingPage";

test ('navigations', async ({ page }) => {
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
