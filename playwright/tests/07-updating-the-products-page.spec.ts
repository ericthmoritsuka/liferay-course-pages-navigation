/**
 * Updating the Products Page
 *
 * Generated from courses/latest/en/mastering-liferay-pages-and-navigation/05-site-navigation/05-using-categories-to-navigate-claritys-product-pages.md.
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

test('Updating the Products Page', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Sign in as Walter Douglas.
	// Not performed: no control or value named in this step.
	await test.step.skip('Step 1. Sign in as Walter Douglas. - not performed: no control or value named in this step', async () => {});

	// Step 2. Go to the *Products* page and begin editing it (![](../../images/icon-edit.png)).
	await test.step('Step 2. Go to the *Products* page and begin editing it (![](../../images/icon-edit.png)).', async () => {
		await press(page, 'Products');
	});

	// Step 3. Open the *Components* panel (![Fragments and Widgets panel](../../images/icon-plus.png)).
	await test.step('Step 3. Open the *Components* panel (![Fragments and Widgets panel](../../images/icon-plus.png)).', async () => {
		await press(page, 'Components');
	});

	// Step 4. In the Fragments tab, drag and drop a *Container* fragment into the page's drop zone.
	// Not performed: no control or value named in this step.
	await test.step.skip('Step 4. In the Fragments tab, drag and drop a *Container* fragment into the page\'s drop zone. - not performed: no control or value named in this step', async () => {});

	// Step 5. Go to the *Widgets* tab.
	await test.step('Step 5. Go to the *Widgets* tab.', async () => {
		await press(page, 'Widgets');
	});

	// Step 6. Drag and drop the *Commerce Categories Navigation* widget into the new container.
	// Not performed: no control or value named in this step.
	await test.step.skip('Step 6. Drag and drop the *Commerce Categories Navigation* widget into the new container. - not performed: no control or value named in this step', async () => {});

	// Step 7. Select the *Commerce Categories Navigation* widget, click *Actions* (![](../../images/icon-actions.png)) for t
	await test.step('Step 7. Select the *Commerce Categories Navigation* widget, click *Actions* (![](../../images/icon-actions.png)) for t', async () => {
		await press(page, 'Commerce Categories Navigation');
		await press(page, 'Actions', 'widget', 'actions');
		await press(page, 'Configuration');
	});

	// Step 8. Configure these settings:
	// Not entered: Display Template, Vocabulary - chosen from a control rather than typed.
	await test.step.skip('Step 8. Configure these settings: - not performed', async () => {});

	// Step 9. Click *Save* and close the window.
	await test.step('Step 9. Click *Save* and close the window.', async () => {
		await press(page, 'Save');
		await closeModal(page);
	});

	// Step 10. Click *Publish* to view the page.
	await test.step('Step 10. Click *Publish* to view the page.', async () => {
		await armCapture(page, ['mastering-liferay-pages-and-navigation/05-site-navigation/05-using-categories-to-navigate-claritys-product-pages/images/01.png']);
		await press(page, 'Publish');

		await capture(page, {name: 'mastering-liferay-pages-and-navigation/05-site-navigation/05-using-categories-to-navigate-claritys-product-pages/images/01.png'});
	});

});
