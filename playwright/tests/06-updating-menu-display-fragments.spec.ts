/**
 * Updating Menu Display Fragments
 *
 * Generated from courses/latest/en/mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus.md.
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

test('Updating Menu Display Fragments', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Open the *Site Menu* (![Liferay's Product Menu](../../images/icon-product-menu.png)), expand *Design*, and cli
	await test.step('Step 1. Open the *Site Menu* (![Liferay\'s Product Menu](../../images/icon-product-menu.png)), expand *Design*, and cli', async () => {
		await openMenu(page, 'Site Menu', 'Design', 'Page Templates');
	});

	// Step 2. In the Masters tab, click the *Primary Master Page* template to start editing it.
	await test.step('Step 2. In the Masters tab, click the *Primary Master Page* template to start editing it.', async () => {
		await press(page, 'Primary Master Page');
	});

	// Step 3. Select the *Menu Display* fragment in the header.
	await test.step('Step 3. Select the *Menu Display* fragment in the header.', async () => {
		await press(page, 'Menu Display');
	});

	// Step 4. In the configuration side panel, click *Change Source* (![](../../images/icon-change.png)) for the menu's Sour
	await test.step('Step 4. In the configuration side panel, click *Change Source* (![](../../images/icon-change.png)) for the menu\'s Sour', async () => {
		await press(page, 'Change Source', "menu\\'s Source", 'change');
	});

	// Step 5. Click *Header Page Menu* and click *Select This Level*.
	await test.step('Step 5. Click *Header Page Menu* and click *Select This Level*.', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/07.png']);
		await press(page, 'Header Page Menu');
		await press(page, 'Select This Level');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/05-site-navigation/03-implementing-claritys-navigation-menus/images/07.png'});
	});

	// Step 6. Repeat steps 3-5 for each Menu Display fragment under the Page Footer container:
	// Not performed: each row of its table names a different target, which a replay cannot address yet.
	await test.step.skip('Step 6. Repeat steps 3-5 for each Menu Display fragment under the Page Footer container: - not performed: each row of its table names a different target, which a replay cannot address yet', async () => {});

	// Step 7. Click *Publish Master*.
	await test.step('Step 7. Click *Publish Master*.', async () => {
		await press(page, 'Publish Master');
	});

	// Step 8. Repeat this process to update the Secondary Master Page's menu display fragments.
	// Not performed: no control or value named in this step.
	await test.step.skip('Step 8. Repeat this process to update the Secondary Master Page\'s menu display fragments. - not performed: no control or value named in this step', async () => {});

});
