import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'button-component',
  styleUrl: 'button-component.css',
  shadow: true,
})
export class ButtonComponent {

  @Prop() type: string = 'primary';
  @Prop() text: string = 'Klik hier';

  @Event() todoCompleted: EventEmitter<string>;

  buttonClick() {
    this.todoCompleted.emit();
  }

  render() {
    return (
      <Host>
        <button
          type="submit"
          onClick={() => this.buttonClick()}
          class={'button_' + this.type}>
          {this.text}
        </button>
      </Host>
    );
  }

}
