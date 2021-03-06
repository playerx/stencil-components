import { Component, h, Prop } from '@stencil/core'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string

  /**
   * The middle name
   */
  @Prop() middle: string

  /**
   * The last name
   */
  @Prop() last: string

  render() {
    return (
      <div>
        Hey There
        <jok-card color="red" state={{ name: 'ez', email: '123' }}>
          Wow inside
        </jok-card>
      </div>
    )
  }
}
