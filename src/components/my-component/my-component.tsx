import { Component, h, Host, Listen, State } from '@stencil/core';
import { TodoItem } from '../../model/todo';
import state from '../../store';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @State() value: string;
  @State() todos: TodoItem[] = [];
  @State() todosDone: TodoItem[] = [];
  @State() inputValidated: boolean;

  @Listen('todoCompleted')
  todoCompletedHandler() {
    this.addToDo(this.value);
    this.inputValidated = false;
  }

  @Listen('inputUpdated')
  inputUpdatedHandler(event: CustomEvent<string>) {
    this.value = event.detail;
  }

  @Listen('inputCorrect')
  inputCorrectHandler(event: CustomEvent<boolean>) {
    this.inputValidated = event.detail;
  }

  @Listen('removeTodo')
  removeItemHandler(event: CustomEvent<number>) {
    state.doneLength++;
    state.todoLength--;

    this.todosDone.push(this.todos[event.detail]);
    this.todosDone = [
      ...this.todosDone
    ];

    this.todos.splice(event.detail, 1);
    this.todos = [
      ...this.todos
    ];

  }

  addToDo(todo) {
    state.todoLength++;
    this.todos.push(todo);
    this.todos = [
      ...this.todos
    ];
    this.value = null;
  }

  render() {
    return (
      <Host>
        <form>
          <input-field value={this.value} />
          {this.inputValidated &&
            <button-component />
          }
        </form >
        {this.todos.length > 0 &&
          <h3>Te doen ({state.todoLength})</h3>
        }
        {this.todos.map((todo, index) =>
          <card-component item={todo} index={index} removeable={true} />
        )}
        {this.todosDone.length > 0 &&
          <h3>Klaar ✓ ({state.doneLength})</h3>
        }
        {this.todosDone.map((todo, index) =>
          <card-component item={todo} index={index} />
        )}
      </Host>
    );
  }
}
