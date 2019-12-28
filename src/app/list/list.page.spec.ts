import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { render, RenderResult } from '@testing-library/angular';
import { ListPage } from './list.page';

describe('ListPage', () => {
  let component: RenderResult<ListPage>;

  beforeEach(async () => {
    component = await render(ListPage, {
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });
  });

  it('should create', () => {
    expect(component.container).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    const items = component.container.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });
});
