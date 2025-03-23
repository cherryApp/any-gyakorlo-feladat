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
        const { changeCards } = require('../2-dom/dom');
        changeCards();
    });

    test('The background color of the element with blue class is "cornflowerblue"', () => {
        const target = document.querySelector(`.blue`);
        expect(target.style.backgroundColor).toBe('cornflowerblue');
    });

    test('The background color of the element with yellow class is "orange"', () => {
        const target = document.querySelector(`.yellow`);
        expect(target.style.backgroundColor).toBe('orange');
    });

    test('The background color of the element with dark class is "navy"', () => {
        const target = document.querySelector(`.dark`);
        expect(target.style.backgroundColor).toBe('navy');
    });

    test('Three h4 elements found, the font style of h4 elements is italic', () => {
        const targets = document.querySelectorAll('h4');
        expect(targets.length).toBe(3);
        expect(targets[0].style.fontStyle).toBe('italic');
        expect(targets[1].style.fontStyle).toBe('italic');
        expect(targets[2].style.fontStyle).toBe('italic');
    });


});