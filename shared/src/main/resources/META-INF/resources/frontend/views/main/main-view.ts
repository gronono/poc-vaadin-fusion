import { css, customElement, html, LitElement, property } from 'lit-element';

@customElement('main-view')
export class MainView extends LitElement {
  render() {
    return html`
        <h1>Hello shared view</h1>
    `;
  }
}
