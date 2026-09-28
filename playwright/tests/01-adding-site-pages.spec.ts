/**
 * Adding Site Pages
 *
 * Generated from courses/latest/en/mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages.md.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {addComponent, attach, closeModal, download, enableSomeOptions, fill, goHome, openMenu, openPageEditor, openPageSettings, press, pressKeys, reload, toggle, transfer, verifyHead, visitAsGuest, visitInNewBrowser, waitForReindex} from '../helpers/liferay';
import {CAPTURE, armCapture, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Adding Site Pages', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in as Walter Douglas.
	// Not performed: no control or value named in this step.
	await test.step.skip('Step 1. Sign in as Walter Douglas. - not performed: no control or value named in this step', async () => {});

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.
	await test.step('Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.', async () => {
		await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');
	});

	// Step 3. In the Static Pages tab, click *New*.
	await test.step('Step 3. In the Static Pages tab, click *New*.', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/02.png']);
		await press(page, 'New');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/02.png'});
	});

	// Step 4. Select the *Primary Master Page* template.
	await test.step('Step 4. Select the *Primary Master Page* template.', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/03.png']);
		await press(page, 'Primary Master Page');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/03.png'});
	});

	// Step 5. Enter `Products` for Name and click *Add*.
	await test.step('Step 5. Enter `Products` for Name and click *Add*.', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/04.png']);
		await fill(page, 'Name', 'Products');
		await press(page, 'Add');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/04.png'});
	});

	// Step 6. For now, leave the page blank and click *Publish*.
	await test.step('Step 6. For now, leave the page blank and click *Publish*.', async () => {
		await press(page, 'Publish');
	});

	// Step 7. Repeat steps 3-6 to create these pages:
	await test.step('Step 7. Repeat steps 3-6 - About Us', async () => {
		await press(page, 'New');
		await press(page, 'Primary Master Page');
		await fill(page, 'Name', 'About Us');
		await press(page, 'Add');
		await press(page, 'Publish');
	});

	await test.step('Step 7. Repeat steps 3-6 - Blog', async () => {
		await press(page, 'New');
		await press(page, 'Primary Master Page');
		await fill(page, 'Name', 'Blog');
		await press(page, 'Add');
		await press(page, 'Publish');
	});

	await test.step('Step 7. Repeat steps 3-6 - FAQ', async () => {
		await press(page, 'New');
		await press(page, 'Primary Master Page');
		await fill(page, 'Name', 'FAQ');
		await press(page, 'Add');
		await press(page, 'Publish');
	});

	await test.step('Step 7. Repeat steps 3-6 - Careers', async () => {
		await press(page, 'New');
		await press(page, 'Primary Master Page');
		await fill(page, 'Name', 'Careers');
		await press(page, 'Add');
		await press(page, 'Publish');
	});

	await test.step('Step 7. Repeat steps 3-6 - Contact Us', async () => {
		await press(page, 'New');
		await press(page, 'Primary Master Page');
		await fill(page, 'Name', 'Contact Us');
		await press(page, 'Add');
		await press(page, 'Publish');
	});

});
