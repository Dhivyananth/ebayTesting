// @ts-check
const { test, expect } = require('@playwright/test');


test('Get started link', async ({page}) => {

  await page.goto('https://ebay.com/');

  await expect(page.getByRole('button',{name: 'Search'})).toBeVisible();

 
})


test('Search wallet', async ({page}) => {

  await page.goto('https://ebay.com/');

  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('wallet');
  await page.getByRole('button', {name:'Search'}).click();

  await expect  (page.getByAltText('Mens RFID Blocking Soft')).toBeVisible();

})


test('Main product page redirection', async ({page}) => {

  await page.goto('https://ebay.com/');

  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('wallet');
  await page.getByRole('button', {name:'Search'}).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByAltText('Mens RFID Blocking Soft').click();
  const page1 = await page1Promise;

  await expect (page.getByAltText('Mens RFID Blocking Soft Smooth Genuine Leather Wallet with a Security button')).toBeVisible();


})

test('Similar items blocks verification', async ({page}) => {

  await page.goto('https://ebay.com/');

  await page.getByPlaceholder('Search for anything').click();
  await page.getByPlaceholder('Search for anything').fill('wallet');
  await page.getByRole('button', {name:'Search'}).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByAltText('Mens RFID Blocking Soft').click();
  const page1 = await page1Promise;

  //await expect (page.getByRole('heading', { name: 'Similar items' })).toBeVisible();

  await expect.soft(page.getByRole('heading', { name: 'Similar items' })).toBeVisible();

  
})



