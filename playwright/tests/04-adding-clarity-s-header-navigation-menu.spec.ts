/**
 * Adding Clarity's Header Navigation Menu
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

test('Adding Clarity\'s Header Navigation Menu', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in as Walter Douglas.
	// Not performed: no control or value named in this step.
	await test.step.skip('Step 1. Sign in as Walter Douglas. - not performed: no control or value named in this step', async () => {});

	// Step 2. Open the *Site Menu* (![Liferay's Product Menu](../../images/icon-product-menu.png)), expand *Site Builder*, a
	await test.step('Step 2. Open the *Site Menu* (![Liferay\'s Product Menu](../../images/icon-product-menu.png)), expand *Site Builder*, a', async () => {
		await openMenu(page, 'Site Menu', 'Site Builder', 'Navigation Menus');
	});

	// Step 3. Click *New*.
	await test.step('Step 3. Click *New*.', async () => {
		await press(page, 'New');
	});

	// Step 4. For Name, enter `Header Page Menu` and click *Save*.
	await test.step('Step 4. For Name, enter `Header Page Menu` and click *Save*.', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/01.png']);
		await fill(page, 'Name', 'Header Page Menu');
		await press(page, 'Save');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/01.png'});
	});

	// Step 5. Click *Add*.
	await test.step('Step 5. Click *Add*.', async () => {
		await press(page, 'Add');
	});

	// Step 6. Select the *Page* item type.
	await test.step('Step 6. Select the *Page* item type.', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/02.png']);
		await press(page, 'Page');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/02.png'});
	});

	// Step 7. Check these pages and click *Select*:
	await test.step('Step 7. Check these pages and click *Select*:', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/03.png']);
		await toggle(page, 'About Us', true);
		await toggle(page, 'Blog', true);
		await toggle(page, 'Careers', true);
		await toggle(page, 'Contact Us', true);
		await toggle(page, 'FAQ', true);
		await toggle(page, 'Products', true);
		await press(page, 'Select');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/03.png'});
	});

	// Step 8. Drag and drop the pages into this order:
	await test.step('Step 8. Drag and drop the pages into this order:', async () => {
		await reorderMenu(page, ['Products', 'About Us', 'Blog', 'FAQ', 'Careers', 'Contact Us']);
	});

});
