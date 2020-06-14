const content_level = { 
  'Level 1': [
    {
      header: '<h1>Introduction</h1>',
      text: "Hello, welcome to this Flexbox game! I guess if you are here it's because you already know CSS basics. If you don't know probably you will not understand a lot of stuff, sooo... Please, check CSS basics before move on! It's like teach someone to crack an egg without teach her how to cook one.",
      example: ""
    },
    {
      header: '<h1>Introduction</h1><h3>How it works</h3>',
      text: "All you have to do it's write the right commands that we are gonna ask you. In this module we are learning flexbox, if you try to use another commands will not pass that stage. Even if the position of the element is correct.",
      example: ""
    },
    {
      header: '<h1>Introduction</h1><h3>First of all</h3>',
      text: "Primeiro de tudo, o porquê do flexbox ser tão utilizado! \nDentro da propriedade display do CSS existem alguns valores que já influenciam na posição dos elementos, que é o Block ( pré-selecionado ao criar uma div), Inline (pré-selecionado em img, a, strong tags, ...), dentre outros.",
      example: "<div class='example'><p>This is a container ↝</p>\n <div class='block'>This it's a div with default 'display: block'</div>And this -> <i class='fas fa-hand-spock i'></i> is a i tag with default 'display: inline'</div>"
    },
    {
      header: '<h1>Introduction</h1>',
      text: "Essas propriedades tem um comportamento padrão que acaba influenciando no seu posicionamento, mas, como você já deve saber, existe uma propriedade do CSS chamada position em que podemos modificar explícitamente sua posição. Inclusive, é possível reproduzir posicionamentos de flex através da propriedade position absolute (para o container pai) e relative (para os elementos que são filhos direto), porém teríamos de ditar a posição deles utilizando top, bottom, left and right além de definir um tamanho específico. Isso faz com que tornar responsivo seja um pouco mais complicado. ",
      example: `<div class='example'>
      <h3>Card using position</h3>
      <div class="showVsCode">
        <div class='card-example-position'>
          <img src='https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg' />
          <div class='card-example-position-infos'>
            <h2>Product name</h2>
            <p>Product description with <strong>relevant info</strong> only.</p>
          </div>
        </div>
        <div class="box-codes">
          <div>
            <button class="btn-html">HTML</button><button class="btn-css">CSS</button>
          </div>
          <div class="html-code">
            <pre>
&lt;div class="card-example-position"&gt;
&lt;img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" /&gt;
&lt;div class="card-example-position-infos"&gt;
&lt;h2&gt;Product name&lt;/h2&gt;
&lt;p&gt;Product description with &lt;strong&gt;relevant info&lt;/strong&gt; only.&lt;/p&gt;
&lt;/div&gt;
&lt;/div&gt;
            </pre>
          </div>
          <div class="css-code disable">
            <pre>
.card-example-position {
  overflow: hidden;
  height: 120px;
  min-width: 500px;
  background: white;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  position: relative;
  color: black;
}

.card-example-position img {
  position: absolute;
  left: 0;
  height: 100%;
  width: 120px;
  object-fit: cover;
}

.card-example-position h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.card-example-position p {
  font-size: 12px;
  line-height: 1.4;
  opacity: .7;
  margin-bottom: 0;
  margin-top: 8px;
}

.card-example-position .card-example-position-infos {
  padding: 16px;
  position: absolute;
  text-align: left;
  left: 120px;
  top: 20px;
}
            </pre>
          </div>
        </div>
      </div>
      <h3>Card using flex</h3>
      <div class="showVsCode">
        <div class='card-example-flex'>
          <img src='https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg' />
          <div class='card-example-flex-infos'>
            <h2>Product name</h2>
            <p>Product description with <strong>relevant info</strong> only.</p>
          </div>
        </div>
        <div class="box-codes">
          <div>
            <button class="btn-html-flex">HTML</button><button class="btn-css-flex">CSS</button>
          </div>
          <div class="html-code-flex">
            <pre>
&lt;div class="card-example-flex"&gt;
  &lt;img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboardjpg" /&gt;
  &lt;div class="card-example-flex-infos"&gt;
    &lt;h2&gt;Product name&lt;/h2&gt;
    &lt;p&gt;Product description with &lt;strong&gt;relevant info&lt;/strong&gt; only.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;
            </pre>
          </div>
          <div class="css-code-flex disable">
            <pre>
.card-example-flex {
  overflow: hidden;
  height: 120px;
  max-width: 500px;
  background: white;
  box-shadow: 0 0 15px rgba(0,0,0,0.2);
  display: flex;
  align-items: center;
  text-align: left;
  color: black;
}

.card-example-flex img {
  height: 100%;
  width: 120px;
  object-fit: cover;
}

.card-example-flex h2 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}

.card-example-flex p {
  font-size: 12px;
  line-height: 1.4;
  opacity: .7;
  margin-bottom: 0;
  margin-top: 8px;
}

.card-example-flex .card-example-flex-infos {
  padding: 16px;
}
            </pre>
          </div>
        </div>
      </div>
    </div>`,
    },
    {
      header: "<h1>Introduction</h1>",
      text: "Uma coisa que precisa saber antes sobre flexbox é que ele posiciona seus elementos de forma unidimensional, ou seja, ele trabalha com uma dimensão de cada vez, seja linha ou coluna. Para formas mais complexas como o bi-dimensional, recomendamos, após ter aprendido a utilizar o flexbox, você mergulhar em Grid! ",
      example: `<div class='grid-flex'>
      <div class="ex-flex-grid">
        <h3>Flexbox example</h3>
        <div class="flexbox-example">
          <div class="cards-example">
            <div class='card-box'>Card</div>
            <div class='card-box'>Card</div>
            <div class='card-box'>Card</div>
          </div>
          <div class="another-cards-example">
            <div class="card-box">Card</div>
            <div class="card-box">Card</div>
            <div class="card-box">Card</div>
          </div>
        </div>
      </div>
      <div class="ex-flex-grid">
        <h3>Grid Example</h3>
        <div class="grid-example">
          <div class="card-grid">Card</div>
          <div class='column-example'>
            <div class="card-grid">Card</div>
            <div class="card-grid">Card</div>
            <div class="card-grid">Card</div>
          </div>
          <div class="row-example">
            <div class="card-grid">Card</div>
            <div class="card-grid">Card</div>
            <div class="card-grid">Card</div>
          </div>
        </div>
      </div>
    </div>`
    },
    {
      header: "<h1>Introduction</h1>",
      text: "O flexbox busca posicionar elementos dentro de seus containers, espaço em que estão contidos, ou seja, para organizar elementos utilizando propriedades do flex, muitas vezes você aplica eles no pai para ditar o comportamento dos seus filhos diretos.",
      example: `<div class="example">
          <p>O <strong class="red">vermelho</strong> é pai do <strong class="blue">azul</strong> e o <strong class="blue">azul</strong> é filho direto do <strong class="red">vermelho</strong>;</p>
          <p>O <strong class="blue">azul</strong> é pai dos <strong class="green">verdes</strong> e os <strong class="green">verdes</strong> são todos filhos diretos do <strong class="blue">azul</strong>;</p>
          <p>O <strong class="red">vermelho</strong> não é pai dos <strong class="green">verdes</strong> como os <strong class="green">verdes</strong> também não são filhos diretos do <strong class="red">vermelho</strong></p>
          <div class="showVsCode">
            <div class="grandpa">
              <div class="father">
                <div class="sons"></div>
                <div class="sons"></div>
                <div class="sons"></div>
              </div>
            </div>
            <div>
              <div class="box-codes">
                <h3>HTML</h3>
                <div class="html-code-flex">
                  <pre>
&lt;div class="grandpa"&gt;
  &lt;div class="father"&gt;
    &lt;div class="sons"&gt;&lt;/div&gt;
    &lt;div class="sons"&gt;&lt;/div&gt;
    &lt;div class="sons"&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>`
    },
    {
      header: "<h1>Introduction</h1>",
      text: `Bom, vamos começar!
      Primeiro, vamos aprender a usar flexbox adicionando propriedades no Pai para modificar seus filhos. `,
      example: ""
    },
    {
      header: "<h1 class='actual-lvl'>Level 1</h1>",
      text: "A primeira coisa que devemos fazer é dizer ao pai que queremos 'display: flex;', então você verá que automáticamente seus filhos ficarão todos em apenas uma linha. Caso não tenha específicado a largura eles se empremerão para caber. ",
      example: `<div class="content">
      <div id="iframes">
      <iframe src="https://isaporto.github.io/landing/" id="iframe-question" class="frame" frameborder="0" allowfullscreen="true">
      </iframe>
    </div>
    </div>`,
    exercise: true
    }
  ],
  'Level 2': [],
}

module.exports = { content_level };