import { Component, Prop, Method } from "@stencil/core";

@Component({
  tag: "mi-drawer",
  styleUrl: "./mi-drawer.scss",
  shadow: true,
})
export class Drawer {
  @Prop({ mutable: true }) visible: boolean;
  @Prop() closable: boolean;
  @Prop() enableBackdrop: boolean;
  @Prop() name: string;
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
      <aside class={`drawer ${this.visible ? "" : "hide"}`}>
        {this.closable ? (
          <mi-circle-button
            class="drawer__close-btn"
            with-x
            onClick={this.close.bind(this)}
          />
        ) : null}
        <header>
          <div class="header__text-group">
            <p>Hello,</p>
            <h3>{this.name}</h3>
          </div>
        </header>
        <section class="body-content">
          <slot name="body-content" />
        </section>
      </aside>,
      <div
        class={`${this.visible && this.enableBackdrop ? "backdrop" : "none"}`}
        onClick={this.close.bind(this)}
      />,
    ];
  }
}
