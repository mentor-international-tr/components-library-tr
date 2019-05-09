import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-button",
  styleUrl: "./mi-button.scss",
  shadow: true,
})
export class SelectionCard {
  @Prop() text: string;
  render() {
    return <button class="btn outline">{this.text}</button>;
  }
}
