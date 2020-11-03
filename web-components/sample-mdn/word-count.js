// サンプルとして一旦p要素を継承元にしている
class WordCount extends HTMLParagraphElement {
  constructor() {
    super()

    const wcParent = this.parentNode

    // p要素を調べて区切りがいくつあるかを数えてその数を返す
    const countWords = (node) => {
      const text = node.innerText || node.textContent
      return text.split(/\s+/g).length
    }

    const count = `Words: ${countWords(wcParent)}`

    // create a shadow root
    const shadow = this.attachShadow({mode: 'open'})

    // create text node and add word const to it
    const text = document.createElement('span')
    text.textContent = count

    // Append it to the shadow root
    shadow.appendChild(text)

    setInterval(function() {
      const count = `Words: ${countWords(wcParent)}`
      text.textContent = count
    }, 200)
  }
}


// Custom DOM
// ビルトインHHTMLを継承して作成する方法ここでは、p要素にしている
customElements.define('word-count', WordCount, {extends: 'p'})
