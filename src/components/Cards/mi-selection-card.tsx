import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mi-selection-card",
  styleUrl: "./mi-selection-card.scss",
  shadow: true,
})
export class SelectionCard {
  @Prop() description: string;
  @Prop() extraInfo: string;

  render() {
    return (
      <div class="card">
        <div class="icon__container">
          <slot name="icon" />
        </div>
        <h2>{this.description}</h2>
        <p>{this.extraInfo}</p>
      </div>
    );
  }
}
