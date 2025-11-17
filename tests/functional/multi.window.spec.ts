import { test, expect } from "@playwright/test";

test.describe("Multiple Windows flow", () => {
  test("Open multiple windows and verify headers, then return to main", async ({ page }) => {
    // 1) Navega al sitio principal
    await page.goto("https://the-internet.herokuapp.com");

    // 2) Click en "Multiple Windows"
    await page.getByRole("link", { name: "Multiple Windows" }).click();
    await expect(page).toHaveURL(/.*\/windows$/);

    // 3) Abrir la primera nueva ventana y verificar encabezado
    const [firstPopup] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Click Here" }).click(),
    ]);
    await firstPopup.waitForLoadState();
    await expect(firstPopup.locator("h3")).toHaveText("New Window");

    // NOTA: La página "New Window" no contiene enlace adicional.
    // Para simular un segundo flujo de ventana, abrimos otra desde la ventana principal.

    // 4) Volver a la ventana principal y abrir una segunda nueva ventana
    const [secondPopup] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Click Here" }).click(),
    ]);
    await secondPopup.waitForLoadState();
    await expect(secondPopup.locator("h3")).toHaveText("New Window");

    // 5) Regresar a la ventana principal y comprobar seguimos en la página de Multiple Windows
    await expect(page.locator("h3")).toContainText("Opening a new window");

    // Cierre opcional de popups para liberar recursos
    await firstPopup.close();
    await secondPopup.close(); 
  });
});
