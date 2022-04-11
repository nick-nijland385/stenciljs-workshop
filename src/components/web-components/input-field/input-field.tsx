import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'input-field',
  styleUrl: 'input-field.css',
  shadow: true,
})
export class InputField {

  @Prop() type: string = 'text';
  @Prop() placeholder: string = 'Voeg toe';
  @Prop({ mutable: true }) value: string;

  @State() inputValidated: boolean = false;

  @Event() inputUpdated: EventEmitter<string>;
  @Event() inputCorrect: EventEmitter<boolean>;

  handleChange(event) {
    this.value = event.target.value;
    if (this.value.length > 5) {
      this.inputCorrect.emit(true);
      this.inputValidated = true;
    } else {
      this.inputCorrect.emit(false);
      this.inputValidated = false;
    }
    this.inputUpdated.emit(this.value);
  }

  render() {
    return (
      <Host>
        {!this.inputValidated &&
          <span class="invalid">Vul meer dan 5 karakters in</span>
        }
        {this.inputValidated &&
          <span class="valid">Input is akkoord!</span>
        }
        <input
          placeholder={this.placeholder}
          type={this.type}
          value={this.value}
          onInput={(event) => this.handleChange(event)}
          class={{
            'invalid': !this.inputValidated,
            'valid': this.inputValidated
          }}
        />
        {this.inputValidated &&
          <span class="icon">✓</span>
        }
      </Host>
    );
  }

}
