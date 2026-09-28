/**
 * Updating the Product List Page
 *
 * Generated from courses/latest/en/mastering-liferay-pages-and-navigation/05-site-navigation/05-using-categories-to-navigate-claritys-product-pages.md.
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

test('Updating the Product List Page', async ({page}) => {
	await signIn(page, 'walter');

	// Step 1. Open the *Site Menu* (![](../../images/icon-product-menu.png)), click *Page Tree* (![icon-pages-tree.png](../.
	// Not performed: moving through the page tree is not supported yet.
	await test.step.skip('Step 1. Open the *Site Menu* (![](../../images/icon-product-menu.png)), click *Page Tree* (![icon-pages-tree.png](../. - not performed: moving through the page tree is not supported yet', async () => {});

	// Step 2. Click *Edit* (![](../../images/icon-edit.png)) to start editing the page.
	await test.step('Step 2. Click *Edit* (![](../../images/icon-edit.png)) to start editing the page.', async () => {
		await press(page, 'Edit', undefined, 'edit');
	});

	// Step 3. From the Components panel, drag and drop the *Product Lists Page* fragment composition into the page's drop zo
	await test.step('Step 3. From the Components panel, drag and drop the *Product Lists Page* fragment composition into the page\'s drop zo', async () => {
		await addComponent(page, 'Product Lists Page');
	});

	// Step 4. Select the *Search Results* widget, click *Actions* (![](../../images/icon-actions.png)) for the widget, and s
	await test.step('Step 4. Select the *Search Results* widget, click *Actions* (![](../../images/icon-actions.png)) for the widget, and s', async () => {
		await press(page, 'Search Results');
		await press(page, 'Actions', 'widget', 'actions');
		await press(page, 'Configuration');
	});

	// Step 5. For Render Selection, select *Use Application Display Template*.
	await test.step('Step 5. For Render Selection, select *Use Application Display Template*.', async () => {
		await press(page, 'Use Application Display Template');
	});

	// Step 6. For *Display Template*, select *Clarity Search Results Cards*.
	await test.step('Step 6. For *Display Template*, select *Clarity Search Results Cards*.', async () => {
		await press(page, 'Clarity Search Results Cards');
	});

	// Step 7. Click *Save* and close the window.
	await test.step('Step 7. Click *Save* and close the window.', async () => {
		await press(page, 'Save');
		await closeModal(page);
	});

	// Step 8. Drag and drop a *Category Content* widget just above the Search Results container.
	// Not performed: placing *Category Content* just above the search results container needs a drop at a position this cannot address yet.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 8. Drag and drop a *Category Content* widget just above the Search Results container. - not performed: placing *Category Content* just above the search results container needs a drop at a position this cannot address yet', async () => {});

	// Step 9. Click *Publish*.
	await test.step('Step 9. Click *Publish*.', async () => {
		await press(page, 'Publish');
	});

	// Step 10. Return to the *Products* page and click one of the category cards (e.g. *Sunglasses*).
	await test.step('Step 10. Return to the *Products* page and click one of the category cards (e.g. *Sunglasses*).', async () => {
		await press(page, 'Sunglasses');
	});

	// Step 11. Verify the products displayed are related to the selected category.
	// Not performed: no control or value named in this step.
	await test.step.skip('Step 11. Verify the products displayed are related to the selected category. - not performed: no control or value named in this step', async () => {});

});
