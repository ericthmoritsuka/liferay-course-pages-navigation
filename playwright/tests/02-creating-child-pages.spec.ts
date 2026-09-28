/**
 * Creating Child Pages
 *
 * Generated from courses/latest/en/mastering-liferay-pages-and-navigation/04-site-pages/05-adding-claritys-site-pages.md.
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

test('Creating Child Pages', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. While in the Pages application, click *Add Child Page* (![Add Child Page](../../images/icon-plus.png)) for the
	await test.step('Step 1. While in the Pages application, click *Add Child Page* (![Add Child Page](../../images/icon-plus.png)) for the', async () => {
		await press(page, 'Add Child Page', 'Products page', 'plus');
	});

	// Step 2. Select the *Primary Master Page* template.
	await test.step('Step 2. Select the *Primary Master Page* template.', async () => {
		await press(page, 'Primary Master Page');
	});

	// Step 3. Enter `Product List` for Name and click *Save*.
	await test.step('Step 3. Enter `Product List` for Name and click *Save*.', async () => {
		await fill(page, 'Name', 'Product List');
		await press(page, 'Save');
	});

	// Step 4. Leave the page blank and click *Publish*.
	await test.step('Step 4. Leave the page blank and click *Publish*.', async () => {
		await press(page, 'Publish');
	});

	// Step 5. For Products, click the Right Arrow button (![](../../images/icon-caret-right.png)) to display all pages neste
	// Not performed: no control or value named in this step.
	await test.step.skip('Step 5. For Products, click the Right Arrow button (![](../../images/icon-caret-right.png)) to display all pages neste - not performed: no control or value named in this step', async () => {});

	// Step 6. Verify that the Product List page is a child page of Products.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 6. Verify that the Product List page is a child page of Products. - not performed: no control or value named in this step', async () => {});

});
