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
        {this.description ? (
          <h2 class="description-test">{this.description}</h2>
        ) : null}
        {this.extraInfo ? <p class="extraInfo-test">{this.extraInfo}</p> : null}
      </div>
    );
  }
}
