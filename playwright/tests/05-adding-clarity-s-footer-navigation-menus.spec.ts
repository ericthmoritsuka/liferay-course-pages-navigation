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

import {addComponent, attach, choose, closeModal, download, enableSomeOptions, fill, fragmentOption, goHome, openFromPageTree, openMenu, openPageEditor, openPageSettings, press, pressKeys, reload, reorderMenu, selectInEditor, toggle, transfer, verifyHead, visitAsGuest, visitInNewBrowser, waitForReindex} from '../helpers/liferay';
import {CAPTURE, armCapture, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Adding Clarity\'s Footer Navigation Menus', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Return to the *Navigation Menus* overview page.
	await test.step('Step 1. Return to the *Navigation Menus* overview page.', async () => {
		await openMenu(page, 'Site Menu', 'Site Builder', 'Navigation Menus');
	});

	// Step 2. Create a new menu named `Footer About Us Menu`.
	await test.step('Step 2. Create a new menu named `Footer About Us Menu`.', async () => {
		await press(page, 'New');
		await fill(page, 'Name', 'Footer About Us Menu');
		await press(page, 'Save');
	});

	// Step 3. Add these pages:
	await test.step('Step 3. Add these pages:', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/04.png']);
		await press(page, 'Add');
		await press(page, 'Page');
		await toggle(page, 'About Us', true);
		await toggle(page, 'Careers', true);
		await press(page, 'Select');
		await press(page, 'Add');
		await press(page, 'Page');
		await toggle(page, 'About Us', true);
		await press(page, 'Select');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/04.png'});
	});

	// Step 4. For the first About Us page item, click *Actions* (![](../../images/icon-actions.png)) and select *View Info* 
	await test.step('Step 4. For the first About Us page item, click *Actions* (![](../../images/icon-actions.png)) and select *View Info*', async () => {
		await press(page, 'Actions', 'first About Us', 'actions');
		await press(page, 'View Info', undefined, 'information');
	});

	// Step 5. Check *Use Custom Name*, enter `Leadership` for Name, and click *Save*.
	await test.step('Step 5. Check *Use Custom Name*, enter `Leadership` for Name, and click *Save*.', async () => {
		await toggle(page, 'Use Custom Name', true);
		await fill(page, 'Name', 'Leadership');
		await press(page, 'Save');
	});

	// Step 6. Repeat steps 4-5 for the second About Us item and rename it `Our Impact`.
	await test.step('Step 6. Repeat steps 4-5 - Our Impact', async () => {
		await press(page, 'Actions', 'first About Us', 'actions');
		await press(page, 'View Info', undefined, 'information');
		await toggle(page, 'Use Custom Name', true);
		await fill(page, 'Name', 'Our Impact');
		await press(page, 'Save');
	});

	// Step 7. Return to the *Navigation Menus* overview page and create a new menu named `Footer Legal Menu`.
	await test.step('Step 7. Return to the *Navigation Menus* overview page and create a new menu named `Footer Legal Menu`.', async () => {
		await openMenu(page, 'Site Menu', 'Site Builder', 'Navigation Menus');
		await press(page, 'New');
		await fill(page, 'Name', 'Footer Legal Menu');
		await press(page, 'Save');
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
	await test.step('Step 11. Repeat steps 8-10 - Terms of use', async () => {
		await press(page, 'Add');
		await press(page, 'Web Content Article');
		await press(page, 'Sites and Libraries');
		await press(page, 'Asset Library');
		await press(page, 'Legal');
		await press(page, 'Terms of use');
	});

	await test.step('Step 11. Repeat steps 8-10 - Privacy Policy', async () => {
		await press(page, 'Add');
		await press(page, 'Web Content Article');
		await press(page, 'Sites and Libraries');
		await press(page, 'Asset Library');
		await press(page, 'Legal');
		await press(page, 'Privacy Policy');
	});

	// Step 12. Return to the *Navigation Menus* overview page and create these menus:
	await test.step('Step 12. Return to the *Navigation Menus* overview page and create these menus:', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/06.png']);
		await openMenu(page, 'Site Menu', 'Site Builder', 'Navigation Menus');
		// Not performed: creating each listed item, with its contents, is not supported yet.

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/06.png'});
	});

});
