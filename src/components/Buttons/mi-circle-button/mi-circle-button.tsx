import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-circle-button",
  styleUrl: "./mi-circle-button.scss",
  shadow: true,
})
export class SelectionCard {
  @Prop() text: string;
  @Prop() outline: boolean;
  @Prop() withX: boolean;
  @Prop() withPlus: boolean;
  render() {
    if (this.withX && this.withPlus) {
      throw new Error("Can't have both withX and withPlus props");
    }
    return (
      <button class={`btn ${this.outline ? "outline" : ""}`}>
        {this.withX ? "x" : ""}
        {this.withPlus ? "+" : ""}
      </button>
    );
  }
}
