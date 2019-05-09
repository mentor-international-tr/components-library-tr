import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-button",
  styleUrl: "./mi-button.scss",
  shadow: true,
})
export class SelectionCard {
  @Prop() text: string;
  @Prop() outline: boolean;
  render() {
    return (
      <button class={`btn ${this.outline ? "outline" : ""}`}>
        <div class={`icon-container ${this.text ? "add-space-right" : ""}`}>
          <slot name="icon" />
        </div>
        {this.text ? <span class="text-test">{this.text}</span> : null}
      </button>
    );
  }
}
