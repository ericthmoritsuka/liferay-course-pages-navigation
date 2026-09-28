/**
 * Adding Clarity's Footer Navigation Menus
 *
 * Generated from courses/latest/en/mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {attach, closeModal, download, enableSomeOptions, fill, goHome, openMenu, openPageEditor, openPageSettings, press, pressKeys, reload, toggle, transfer, verifyHead, visitAsGuest, visitInNewBrowser, waitForReindex} from '../helpers/liferay';
import {CAPTURE, armCapture, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Adding Clarity\'s Footer Navigation Menus', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Return to the *Navigation Menus* overview page.
	// Not performed: no control or value named in this step.
	await test.step.skip('Step 1. Return to the *Navigation Menus* overview page. - not performed: no control or value named in this step', async () => {});

	// Step 2. Create a new menu named `Footer About Us Menu`.
	await test.step('Step 2. Create a new menu named `Footer About Us Menu`.', async () => {
		await fill(page, 'Name', 'Footer About Us Menu');
	});

	// Step 3. Add these pages:
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 3. Add these pages: - not performed: no control or value named in this step', async () => {});

	// Step 4. For the first About Us page item, click *Actions* (![](../../images/icon-actions.png)) and select *View Info* 
	await test.step('Step 4. For the first About Us page item, click *Actions* (![](../../images/icon-actions.png)) and select *View Info*', async () => {
		await press(page, 'Actions', undefined, 'actions');
		await press(page, 'View Info', undefined, 'information');
	});

	// Step 5. Check *Use Custom Name*, enter `Leadership` for Name, and click *Save*.
	await test.step('Step 5. Check *Use Custom Name*, enter `Leadership` for Name, and click *Save*.', async () => {
		await press(page, 'Use Custom Name');
		await fill(page, 'Name', 'Leadership');
		await press(page, 'Save');
	});

	// Step 6. Repeat steps 4-5 for the second About Us item and rename it `Our Impact`.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 6. Repeat steps 4-5 for the second About Us item and rename it `Our Impact`. - not performed: no control or value named in this step', async () => {});

	// Step 7. Return to the *Navigation Menus* overview page and create a new menu named `Footer Legal Menu`.
	await test.step('Step 7. Return to the *Navigation Menus* overview page and create a new menu named `Footer Legal Menu`.', async () => {
		await fill(page, 'Name', 'Footer Legal Menu');
	});

	// Step 8. Click *Add* and select the *Web Content Article* item type.
	await test.step('Step 8. Click *Add* and select the *Web Content Article* item type.', async () => {
		await press(page, 'Add');
		await press(page, 'Web Content Article');
	});

	// Step 9. Click *Sites and Libraries* in the breadcrumb menu, go to the *Asset Library* tab, and select the *Legal* libr
	await test.step('Step 9. Click *Sites and Libraries* in the breadcrumb menu, go to the *Asset Library* tab, and select the *Legal* libr', async () => {
		await press(page, 'Sites and Libraries');
		await press(page, 'Asset Library');
		await press(page, 'Legal');
	});

	// Step 10. Select the *Cookie Policy* web content article.
	await test.step('Step 10. Select the *Cookie Policy* web content article.', async () => {
		await press(page, 'Cookie Policy');
	});

	// Step 11. Repeat steps 8-10 to add the remaining articles in the Legal asset library:
	// Not performed: no control or value named in this step.
	await test.step.skip('Step 11. Repeat steps 8-10 to add the remaining articles in the Legal asset library: - not performed: no control or value named in this step', async () => {});

	// Step 12. Return to the *Navigation Menus* overview page and create these menus:
	// Not entered: Footer Get In Touch Menu, Footer Products Menu, Footer Resources Menu - chosen from a control rather than typed.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 12. Return to the *Navigation Menus* overview page and create these menus: - not performed', async () => {});

});
