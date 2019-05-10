import { Component, Prop, Method } from "@stencil/core";

@Component({
  tag: "mi-drawer",
  styleUrl: "./mi-drawer.scss",
  shadow: true,
})
export class SelectionCard {
  @Prop({ mutable: true }) visible: boolean = true;
  @Prop() closable: boolean;
  @Prop() backdrop: boolean;
  @Method()
  open() {
    this.visible = true;
  }
  @Method()
  close() {
    this.visible = false;
  }
  render() {
    return [
      <div class={`drawer ${this.visible ? "" : "hide"}`}>
        <header>
          {this.closable ? (
            <mi-circle-button
              class="drawer__close-btn"
              with-x
              onClick={this.close.bind(this)}
            />
          ) : null}
        </header>
        <section class="body-content" />
      </div>,
      <div
        class={`${this.visible ? "backdrop" : "none"}`}
        onClick={this.close.bind(this)}
      />,
    ];
  }
}
