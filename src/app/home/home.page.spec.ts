import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { render, RenderResult } from '@testing-library/angular';
import { HomePage } from './home.page';

describe('Home Page', () => {
  let component: RenderResult<HomePage>;

  beforeEach(async () => {
    component = await render(HomePage, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should create', async () => {
    expect(component.container).toBeTruthy();
  });

  it('should have title', async () => {
    expect(component.getByText('Home')).toBeTruthy();
  });

  it('should have card', async () => {
    expect(component.getByText('Welcome to Ionic')).toBeTruthy();
  });
});
