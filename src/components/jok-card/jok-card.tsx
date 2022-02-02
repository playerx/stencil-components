import { Component, h, Host, Method, Prop } from '@stencil/core'

@Component({
  tag: 'jok-card',
  styleUrl: 'jok-card.scss',
  shadow: true,
})
export class JokCard {
  @Prop()
  color: string

  @Prop()
  state: { name: string; email: string }

  @Method()
  async method() {
    return 11
  }

  render() {
    return (
      <Host>
        <div>
          Card:
          <span>
            Hey there
            <slot name="t1"></slot>
            <div>{this.state?.name}</div>
            <div>{this.color}</div>
            <div>asd {this.method}</div>
            <slot></slot>
          </span>
        </div>
      </Host>
    )
  }
}
