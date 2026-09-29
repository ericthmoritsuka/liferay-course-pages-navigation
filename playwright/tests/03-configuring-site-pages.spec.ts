/**
 * Configuring Site Pages
 *
 * Generated from courses/latest/en/mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages.md.
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

test('Configuring Site Pages', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. While in the Pages application, click *Actions* (![icon-actions.png](../../images/icon-actions.png)) for the C
	await test.step('Step 1. While in the Pages application, click *Actions* (![icon-actions.png](../../images/icon-actions.png)) for the C', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/07.png']);
		await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');
		await press(page, 'Actions', 'Contact Us', 'actions');
		await press(page, 'Configure');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/07.png'});
	});

	// Step 2. In the General tab, set the Friendly URL to `/contact`.
	await test.step('Step 2. In the General tab, set the Friendly URL to `/contact`.', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/08.png']);
		await fill(page, 'Friendly URL', '/contact');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/08.png'});
	});

	// Step 3. Scroll down and click *Save*.
	await test.step('Step 3. Scroll down and click *Save*.', async () => {
		await press(page, 'Save');
	});

	// Step 4. Go to the *SEO* tab and enter this value for Description:
	await test.step('Step 4. Go to the *SEO* tab and enter this value for Description:', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/09.png']);
		await press(page, 'SEO');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages/images/09.png'});
	});

	// Step 5. Click *Save*.
	await test.step('Step 5. Click *Save*.', async () => {
		await press(page, 'Save');
	});

});
