import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-button",
  styleUrl: "./mi-button.scss",
  shadow: true,
})
export class SelectionCard {
  @Prop() text: string;
  @Prop() outline: string;
  render() {
    return (
      <button class={`btn ${this.outline ? "outline" : ""}`}>
        {this.text}
      </button>
    );
  }
}
