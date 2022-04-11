import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core';
import { TodoItem } from '../../../model/todo';

@Component({
  tag: 'card-component',
  styleUrl: 'card-component.css',
  shadow: true,
})
export class CardComponent {

  @Prop() item: TodoItem;
  @Prop() index: number;
  @Prop() removeable: boolean = false;

  @State() loading: boolean = true;

  @Event() removeTodo: EventEmitter<number>;

  componentWillLoad() {
    setTimeout(() => this.loading = false, 1000);
  }

  removeItem(index: number) {
    this.removeTodo.emit(index);
  }

  render() {
    return (
      <Host>
        {this.loading &&
          <div class="lds-dual-ring"></div>
        }
        {!this.loading &&
          <div
            class={{
              'card removeable': !this.removeable,
              'card editable': this.removeable
            }}>
            {this.item}
            {this.removeable &&
              <a
                onClick={() => this.removeItem(this.index)}
              >Remove todo</a>
            }
          </div>
        }
      </Host>
    );
  }

}
