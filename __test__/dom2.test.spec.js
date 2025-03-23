describe('Testing DOM manipulation', () => {
    const template = `
    <div class="container">
    <div class="card card0 blue">
      <div class="border">
        <h4>Bob Marley</h4>
      </div>
    </div>
    <div class="card card1 yellow">
      <div class="border">
        <h4>Kurt Cobain</h4>
      </div>
    </div>
    <div class="card card2 dark">
      <div class="border">
        <h4>Kesha</h4>
      </div>
    </div>
    </div>
    `;

    beforeEach(() => {
        document.body.innerHTML = template;
        const { changeContainer } = require('../2-dom/dom');
        changeContainer();
    });

    test('Display: flex is set on the container', () => {
        const container = document.querySelector('.container');
        expect(container.style.display).toBe('flex');
    })

    test('Flex direction: row is set on the container', () => {
        const container = document.querySelector('.container');
        expect(container.style.flexDirection).toBe('row');
    })

    test('10px and auto margin is set on the container', () => {
        const container = document.querySelector('.container');
        expect(container.style.margin).toBe('10px auto');
    })

    test('A solid 2px #707d7c-colored border is set on the container', () => {
        const container = document.querySelector('.container');
        expect(container.style.border).toBe('2px solid #707d7c');
    })

    test('A 2em padding is set on the container', () => {
        const container = document.querySelector('.container');
        expect(container.style.padding).toBe('2em');
    })

});