import { Lightning } from '@lightningjs/sdk'
import LargeTree from './LargeTree'

export class App extends Lightning.Component {
  static override _template() {
    return {
      w: 1280,
      h: 720,
      LargeTree: {
        type: LargeTree,
      },
    }
  }

  override _init() {
    console.time('hide using alpha')
    this.tag('LargeTree').patch({ alpha: 0 })
    console.timeEnd('hide using alpha')

    console.time('show using alpha')
    this.tag('LargeTree').patch({ alpha: 1 })
    console.timeEnd('show using alpha')

    console.time('hide using scaleX')
    this.tag('LargeTree').patch({ scaleX: 0.0001 })
    console.timeEnd('hide using scaleX')

    console.time('show using scaleX')
    this.tag('LargeTree').patch({ scaleX: 1 })
    console.timeEnd('show using scaleX')
  }
}
