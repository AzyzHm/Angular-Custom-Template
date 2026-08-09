import { render, screen } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';

import { ButtonComponent } from '@shared/components/button/button.component';

describe('ButtonComponent', () => {
  it('renders projected content', async () => {
    await render(ButtonComponent, { template: `<app-button>Click me</app-button>` });

    expect(screen.getByText('Click me')).toBeTruthy();
  });

  it('emits clicked when pressed', async () => {
    const clicked = jest.fn();
    await render(ButtonComponent, {
      template: `<app-button (clicked)="onClicked($event)">Save</app-button>`,
      componentProperties: { clicked } as never,
      componentInputs: {},
      declarations: []
    });

    const user = userEvent.setup();
    await user.click(screen.getByRole('button', { name: 'Save' }));

    expect(screen.getByRole('button')).toBeEnabled();
  });

  it('does not emit clicked when disabled', async () => {
    await render(ButtonComponent, {
      template: `<app-button [disabled]="true">Disabled</app-button>`
    });

    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
  });
});
