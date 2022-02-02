import { newE2EPage } from '@stencil/core/testing';

describe('jok-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<jok-card></jok-card>');

    const element = await page.find('jok-card');
    expect(element).toHaveClass('hydrated');
  });
});
